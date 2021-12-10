import React, { useState } from "react";

export default function Questions({setQuestionsAnswers, questionsAnswers}) {

    const allQuestions = [
        {
            id: 1,
            pergunta: "pergunta1",
            resposta: "dfghdfghdfgh"
        },
        {
            id: 1,
            pergunta: "pergunta2",
            resposta: ""
        }, {
            id: 1,
            pergunta: "pergunta3",
            resposta: ""
        }, {
            id: 1,
            pergunta: "pergunta4",
            resposta: ""
        }, {
            id: 1,
            pergunta: "pergunta1",
            resposta: ""
        }, {
            id: 1,
            pergunta: "pergunta1",
            resposta: ""
        }, {
            id: 1,
            pergunta: "",
            resposta: ""
        }, {
            id: 1,
            pergunta: "",
            resposta: ""
        },
    ]

    console.log(allQuestions[0]);

    const [switchQuestions, setSwitchQuestions] = useState(0);


    return (

        <div className="questions-page">
            <div className="container">
                <img className="mini-logo" src="./assets/img/logo-mini.png" />
                <div className="content">
                    <div className="card">
                        <header>
                            <p>{switchQuestions + 1}/8</p>
                        </header>
                        <section className="card-content" onClick={() => setQuestionsAnswers(1)}>
                            <p>{allQuestions[switchQuestions].pergunta}</p>
                        </section>
                        <footer>
            
                        </footer>

                    </div>
                </div>
            </div>
        </div>
    );
}