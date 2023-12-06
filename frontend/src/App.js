import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
        createBrowserRouter,
        RouterProvider,
        Outlet,
        Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
// import RightBarMashup from "./components/rightBarForMsh/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Blogs from "./pages/blogs/Blogs";
import Cp from "./pages/competitiveProgramming/Cp";
import Mashup from "./pages/mashup/Mashup";
import RightBarMashup from "./components/rightBarForMashup/RightBarMashup"
function App() {
        const { currentUser } = useContext(AuthContext);

        const { darkMode } = useContext(DarkModeContext);

        const queryClient = new QueryClient();

        const Layout = () => {
                return (
                        <QueryClientProvider client={queryClient}>
                                <div className={`theme-${darkMode ? "dark" : "light"}`}>
                                        <Navbar />
                                        <div style={{ display: "flex" }}>
                                                {/* <LeftBar /> */}
                                                <div style={{ flex: 6 }}>
                                                        <Outlet />
                                                </div>
                                                {/* <RightBar /> */}
                                        </div>
                                </div>
                        </QueryClientProvider>
                );
        };
        const BlogLayout = () => {
                return (
                        <div className={`theme-${darkMode ? "dark" : "light"}`}>
                                {/* <Navbar/> */}
                                <div style={{display:"flex"}}>
                                        {/* <Leftbar/> */}
                                       <div style={{flex:8}}>
                                        <Outlet/>
                                        </div> 
                                        <RightBar/>
                                </div>
                        </div>
                )
        }
        const CpPageLayout = () => {
                return (
                        <div className={`theme-${darkMode ? "dark" : "light"}`}>
                                {/* <Navbar/> */}
                                <div style={{display:"flex"}}>
                                        <LeftBar/>
                                       <div style={{flex:8}}>
                                        <Outlet/>
                                        </div> 
                                        {/* <Rightbar/> */}
                                </div>
                        </div>
                )
        }
        const MashupPageLayout = () => {
                return (
                        <div className={`theme-${darkMode ? "dark" : "light"}`}>
                                {/* <Navbar/> */}
                                <div style={{display:"flex"}}>
                                        {/* <LeftBar/> */}
                                       <div style={{flex:8}}>
                                        <Outlet/>
                                        </div> 
                                        <RightBarMashup/>
                                </div>
                        </div>
                )
        }
        const ProtectedRoute = ({ children }) => {
                if (!currentUser) {
                        return <Navigate to="/login" />;
                }

                return children;
        };

        const router = createBrowserRouter([
                {
                        path: "/",
                        element: (
                                <ProtectedRoute>
                                        <Layout />
                                </ProtectedRoute>
                        ),
                        children: [
                                {
                                        path: "/",
                                        element: <Home />,
                                },
                                {
                                        path: "/profile/:id",
                                        element: <Profile />,
                                },
                                {
                                        path:"/Blogs",
                                        element:(
                                                <ProtectedRoute>
                                                        <BlogLayout/>
                                                </ProtectedRoute>
                                        ),
                                        children:[
                                                {
                                                        path: "/Blogs",
                                                        element:<Blogs/>
                                                }
                                        ]  
                                },
                                {
                                        path:"/CP",
                                        element:(
                                                <ProtectedRoute>
                                                        <CpPageLayout/>
                                                </ProtectedRoute>
                                        ),
                                        children:[
                                                {
                                                        path: "/CP",
                                                        element:<Cp/>
                                                }
                                        ]    
                                },
                                {
                                        path:"/Mashup",
                                        element:(
                                                <ProtectedRoute>
                                                        <MashupPageLayout/>
                                                </ProtectedRoute>
                                        ),
                                        children:[
                                                {
                                                        path: "/Mashup",
                                                        element:<Mashup/>
                                                }
                                        ]    
                                },
                                {
                                        path:"/DSA",
                                        element: <Blogs/>,  
                                },
                                {
                                        path:"/Puzzles",
                                        element: <Blogs/>,  
                                },
                        ],
                },
                {
                        path: "/login",
                        element: <Login />,
                },
                {
                        path: "/register",
                        element: <Register />,
                },
        ]);

        return (
                <div>
                        <RouterProvider router={router} />
                </div>
        );
}

export default App;
