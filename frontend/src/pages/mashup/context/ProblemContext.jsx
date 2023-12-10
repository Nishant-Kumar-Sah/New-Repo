import { createContext, useState } from "react";

export const ProblemContext = createContext();

export const ProblemProvider = ( props ) => {
    const getProblems = JSON.parse( localStorage.getItem( 'problems' ) );
    const [ problems, setProblems ] = useState( getProblems ? getProblems : [] );

    return (
        <ProblemContext.Provider value={[ problems, setProblems ]}>
            { props.children }
        </ProblemContext.Provider>
    );
}