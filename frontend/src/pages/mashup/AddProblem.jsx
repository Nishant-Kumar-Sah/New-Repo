import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./mashup.scss";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ProblemContext } from './context/ProblemContext';
const AddProblem = (props) => {
        const [rating, setRating] = useState(ratings[0]);
        const [problems, setProblems] = useContext(ProblemContext);
        const [mapProblem, setMapProblem] = useState({})

        const fetchAndStore = async() => {
                try {
                        let newMapProblem = {}
                        const res = await fetch("https://codeforces.com/api/problemset.problems")
                        const response = await res.json();
                        const data = (response.result.problems)
                        for (let i = 0; i < data.length; i++) {
                                if (data[i].rating && data[i].contestId && data[i].index) {
                                        let temp = [];
                                        temp.push(data[i].contestId)
                                        temp.push(data[i].index)
                                        temp.push(data[i].name)
                                        temp.push(data[i].rating)
                                        if (!newMapProblem[data[i].rating]) {
                                                newMapProblem[data[i].rating] = []
                                        }
                                        newMapProblem[data[i].rating].push(temp)
                                }
                        }
                        setMapProblem(newMapProblem)
                }catch(error) {
                        console.log(error)
                }
        }
        useEffect(() => {
                fetchAndStore()
        },[])


        const addProblem = (e) => {
                e.preventDefault();
                let arr = mapProblem[rating];
                let char = Math.floor(Math.random() * arr.length + 1)
                const problemContestId = arr[char][0]
                const problemIndex = arr[char][1]
                const problemName = arr[char][2]
                const problemRating = arr[char][3]
                const problemLink = `https://codeforces.com/problemset/problem/${problemContestId}/${problemIndex}`
                console.log(problemLink)
                const newProblems = [...problems, { id: uuidv4(), title: problemName, problemRating: problemRating , problemLink : problemLink, completed: false }];
                setProblems(newProblems);
                
        }

        useEffect(() => {
                localStorage.setItem('problems', JSON.stringify(problems));
        }, [problems]);
        return (
                <div className="heading">
                        <div className="container">
                                <h1>{props.contestName}</h1>
                                
                        </div>
                        <div className="contestProblems">
                                <h3>Add Problems :</h3>
                                <div className="add">

                                        <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={ratings}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} label="Rating" />}
                                                value={rating}
                                                onChange={(event, newValue) => {
                                                        setRating(newValue);
                                                }}
                                        />
                                        <button className='btn-add' onClick={addProblem}>Add</button>
                                        
                                </div>

                        </div>


                </div>
        )
}

export default AddProblem
const ratings = [
        800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 
        2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 
        3000, 3100, 3200, 3300, 3400, 3500
]
