// eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewDoctor } from "../helpers/help";
import { useFormik } from "formik";
import { docSchema } from "../helpers/hema";

// eslint-disable-next-line react/prop-types
const AddDoctor=({doctorData,setDoctordata})=>{
    // eslint-disable-next-line no-undef
    // const [docname, setDocname] = useState("")
    // eslint-disable-next-line no-undef
    // const [hospitalName, setHospitalName] = useState("")
    // eslint-disable-next-line no-undef
    // const [specialization, setSpecialization] = useState("")
    const navigate = useNavigate();

//for formic
const{values,
  handleChange,
  handleSubmit,
  handleBlur,
  errors,
  touched
}=useFormik({
  initialValues:{
    doc_name: "",
    hospital_name: "",
    specialization: "",
    status:"Available"
  },
  validationSchema:docSchema,
  onSubmit:(newDoctor)=>{

    addNewDoctorDetails(newDoctor)
  }
})





    const addNewDoctorDetails=(newDoctorDetails)=>{
            // doc_name:docname,
        // hospiyal_name:hospitalName,
        // specialization,
        // status:"Available",
      addNewDoctor(newDoctorDetails).then((data)=>{
        if(data){
setDoctordata([...doctorData, newDoctorDetails]);
navigate("/")
        }else{
          console.log("cannot add new doctor")
        }
      })

    };
    
    return(
      
            <div className="grid grid-rows-4 justify-center gap-4 w-64"
           >
              <form onSubmit={handleSubmit}>
              <input type="text"
               placeholder="Enter Doctor Name"
                className="input input-bordered w-80"
            value = {values.doc_name}
            onBlur={handleBlur}
            name="doc_name"
            onChange={handleChange}/>

{touched.doc_name && errors.doc_name?(
<div className="text-red-400">{errors.doc_name}</div>
  ):(
    ""
    )}

<input type="text" 
placeholder="Enter Hospital" 
className="input input-bordered w-80"
 value = {values.hospital_name}
 onBlur={handleBlur}
 name="hospital_name"
 onChange={handleChange} />

{touched.hospital_name && errors.hospital_name?(
<div className="text-red-400">{errors.doc_name}</div>
  ):(
    ""
    )}

<input type="text"
 placeholder="Emter specialization"
  className="input input-bordered w-80"
 value = {values.specialization}
 onBlur={handleBlur}
 name="specialization"
onChange={handleChange} />

{touched.specialization && errors.specialization?(
<div className="text-red-400">{errors.doc_name}</div>
  ):(
    ""
    )}

<button className="btn btn-active btn-accent w-24
h-7 justify-self-center" type="submit" >Add
</button>
</form>
</div>

)
    }



export default AddDoctor;