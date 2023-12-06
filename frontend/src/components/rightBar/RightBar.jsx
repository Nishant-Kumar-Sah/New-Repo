import { useQuery } from "@tanstack/react-query";
import "./rightBar.scss";
import { makeRequest } from "../../axios";
import moment from "moment";
const RightBar = ({userId}) => {
        const { isLoading, error, data } = useQuery(
        {
                queryKey:["posts"], 
                queryFn: () =>
                makeRequest.get("/posts?userId="+userId).then((res) => {
                        return res.data;
                })
        }
  );
  return (
    <div className="rightBar">
      <div className="container">
        
        <div className="item">
          <span>Latest Activities</span>
          {
                error
                ? "Something went wrong!"
                : isLoading
                ? "loading"
                : data.map ((post) =>{

                                return (

                                        <div className="user">
                                                <div className="userInfo">
                                                        <img src={post.profilePic} alt="" />
                                                        <p>
                                                                <span style={{fontWeight: "1000"}}>{post.name} </span>
                                                                <span>{post.title}</span>
                                                        </p>
                                                </div>
                                                <span className="date">{moment(post.createdAt).fromNow()}</span>
                                        </div>
                                )
                        }) 

                }
          
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Jane Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div> */}
          
        </div>
       
      </div>
    </div>
  );
};

export default RightBar;
