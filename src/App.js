import "./css/reset.css";
import "./css/styles.css";

import React, { useState } from "react";

import FrontPage from "./views/FrontPage";
import Questions from "./views/Questions";
import Answers from "./views/Answers";



export default function App() {

    const [switchFrontPage, setSwitchFrontPage] = useState(true);

        
    return (
        <>
        {switchFrontPage ? 
            <FrontPage setSwitchFrontPage={setSwitchFrontPage}/> :  
            <Questions />}
   
        </>
    );
}