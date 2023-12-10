import { useContext } from "react";
import { ProblemContext } from "./context/ProblemContext";
import "./mashup.scss";


const Problems = (props) => {
        const [problems, setProblems] = useContext( ProblemContext )
        
        const completeProblem = (e) => {
                const filterProblems = problems.map(( problem ) => {
                        if (problem.id === e.target.value) {
                                problem.completed = false;
                                if (e.target.checked) {
                                        problem.completed = true;
                                }
                        }
                        return problem
                });
                setProblems(filterProblems)
        }
        const deleteProblem = (e) => {
                e.preventDefault();

                const filteredProblems = problems.filter(( problem ) => {
                        return problem.id !== e.target.id
                });

                setProblems( filteredProblems );
        }
        const goToProblem = (e) => {
                e.preventDefault();
                window.open(props.problemLink, '_blank');
        }
        const isCompleted = props.completed ? 'checked' : '';

        return (
                <div className="contestInfo">

                        <div className="problem-container">
                                <input id={props.id} type="checkbox" checked={isCompleted} value={props.id} onChange={e => completeProblem( e )} />
                                <label className="title" htmlFor={props.id}>{props.title}</label>
                                <label htmlFor={props.id}>{props.problemRating}</label>
                                <div className="problem-buttons">
                                        <button type="button" className="btn-Link" id={props.id} onClick={ goToProblem } >Solve</button>
                                        <button type="button" className="btn-delete" id={props.id} onClick={e => deleteProblem( e )}>Delete</button>

                                </div>
                        </div>


                </div>
        )
}

export default Problems