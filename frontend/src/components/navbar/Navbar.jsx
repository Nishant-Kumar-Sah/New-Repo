import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Navbar = () => {
        const { toggle, darkMode } = useContext(DarkModeContext);
        const { currentUser } = useContext(AuthContext);
        const navigate = useNavigate();
        const [err, setErr] = useState(null);
        const handleLogout = async(e) =>{
                try{
                        await axios.post("http://localhost:8800/api/auth/logout")
                        navigate("/Login")
                }catch(err) {
                        setErr(err.response.data)
                }
        }
        return (
                <div className="navbar">
                        <div className="left">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                        <span>CPians</span>
                                </Link>
                                
                        </div>
                        <div className="right">
                                <Link to = "/CP" style={{textDecoration:"none"}}>
                                        <span>Competitive Programming</span>
                                </Link>
                                <Link to = "/DSA" style={{textDecoration:"none"}}>
                                        <span>Data Structures</span>
                                </Link>
                                <Link to = "/Puzzles" style={{textDecoration:"none"}}>
                                        <span>Puzzles</span>
                                </Link>
                                <Link to = "/Mashup" style={{textDecoration:"none"}}>
                                        <span>Mashups</span>
                                </Link>
                                <Link to = "/Blogs" style={{textDecoration:"none"}}>
                                        <span>Blogs</span>
                                </Link>
                                <div className ='icons'>{darkMode ? <DarkModeOutlinedIcon onClick ={toggle}/> : <WbSunnyOutlinedIcon onClick = {toggle}/>}</div>
                                <div className="user">
                                        <img
                                                src={"/upload/" + currentUser.profilePic}
                                                alt=""
                                        />
                                        <span>{currentUser.name}</span>
                                </div>
                                <div className="icons">
                                        <LogoutIcon onClick={handleLogout}/>
                                </div>
                        </div>
                </div>
        );
};

export default Navbar;
