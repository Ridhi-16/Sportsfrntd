import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Bounce, ToastContainer } from 'react-toastify'
import Home from './components/pages/Home'
import Layout from './components/layouts/Layout'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Properties from './components/pages/Properties'
import PropertiesDetail from './components/pages/PropertiesDetail'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CoachRegister from './components/auth/CoachRegister'
import AddSport from './components/Admin/Sport/AddSport'
import AllSport from './components/Admin/Sport/AllSport'
import UpdateSport from './components/Admin/Sport/UpdateSport'
import AddTeam from './components/Coach/Team/AddTeam'
import AllTeam from './components/Coach/Team/AllTeam'
import UpdateTeam from './components/Coach/Team/UpdateTeam'
import AddMatchApplication from './components/Coach/MatchApplication/AddMatchApplication'
import AllMatchAppliction from './components/Coach/MatchApplication/AllMatchApplication'
import UpdateMatchApplication from './components/Coach/MatchApplication/UpdateMatchApplication'
import AddMatch from './components/Admin/Match/AddMatch'
import AllMatch from './components/Admin/Match/AllMatch'
import UpdateMatch from './components/Admin/Match/UpdateMatch'
import ManageSport from './components/User/Sport/ManageSport'
import ManageMatch from './components/User/Match/ManageMatch'
import ManageTeam from './components/User/Team/ManageTeam'
import AddBooking from './components/User/Booking/AddBooking'
import ManageBooking from './components/User/Booking/ManageBooking'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminLayout from './components/layouts/AdminLayout'
import AllCoach from './components/Admin/Coach/AllCoach'
import AllBooking from './components/Admin/Booking/AllBooking'
import AdminTeam from './components/Admin/Team/AdminTeam'
import ManageUsers from './components/Admin/User/ManageUsers'

import CoachLayout from './components/layouts/CoachLayout'
import CoachDashboard from './components/Coach/CoachDashboard'
import CoachSport from './components/Coach/Sport/CoachSport'
import CoachMatch from './components/Coach/Sport/CoachMatch'
import CoachTeam from './components/Coach/Sport/CoachTeam'
import UserTeam from './components/User/Team/UserTeam'
import AddAnnounce from './components/Admin/Announcment/AddAnnounce'
import AllAnnounce from './components/Admin/Announcment/AllAnnounce'
import CoachAnnounce from './components/Coach/Sport/CoachAnnounce'

import ManageMatchApplication from './components/Admin/MatchApplication/ManageMatchApplication'
import UpdateAnnounce from './components/Admin/Announcment/UpdateAnnounce'




// import './App.css'

function App() {

  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="properties" element={<Properties />} />
            <Route path="propertiesdetail" element={<PropertiesDetail />} />
            {/* <Route path="feature" element={<Feature />} />
            <Route path="testimonials" element={<Testimonial />} />

            <Route path="blog" element={<Blog />} />
            <Route path="product" element={<Product />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/coachregister" element={<CoachRegister />} />




           
            


            <Route path="sport/manage" element={<ManageSport />} />
            <Route path="match/manage/:id" element={<ManageMatch />} />
            <Route path="team/manage/:id" element={<ManageTeam />} />

            <Route path="booking/add/:id" element={<AddBooking />} />
            <Route path="booking/manage" element={<ManageBooking />} />
            <Route path="/team/userTeam" element={<UserTeam />} />















          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="sport/add" element={<AddSport />} />
            <Route path="sport/all" element={<AllSport />} />
            <Route path="sport/update/:id" element={<UpdateSport />} />
            <Route path="coach/all" element={<AllCoach />} />
            <Route path="booking/all" element={<AllBooking />} />
            <Route path="team/all" element={<AdminTeam />} />




            <Route path="match/add" element={<AddMatch />} />
            <Route path="match/all" element={<AllMatch />} />
            <Route path="match/update/:id" element={<UpdateMatch />} />


            <Route path="user/all" element={<ManageUsers />} />
            <Route path="matchapplication/manage" element={<ManageMatchApplication/>} />


            <Route path="announce/add" element={<AddAnnounce />} />
            <Route path="announce/all" element={<AllAnnounce />} />
            <Route path="announce/update/:id" element={<UpdateAnnounce />} />








          </Route>

          <Route path="/coach" element={<CoachLayout />}>
            <Route index element={<CoachDashboard />} />
              <Route path="team/add" element={<AddTeam />} />
            <Route path="team/all" element={<AllTeam />} />
            <Route path="team/update/:id" element={<UpdateTeam />} />
            <Route path="matchapplication/add/:id/:sportsId" element={<AddMatchApplication />} />
            <Route path="matchapplication/all" element={<AllMatchAppliction />} />

            <Route path="coach/matchApplication/update/:id" element={<UpdateMatchApplication />} />
            <Route path="coachsport/all" element={<CoachSport />} />
            <Route path="coachmatch/all/:id" element={<CoachMatch />} />
            <Route path="coachteam/all/:id" element={<CoachTeam />} />
            <Route path="coachannounce/all" element={<CoachAnnounce />} />





            


          </Route>




        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}


      />
    </>
  )
}

export default App
