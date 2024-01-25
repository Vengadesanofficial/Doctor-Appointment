// import React from "react";
import WorkSpace from "../components/workspace";
// import MainBar from "../components/main";
import EditDoctor from "../components/editDoctor";
import { useParams } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const DocEdit = ({doctorData,setDoctordata})=>{
    const {id} = useParams();
    console.log(id);
    return(
<WorkSpace>
    <EditDoctor 
    doctorData={doctorData} 
    setDoctordata={setDoctordata}
    editId={id}
    />
</WorkSpace>

    )
}






export default DocEdit;