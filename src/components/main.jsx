// import { useState } from "react"
// // eslint-disable-next-line no-unused-vars
// import AddDoctor from "./addDoctor";
// // eslint-disable-next-line no-unused-vars
// import EditDoctor from "./editDoctor";
import { useNavigate } from "react-router-dom";
import { deleteDoctor } from "../helpers/help";

// eslint-disable-next-line react/prop-types
export default function MainBar({doctorData,setDoctordata}){

  const navigate=useNavigate(); 
   // eslint-disable-next-line no-unused-vars
  //  const [showForm, setShowForm] = useState(true);
   // eslint-disable-next-line no-unused-vars
  //  const [editId,setEditId] = useState("");

   //Delete doctor details functonality
   const deleteDoctorDetails=(id)=>{
    deleteDoctor(id).then((data)=>{
    if(data){  
 const remainingDoctors  = doctorData.filter((docInfo)=>docInfo.id !=id)
    setDoctordata([...remainingDoctors]);}else{
      console.log("Error deleting data")
    }

    })
    // eslint-disable-next-line react/prop-types
   
   };
   //edit button handler
   const handlerEdit =(id)=>{
     navigate(`/edit/doc/${id}`);
   };
   return(<div className="main">
    <div className="grid justify-end p-2"><button className="btn btn-primary w-24" onClick={()=>navigate("/add/doc")}>Add Doctor</button></div>
     
      {/* {showForm === true ?(
      <AddDoctor
     doctorData={doctorData}
     setDoctordata={setDoctordata}
     />
     ):(
     <EditDoctor
      doctorData={doctorData}
     setDoctordata={setDoctordata}
    showForm={showForm}
     setShowForm={setShowForm}
     editId={editId}
     /
     )} */}
    {doctorData && (
      <>
      {doctorData?.map((docInfo, idx)=>(
        
<div key={idx} className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{docInfo.doc_name}</h2>
    <p>{docInfo.hospital_name}</p>
    <p>{docInfo.specialization}</p>
    {/* <select className="select select-bordered select-sm w-28 max-w-xs">
  {docInfo.status == "Available"? 
  (<option>Available</option> ):
  (<option>Not Available</option>)
   } 
   {docInfo.status =="Not Available"? 
  (<option>Available</option>):
  (<option>Not Available</option>)
   } 
  
</select> */}
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handlerEdit(docInfo.id)}>Edit</button>
       <button className="btn btn-error "
       onClick={()=>deleteDoctorDetails(docInfo.id)}>Dlete</button>
    </div>
  </div>
</div>
      ))}
      </>

    )}

   </div>)
}