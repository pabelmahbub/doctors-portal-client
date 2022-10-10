import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequiredAuth from './Pages/Login/RequiredAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="/appointment" element={
          <RequiredAuth>
            <Appointment />
          </RequiredAuth>}/>

          <Route path="/dashboard" element={
          <RequiredAuth>
            <Dashboard />
          </RequiredAuth>}>

          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview/>} />
          <Route path="myHistory" element={<MyHistory />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>} />
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>} />
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>} />

          </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>

      <ToastContainer></ToastContainer>


    </div>
  );
}

export default App;
