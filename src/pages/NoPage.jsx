import { useNavigate } from "react-router-dom";

const NoPage=()=>{
    const navigate=useNavigate("/")
    return(
        <div className="grid justify-center place-items-center">
            <div className="text-Ig">404 no content</div>
            <button className="btn btn-accent" onClick={()=>navigate("/")}>Home</button>
        </div>
    )
};

export default NoPage;