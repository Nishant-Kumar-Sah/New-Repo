import { useContext } from 'react';
import Problems from './Problems'
import { ProblemContext } from './context/ProblemContext';
import "./mashup.scss";
const ProblemList = () => {
        const[problems] = useContext( ProblemContext);
        return (
                1 <= problems.length ? problems.map((problem) =>{
                        return (
                                <Problems key={problem.id} id = {problem.id} title= {problem.title} problemRating ={problem.problemRating} problemLink = {problem.problemLink}  completed={ problem.completed }/>
                        )
                }): (<h4>No Problems Found . Please Add some....</h4>)
        )

}
export default ProblemList
