import React, { useEffect, useState } from 'react'
import "../../style.scss";
import "./mashup.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
const Mashup = () => {
        const [displayForm, setDisplayForm] = useState(false);
        const [contestName, setContestName] = useState("")
        const contests = [
                {
                        name: "contest 1",
                },
                {
                        name: "contest 2"
                }
        ]
        const [rating, setRating] = useState("") // Rating Choosen By the User
        const [problemLink, setProblemLink] = useState("")
        const [contestDetails, setContestDetails] = useState(false);
        const [displayRatings, setDisplayRatings] = useState(false);
        const [mapProblem, setMapProblem] = useState({});
        const [linkToProblem, setLinkToProblem] = useState("")





        const[id, setId] = useState(0)
        const[index, setIndex] = useState("")
        const[name, setName] = useState("")
        const randomProblem = async (e) => {
                e.preventDefault();


                try {
                        let arr = []
                        const res = await fetch("https://codeforces.com/api/problemset.problems")
                        const response = await res.json();
                        const data = (response.result.problems)
                        for (let i = 0; i < data.length; i++) {
                                if (data[i].rating && data[i].rating === rating && data[i].contestId && data[i].index) {
                                        let temp = [];
                                        temp.push(data[i].contestId)
                                        temp.push(data[i].index)
                                        temp.push(data[i].name)
                                        arr.push(temp)
                                }
                        }
                        let char = Math.floor(Math.random() * arr.length + 1)
                        setId(arr[char][0])
                        setName(arr[char][2])
                        setIndex(arr[char][1])
                        setLinkToProblem(`https://codeforces.com/problemset/problem/${id}/${index}`)



                } catch (error) {
                        console.log(error)
                }

        }







        const handleCreate = async (e) => {
                e.preventDefault();
                setContestDetails(!contestDetails);
                setDisplayForm(!displayForm)

        }



        const navigate = useNavigate()

        return (
                <div className="mashup">
                        <div className="heading">
                                <div className="container">
                                        <h1>Create a Contest</h1>
                                        <button onClick={() => setDisplayForm(!displayForm)}>+</button>
                                </div>
                                {
                                        displayForm &&
                                        <form action="">
                                                <input type="text" placeholder='Contest Name' onChange={(e) => setContestName(e.target.value)} />
                                                <button onClick={handleCreate}>Create</button>
                                        </form>
                                }

                        </div>
                        {
                                contestDetails &&

                                <div className="heading">
                                        <div className="container">
                                                <h1>{contestName}</h1>
                                                {/* <button onClick={(e) => e.preventDefault()}>Add Problem</button> */}
                                        </div>
                                        <div className="contestProblems">
                                                <h3>Add Problems :</h3>
                                                <div className="add">

                                                        <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={ratingValues}
                                                                sx={{ width: 300 }}
                                                                renderInput={(params) => <TextField {...params} label="Rating" />}
                                                                value={rating}
                                                                onChange={(event, newValue) => {
                                                                        setRating(newValue);
                                                                }}
                                                        />
                                                        <button className='btn-add' onClick={randomProblem}>Add</button>
                                                        {/* <div className="testing">
                                                                {`https://codeforces.com/problemset/problem/${id}/${index}`}
                                                        </div> */}
                                                </div>

                                        </div>


                                </div>
                        }


                        {
                                contests.map((contest) => {
                                        return (
                                                <div className="contestInfo">

                                                        <div className="container">
                                                                <h2>{name}</h2>
                                                                <h3>{linkToProblem}</h3>
                                                                {/* <button onClick={handleClick}>Add</button> */}
                                                                <Link to={linkToProblem}>
                                                                        <button> Solve</button>
                                                                </Link>
                                                        </div>


                                                </div>
                                        )
                                })
                        }


                </div>
        )
}

export default Mashup
const ratingValues = [
        800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700,2800,2900,3000,3100,3200,3300,3400,3500
]
