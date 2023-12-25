import "./leftBar.scss";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

        const { currentUser } = useContext(AuthContext);

        return (
                <div className="leftBar">
                        <div className="container">
                                <div className="menu">
                                        <div className="topics">
                                                <span>Topics</span>
                                        </div>
                                        <div className="item">
                                                Number Theory
                                        </div>
                                        <div className="item">
                                                Binary Search
                                        </div>
                                        <div className="item">
                                                Dynamic Programming
                                        </div>
                                        <div className="item">
                                                BFS
                                        </div>
                                        <div className="item">
                                                Two Pointers
                                        </div>
                                        <div className="item">
                                                Hashing
                                        </div>
                                        <div className="item">
                                                Graphs
                                        </div>
                                        <div className="item">
                                                Heap
                                        </div>
                                        
                                </div>
                                
                        </div>
                </div>
        );
};

export default LeftBar;
