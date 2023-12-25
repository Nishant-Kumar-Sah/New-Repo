import React from 'react'
import "./home.scss" 
import { Link } from 'react-router-dom';
import Stories from '../../components/stories/Stories'
import Posts from '../../components/posts/Posts'
const Home = () => {
        return (
                <div className='home'>

                        <div className="container">
                                <div className="heading">
                                        <h1>Learn Competitive Programming</h1>
                                        <p>We provide curated practice problems, to develop your problem-solving skills and consistency. The problems are carefully selected to help you avoid redundancy and cover every topic extensively.</p>
                                        <Link to = "/CP">
                                        <button>Explore Now</button>

                                        </Link>
                                </div>
                                <img src="https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?size=626&ext=jpg&ga=GA1.1.298392432.1700737231&semt=sph" alt="" />
                        </div>
                        
                        <div className="container">
                                <img src="https://img.freepik.com/free-vector/hands-assembling-puzzle-concept-illustration_114360-17836.jpg?size=626&ext=jpg&ga=GA1.1.298392432.1700737231&semt=sph" alt="" />
                                <div className="heading">
                                        <h1>Solve Mind Boggling Puzzle </h1>
                                        <p>Test your problem solving abilities by solving some brainstorming puzzles.</p>
                                        <Link to="/Puzzles">
                                                <button>Explore Now</button>

                                        </Link>
                                </div>
                        </div>
                        <div className="container">
                                <img className="dsaPic" src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?size=626&ext=jpg&ga=GA1.1.298392432.1700737231&semt=sph" alt="" />
                                <div className="heading">
                                        <h1>Mashups</h1>
                                        <p>Practice problems in a contest environment. With our Codeforces web integration, you can create a custom contest with random problems from Codeforces.</p>
                                        <Link to = "/DSA">
                                        <button>Explore Now</button>

                                        </Link>

                                </div>
                        </div>
                        <div className="container">
                                <div className="heading">
                                        <h1>Visit Our Blog Page </h1>
                                        <p>Visit our blog page for interaction with fellow CPians, where we discuss on relevant topics related to Competitive Programming, Post Contest Discussions and much more.</p>
                                        <Link to="/Blogs">
                                                <button>Visit</button>
                                        </Link>
                                </div>
                                <img src="https://img.freepik.com/free-vector/meeting-concept-illustration_114360-717.jpg?size=626&ext=jpg&ga=GA1.1.298392432.1700737231&semt=sph" alt="" />
                        </div>
                </div>
        )
}

export default Home
