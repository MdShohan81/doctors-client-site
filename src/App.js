import logo from './logo.svg';
import './App.css';
import Menubar from './Shared/Menubar/Menubar';
import {Routes, Route } from 'react-router-dom';
import Home  from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import SignIn from './Pages/SignIn/SignIn';


function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
