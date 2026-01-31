import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"

export default function AllMatch() {
    const [match, setMatch] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
      const [selectedSport, setSelectedSport] = useState("All");



    const fetchData = () => {

        // const data = {
        //     limit: Limit,
        //     currentPage: currentPage
        // }
        ApiService.allMatch()
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setMatch(res.data.data)


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
     const filteredMatch =
        selectedSport === "All"
            ? match
            : match.filter(
                (el) => el?.sportsId?._id === selectedSport
            );

     const statuses = ["Upcoming", "Ongoing", "Completed", "Cancelled"]
   

    const changeStatus = (id, newStatus) => {

  Swal.fire({
    title: "Are you sure?",
    text: `Change status to "${newStatus}"?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, update"
  }).then((result) => {
    if (result.isConfirmed) {
      ApiService.changeStatusMatch({
        _id: id,
        status: newStatus
      })
        .then((res) => {
          if (res.data.success) {
            Swal.fire("Updated!", res.data.message, "success")
            fetchData()
          }
        })
        .catch((err) => toast.error(err.message))
    }
  })
}


    const deleteMatch = (id) => {
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
                ApiService.DeleteMatch(data)
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
                                    <h1 className="display-1 text-white mb-md-4">All teams</h1>
                                    <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                                        Home
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div> */}
            <div className="page-title "  >
                <div className="heading" style={{backgroundColor: "#2c7a7b",color:"white"  }} >
                    <div className="container " >
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title text-white">Match </h1>
                              
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
                            <li className="current">All Match /</li>
                              <div className="d-flex justify-content-center mx-2">
                                    <select
                                        className="form-select form-select-sm w-auto "
                                        value={selectedSport}
                                        onChange={(e) => setSelectedSport(e.target.value)}
                                    >
                                        <option value="All">All Sports</option>

                                        {[...new Map(
                                            match
                                                .filter(el => el?.sportsId)
                                                .map(el => [el.sportsId._id, el.sportsId])
                                        ).values()].map((sport) => (
                                            <option key={sport._id} value={sport._id}>
                                                {sport.sportName}
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
                        {filteredMatch.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">Match Name</th>
                                            <th scope="col">Team Name</th>

                                            <th scope="col">Sport Name</th>


                                            <th scope="col">Venue</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            {/* <th scope="col">TotalSeats</th>

                                            <th scope="col">Available Seats</th>
                                            <th scope="col">TicketPrice</th> */}




                                            <th scope="col">Status</th>
                                            <th scope="col">Actions</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filteredMatch?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="">{index + 1}</td>
                                                <td className="hover-bg">
                                                    <h5> {el?.matchName}</h5>
                                                </td>
                                                <td >

                                                    <td>
                                                        {el?.teamId?.map(t => t.teamName).join(" vs ")}
                                                    </td>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.sportsId?.sportName}</h5>
                                                </td>

                                                <td >
                                                    <h5>{el?.venue}</h5>
                                                </td>


                                                <td className="hover-bg">
                                                    <h5> {el?.matchDate
                                                        ? new Date(el.matchDate).toLocaleDateString("en-GB")
                                                        : "-"}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.matchTime}</h5>
                                                </td>
                                                {/* <td className="hover-bg">
                                                    <h5> {el?.totalSeats}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.availableSeats}</h5>
                                                </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.ticketPrice}</h5>
                                                </td> */}
                                                {/* <td className="hover-bg text-center">
                                                        {el?.logo ? (
                                                            <img
                                                                onClick={() => setPreviewImage(el.logo)}
                                                                src={el.logo}
                                                                alt="logo"
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
                                                    <h5 className={
                                                        el.status === "Approved"
                                                            ? "text-success"
                                                            : el.status === "Rejected"
                                                                ? "text-danger"
                                                                : "text-warning"
                                                    }>
                                                        {el.status}
                                                    </h5>
                                                </td>

                                                <td style={{ width: '20%' }} >
                                                    <select
                                                        className="form-select form-select-sm d-inline w-auto"
                                                        value={el.status}
                                                        onChange={(e) => changeStatus(el._id, e.target.value)}
                                                    >
                                                        <option value="Upcoming">Upcoming</option>
                                                        <option value="Ongoing">Ongoing</option>
                                                        <option value="Completed">Completed</option>
                                                        <option value="Cancelled">Cancelled</option>
                                                    </select>


                                                    <button className="btn" onClick={() => { deleteMatch(el?._id) }} style={{ fontSize: '15px' }}><i class="bi bi-trash-fill"></i></button>
                                                    <Link to={`/admin/match/update/${el._id}`} className="btn btn-success mx-2 " style={{ fontSize: '15px' }}> <i className="bi bi-pencil-fill " ></i></Link>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No match available
                                </h4>
                                <p>Please check back later.</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>



        </>
    )
}