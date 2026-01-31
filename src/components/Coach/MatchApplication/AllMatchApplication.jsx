import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"

export default function AllMatchAppliction() {
    const [matchApplication, setMatchApplication] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
    const userId=sessionStorage.getItem("userId")




    const fetchData = () => {

         const data = {
            coachId:userId
        }
        ApiService.allMatchApplication(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setMatchApplication(res.data.data)


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


    
    


    const deleteMatchApplication = (id) => {
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
                ApiService.DeleteMatchApplication(data)
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
                <div className="heading" style={{ backgroundColor: "#2c7a7b",color:"white"  }} >
                    <div className="container " >
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title text-white">Match Application</h1>
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
                                <Link href="/">Home</Link>
                            </li>
                            <li className="current">All Match Application</li>
                        </ol>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        {matchApplication.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">Team Name</th>
                                            <th scope="col">League Name</th>
                                            <th scope="col">Sport Name</th>


                                            
                                            <th scope="col">Status</th>



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {matchApplication?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.teamId?.teamName}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.leagueId?.leagueName}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.sportsId?.sportName}</h5>
                                                </td>

                                               
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

                                                <td>
                                                    {/* <button className="btn">
                                                        <ReactSwitch
                                                            checked={el?.status === "Approved"}
                                                            onChange={() => changeStatus(el?._id, el?.status)}
                                                        />
                                                    </button>


                                                    <button className="btn" onClick={() => { deleteMatchApplication(el?._id) }}><i class="bi bi-trash-fill"></i></button> */}
                                                    {/* <Link to={`/coach/matchapplication/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No matchApplication available
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