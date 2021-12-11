import React, { useState } from "react";
import Answers from "./Answers";

export default function Questions() {

    const allQuestions = [
        {
            id: 1,
            pergunta: "Qual a potencia do Nissan-GTR?",
            resposta: "todas"
        },
        {
            id: 1,
            pergunta: "pergunta2",
            resposta: "resp2"
        }, {
            id: 1,
            pergunta: "pergunta3",
            resposta: "resp3"
        }, {
            id: 1,
            pergunta: "pergunta4",
            resposta: "resp4"
        }, {
            id: 1,
            pergunta: "pergunta5",
            resposta: "resp5"
        }, {
            id: 1,
            pergunta: "pergunta6",
            resposta: "resp6"
        }, {
            id: 1,
            pergunta: "7",
            resposta: "resp7"
        }, {
            id: 1,
            pergunta: "8",
            resposta: "resp8"
        },
    ]

    const [questionsCount, setQuestionsCount] = useState(0);

    const [screenSwitch, setScreenSwitch] = useState(0);

    return (

        <div className="questions-page">
            <div className="container">
                <img className="mini-logo" src="./assets/img/logo-mini.png" />
                <div className="content">
                    <div className="card">
                        <header>
                            <p>{questionsCount + 1}/8</p>
                        </header>

                        {screenSwitch % 2 === 0 ?
                            <>
                                <section className="card-content" >
                                    <p>{allQuestions[questionsCount].pergunta}</p>
                                </section>
                                <footer>
                                    <img src="./assets/img/turn.png" onClick={() => setScreenSwitch(screenSwitch + 1)} />
                                </footer>
                            </>

                            :
                            <>
                                <section className="card-content" >
                                    <p>{allQuestions[questionsCount].resposta}</p>
                                </section>
                                <footer className="card-footer">
                                    <div className="button now" onClick={() => {
                                        setScreenSwitch(screenSwitch + 1);
                                        setQuestionsCount(questionsCount + 1);
                                    }}><p>Aprendi agora</p>
                                    </div>
                                    <div className="button no" onClick={() => {
                                        setScreenSwitch(screenSwitch + 1);
                                        setQuestionsCount(questionsCount + 1);
                                    }}><p>Não lembrei</p>
                                    </div>
                                    <div className="button yes" onClick={() => {
                                        setScreenSwitch(screenSwitch + 1);
                                        setQuestionsCount(questionsCount + 1);
                                    }}><p>Lembrei com esforço</p>
                                    </div>
                                    <div className="button zap" onClick={() => {
                                        setScreenSwitch(screenSwitch + 1);
                                        setQuestionsCount(questionsCount + 1);
                                    }}><p>Zap!</p>
                                    </div>
                                </footer>
                            </>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}