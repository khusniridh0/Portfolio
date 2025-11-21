import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";

const Project = () => {
    const navigate = useNavigate();
    

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    }, [navigate])

    return (
        <div>
            <h1>Hi, ini adalah halaman project</h1>
            <NavLink to="/">Landing</NavLink>
        </div>
    );
}

export default Project;