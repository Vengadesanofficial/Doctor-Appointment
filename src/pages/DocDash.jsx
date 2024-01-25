// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkSpace from "../components/workspace";
import MainBar from "../components/main";
// eslint-disable-next-line react/prop-types
const DocDash = ({doctorData,setDoctordata})=>{
    return(
<WorkSpace>
    <MainBar doctorData={doctorData} setDoctordata={setDoctordata}/>
</WorkSpace>

    )
}






export default DocDash;