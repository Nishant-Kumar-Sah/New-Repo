import { useQuery } from "@tanstack/react-query";
import "./rightBarMashup.scss";
import { makeRequest } from "../../axios";
import moment from "moment";
const RightBar = () => {
        
  
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
                <span>Recent Mashup Contests</span>
        </div>
        
        
       
      </div>
    </div>
  );
};

export default RightBar;
