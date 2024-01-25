import  {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { editNewDoctor } from "../helpers/help";
// eslint-disable-next-line react/prop-types
const EditDoctor=({doctorData, setDoctordata, editId})=>{
     const [docName, setDocName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [docStatus, setDocStatus] = useState("")
    const[index,setIndex]=useState();
    const navigate = useNavigate();
    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        const selectedDoctor = doctorData.filter((doc)=> doc.id == editId)
        const selectedDoctIndex = doctorData.findIndex((doc)=> doc.id == editId)
        setIndex(selectedDoctIndex);

        setDocName(selectedDoctor[0].doc_name);
        setHospitalName(selectedDoctor[0].hospital_name)
        setSpecialization(selectedDoctor[0].specialization)
        setDocStatus(selectedDoctor[0].status)
    },[editId]);
//update the doctor
const updateDoctorDetails = ()=>{
    const editedDoctor={
        doc_name:docName,
hospital_name:hospitalName,
specialization,
status:docStatus,
    };
    // console.log(doctorData);
    // console.log(editId);
    editNewDoctor(editId,editedDoctor).then((data)=>{
        if(data){
  doctorData[index] = (editedDoctor);
    setDoctordata([...doctorData]);
    navigate("/")
        }else{
            console.log("error occured")
        }
    })
  
    // setShowForm(!showForm)
}

    return <div>
 <div className="grid grid-rows-4 justify-center gap-2 "><input type="text" placeholder="Enter Doctor Name" className="input input-bordered w-80"
            value = {docName}
            onChange={(e)=>setDocName(e.target.value)}/>
<input type="text" placeholder="Enter Hospital" className="input input-bordered w-80"
 value = {hospitalName}
 onChange={(e)=>setHospitalName(e.target.value)} />
<input type="text" placeholder="Emter specialization" className="input input-bordered w-80"
 value = {specialization}
onChange={(e)=>setSpecialization(e.target.value)} />
<button className="btn btn-secondary w-24
h-7 justify-self-center" onClick={updateDoctorDetails}>Update</button>
</div>


    </div>;
};

export default EditDoctor;