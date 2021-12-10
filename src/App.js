import "./css/reset.css";
import "./css/styles.css";

import React, { useState } from "react";

import FrontPage from "./views/FrontPage";
import Questions from "./views/Questions";
import Answers from "./views/Answers";



export default function App() {

    const [switchFrontPage, setSwitchFrontPage] = useState(true);

    const [questionsAnswers, setQuestionsAnswers] = useState (0);

        console.log(questionsAnswers);
    return (
        <>
        {switchFrontPage ? 
            <FrontPage setSwitchFrontPage={setSwitchFrontPage}/> :  
            <Questions/>}
        {questionsAnswers ?
            <Questions setQuestionsAnswers={setQuestionsAnswers}/> :
            <Answers/>
        }    
        </>
        
    );
}