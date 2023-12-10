import React, {  useState } from 'react'
import "../../style.scss";
import "./mashup.scss";
import AddProblem from './AddProblem';
import ProblemList from './ProblemList';
import {  ProblemProvider } from './context/ProblemContext.jsx';

const Mashup = () => {
        const [displayForm, setDisplayForm] = useState( false );
        const [contestName, setContestName] = useState( "" )
        const [contestDetails, setContestDetails] = useState( false);

        const handleCreate = async ( e ) => {
                e.preventDefault();
                setContestDetails( !contestDetails );
                setDisplayForm( !displayForm )

        }

        return (
                <div className="mashup">
                        <div className="heading">
                                <div className="container">
                                        <h1>Create a Contest</h1>
                                        <button onClick={() => setDisplayForm( !displayForm )}>+</button>
                                </div>
                                {
                                        displayForm &&
                                        <form action="">
                                                <input type="text" placeholder='Contest Name' onChange={( e ) => setContestName( e.target.value )} />
                                                <button onClick={ handleCreate }>Create</button>
                                        </form>
                                }
                        </div>
                        {
                                contestDetails &&
                                
                                <ProblemProvider>
                                        <AddProblem contestName={ contestName } />
                                        <ProblemList />
                                </ProblemProvider>
                        }
                </div>
        )
}

export default Mashup

