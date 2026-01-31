import { useEffect, useState } from "react"

import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ApiService from "../../../services/ApiService"

export default function AdminTeam() {
    const [team, setTeam] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
    const userId=sessionStorage.getItem("userId")
      const [selectedSport, setSelectedSport] = useState("All");




    const fetchData = () => {

        // const data = {
        //     coachId:userId
        // }
        ApiService.allTeam()
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setTeam(res.data.data)


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

    const filteredTeams =
        selectedSport === "All"
            ? team
            : team.filter(
                (el) => el?.sportsId?._id === selectedSport
            );

    // const changeStatus = (id,status ) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You will be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText:  status === "Active" ? "Deactivate" : "Activate"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             let data = {
    //                 _id: id,
                    
    //             }
    //             let token = sessionStorage.getItem("token")
    //             let headers = {
    //                 Authorization: token
    //             }
    //             ApiService.changeStatusTeam(data)
    //                 .then((res) => {
    //                     if (res.data.success) {
    //                         Swal.fire({
    //                             title: res.data.message,
    //                             // text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                         fetchData()
    //                     }
    //                     else {
    //                         toast.error(res.data.message)
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     toast.error(err.message)
    //                 })
    //         }
    //     })
    // }

    // const deleteTeam = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: `${!id ? "Enable" : "Delete"}`
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             let data = {
    //                 _id: id,

    //             }
    //             let token = sessionStorage.getItem("token")
    //             let headers = {
    //                 Authorization: token
    //             }
    //             ApiService.DeleteTeam(data)
    //                 .then((res) => {
    //                     if (res.data.success) {
    //                         Swal.fire({
    //                             title: res.data.message,
    //                             // text: "Your file has been deleted.",
    //                             icon: "success"
    //                         });
    //                         fetchData()
    //                     }
    //                     else {
    //                         toast.error(res.data.message)
    //                     }
    //                 })
    //                 .catch((err) => {
    //                     toast.error(err.message)
    //                 })
    //         }
    //     })


    // }


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
                <div className="heading"style={{backgroundColor:"#2c7a7b",color:"white" }} >
                    <div className="container " >
                        <div className="row d-flex justify-content-center text-center">
                            <div className="col-lg-8">
                                <h1 className="heading-title text-white">TEAM</h1>
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
                            <li className="current">All teams /</li>
                            <div className="d-flex justify-content-center mx-2">
                                    <select
                                        className="form-select form-select-sm w-auto"
                                        value={selectedSport}
                                        onChange={(e) => setSelectedSport(e.target.value)}
                                    >
                                        <option value="All">All Sports </option>

                                        {[...new Map(
                                            team
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
                        {filteredTeams.length > 0 ? (
                            <div className="table-responsive">
                                < table className="table border ">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Sno</th>
                                            <th scope="col">team Name</th>
                                            <th scope="col">Coach Name</th>
                                            <th scope="col">Sport Name</th>


                                            <th scope="col">Players</th>

                                            
                                            <th scope="col">Description</th>
                                            <th scope="col">Logo</th>

                                            <th scope="col">Status</th>
                                           



                                        </tr>
                                    </thead>
                                    <tbody>

                                        {filteredTeams?.map((el, index) => (
                                            <tr key={index}>
                                                <td className="">{index + 1}</td>
                                                <td >
                                                    <h5>{el?.teamName}</h5>
                                                </td>
                                                <td className="hover-bg">
                                                    <h5> {el?.coachId.name}</h5>
                                                </td>
                                                 <td className="hover-bg">
                                                    <h5> {el?.sportsId?.sportName}</h5>
                                                </td>

                                                <td >
                                                    <h5>{el?.playersCount}</h5>
                                                </td>
                                               

                                                <td className="hover-bg">
                                                    <h5> {el?.description}</h5>
                                                </td>
                                                <td className="hover-bg text-center">
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
                                                    </td>

                                                <td className="hover-bg">
                                                    <h5> {el?.status === "Active" ? "Active" : "In-active"}</h5>
                                                </td>

                                                {/* <td >
                                                    <button className="btn">
                                                        <ReactSwitch
                                                            checked={el?.status==="Active"}
                                                            onChange={() => { changeStatus(el?._id, el?.status) }} /></button>
                                                    <button className="btn" onClick={() => { deleteTeam(el?._id) }}><i class="bi bi-trash-fill"></i></button>
                                                    <Link to={`/coach/team/update/${el._id}`} className="btn btn-success mx-2"> <i class="bi bi-pencil-fill"></i></Link>
                                                </td> */}
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="col-12 text-center">
                                <h4 className="text-muted">
                                    No team available
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