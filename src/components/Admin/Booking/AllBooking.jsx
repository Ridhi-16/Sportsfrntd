import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"


export default function AllBooking() {
    const [Booking, setBooking] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
      const [selectedMatch, setSelectedMatch] = useState("All");
    



    const fetchData = () => {

        // const data = {
        //     limit: Limit,
        //     currentPage: currentPage
        // }
        ApiService.allBooking()
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setBooking(res.data.data)


                }
                else {
                    toast.error(res.data.essage)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
     const filteredBooking =
        selectedMatch === "All"
            ? Booking
            : Booking.filter(
                (el) => el?.matchId?._id === selectedMatch
            );


    const changeStatus = (id, status) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: status === "Confirmed" ? "Cancelled" : "Confirmed"
        }).then((result) => {
            if (result.isConfirmed) {
                let data = {
                    _id: id,

                }
                let token = sessionStorage.getItem("token")
                let headers = {
                    Authorization: token
                }
                ApiService.changeStatusBooking(data)
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire({
                                title: res.data.message,
                                // text: "Your file has been deleted.",
                                icon: "success"
                            });
                            fetchData()
                        }
                        else {
                            toast.error(res.data.message)
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message)
                    })
            }
        })
    }

    const deleteBooking = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `${!id ? "Enable" : "Delete"}`
        }).then((result) => {
            if (result.isConfirmed) {
                let data = {
                    _id: id,

                }
                let token = sessionStorage.getItem("token")
                let headers = {
                    Authorization: token
                }
                ApiService.DeleteBooking(data)
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire({
                                title: res.data.message,
                                // text: "Your file has been deleted.",
                                icon: "success"
                            });
                            fetchData()
                        }
                        else {
                            toast.error(res.data.message)
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message)
                    })
            }
        })


    }


    return (
        <>





            {/* <div className="container-fluid bg-primary py-5 bg-hero mb-5">
                        <div className="container py-5">
                            <div className="row justify-content-start">
                                <div className="col-lg-8 text-center text-lg-start">
                                    <h1 className="display-1 text-white mb-md-4">All Bookings</h1>
                                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                                        Home
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div> */}
            <div className="page-title "  >
                <div className="heading" style={{ backgroundColor: "#2c7a7b" }} >
                    <div className="container " >
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title text-white">All Bookings</h1>
                                <p className="mb-0">
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadcrumbs">
                    <div className="container">
                        <ol>
                            <li>
                                <Link href="/admin">Home</Link>
                            </li>
                            <li className="current">All Bookings /</li>
                            <div className="d-flex justify-content-center mx-2">
                                    <select
                                        className="form-select form-select-sm w-auto "
                                        value={selectedMatch}
                                        onChange={(e) => setSelectedMatch(e.target.value)}
                                    >
                                        <option value="All">All Matchs</option>

                                        {[...new Map(
                                            Booking
                                                .filter(el => el?.matchId)
                                                .map(el => [el.matchId._id, el.matchId])
                                        ).values()].map((match) => (
                                            <option key={match._id} value={match._id}>
                                                {match.matchName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                        </ol>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        {filteredBooking.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Match Name</th>

                                            <th scope="col">Seats Booked</th>
                                            <th scope="col">Seats Numbers</th>
                                            <th scope="col">Amount</th>
                                          
                                            <th scope="col">Payment Mode</th>
                                            <th scope="col">Payment Status</th>


                                            <th scope="col">Booking Status</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filteredBooking?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.userId?.name}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.matchId.matchName}</h5>
                                                </td>

                                                <td >
                                                    <h5>{el?.seatsBooked}</h5>
                                                </td>
                                                <td className="hover-bg" >
                                                    <h4 className="property-title" style={{ display: "inline" }}>
                                                                
                                                                {el.seatsDetail.map((row, rowIndex) => (
                                                                    row.seatNumbers.map((seat, seatIndex) => (
                                                                        <span key={`${rowIndex}-${seatIndex}`} className="badge bg-primary me-1">
                                                                            {row.rowName}{seat}  {/* Optional: include row name */}
                                                                        </span>
                                                                    ))
                                                                ))}
                                                            </h4>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5>Rs {el?.totalAmount}</h5>
                                                </td>
                                                {/* <td className="hover-bg text-center">
                                                    {el?.image ? (
                                                        <img
                                                            onClick={() => setPreviewImage(el.image)}
                                                            src={el.image}
                                                            alt="land"
                                                            width="70"
                                                            height="55"
                                                            style={{
                                                                objectFit: "cover",
                                                                borderRadius: "4px",
                                                                border: "1px solid #ddd"
                                                            }}
                                                        />
                                                    ) : (
                                                        <span>No Image</span>
                                                    )}
                                                </td> */}
                                                

                                                <td className="hover-bg">
                                                    <h5> {el?.paymentMode}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.paymentStatus}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.status === "Confirmed" ? "Confirmed" : "Cancelled"}</h5>
                                                </td>

                                                <td style={{ width: '12%' }}>
                                                    <button className="btn">
                                                        <ReactSwitch
                                                            checked={el?.status === "Confirmed"}
                                                            onChange={() => { changeStatus(el?._id, el?.status) }} /></button>
                                                    {/* <button className="btn" onClick={() => { deleteBooking(el?._id) }}><i class="bi bi-trash-fill"></i></button> */}
                                                    {/* <Link to={`/Booking/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No Booking available
                                </h4>
                                <p>Please check back later.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)} // click outside closes
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()} // clicking image does not close
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            borderRadius: "6px",
                            boxShadow: "0 0 10px #000"
                        }}
                    />
                </div>
            )}



        </>
    )
}