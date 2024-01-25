
import { Route, Routes } from 'react-router-dom';
import './App.css'
// import TopBar from './components/Topbar';
// import MainBar from './components/main';
// import SideBar from './components/sidebar';
// import WorkSpace from './components/workspace';
import DocDash from './pages/DocDash';
// import AddDoctor from './components/addDoctor';
import DocAdd from './pages/AddDoc';
import DocEdit from './pages/DocEdit';
import { useEffect, useState } from 'react';
import NoPage from './pages/NoPage';
import { AppState } from './AppContext';
import { getAllDoctor } from './helpers/help';
import StatePage from './pages/state';
import Login from './pages/Login';




function App() {
  const [doctorData, setDoctordata] = useState();
useEffect(()=>{
getAllDoctor().then((data)=>{
  setDoctordata(data);
})
},[])
//     const data = [
//     {
// doc_name:"vengadesan",
// hospital_name:"caveri",
// specialization:"surgery",
// status:"Available",
//  },
//     {
// doc_name:"Ramachandran",
// hospital_name:"Krishna",
// specialization:"testing",
// status:"Not Available",
//  },

//    ];
 

const {theme} = AppState()
  return (<div className='app' data-theme={theme}>
    {/* <WorkSpace> 
    <TopBar>TopBar</TopBar>
    <SideBar>Sidebar</SideBar>
    <MainBar>MainBar</MainBar>
  </WorkSpace> */}
  <Routes>
    <Route exact path ="/" element={
    <DocDash  doctorData={doctorData} setDoctordata={setDoctordata}/>}/>
    <Route path="/add/doc" element={
    <DocAdd
    doctorData={doctorData} setDoctordata={setDoctordata}
    />}/>

     <Route path="/edit/doc/:id" element={
     <DocEdit doctorData={doctorData} setDoctordata={setDoctordata}
     />}/>

     <Route path= "/StatePage" element={<StatePage/>} />
<Route path="/login" element={<Login/>} />
     <Route
     path="*"
     element={
      <NoPage/>
     }
     />
     
  </Routes>
</div>
    
  )
}

export default App
