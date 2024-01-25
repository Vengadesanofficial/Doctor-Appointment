// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkSpace from "../components/workspace";
import AddDoctor from "../components/AddDoctor";
// eslint-disable-next-line react/prop-types
const DocAdd = ({doctorData,setDoctordata})=>{
    return(<div> <WorkSpace>
        <AddDoctor doctorData={doctorData} setDoctordata={setDoctordata}/>
        </WorkSpace></div>)
}






export default DocAdd;