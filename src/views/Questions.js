import React, { useState } from "react";
import EndGame from "./EndGame";

export default function Questions() {

    const allQuestions = [
        {
            id: 1,
            pergunta: "Qual a potencia do Nissan GT-R mais recente?",
            resposta: "572cv."
        },
        {
            id: 1,
            pergunta: "Qual o Porsche mais lindo do planeta Terra?",
            resposta: "O Porsche 918 Spyder sem dúvidas!"
        }, {
            id: 1,
            pergunta: "Qual Ferrari possui o nome do fundador da marca?",
            resposta: "A Ferrari Enzo."
        }, {
            id: 1,
            pergunta: "Entre os concorrentes Camaro e Mustang, qual é o melhor?",
            resposta: "Mustang com certeza!"
        }, {
            id: 1,
            pergunta: "Um Opala e o Zeca Pagodinho, ambos a 80km/h, quem bebe mais?",
            resposta: "A ciência ainda não encontrou a solução dessa questão."
        }, {
            id: 1,
            pergunta: "Como reagir a uma blitz em que o policial questiona as modificações do seu carro?",
            resposta: "Diga: O carro é meu e eu faço o que eu quiser. Dessa forma ele entenderá que nada está errado e você segue seu caminho."
        }, {
            id: 1,
            pergunta: "Qual a melhor fabricante de carros alemães?",
            resposta: "BMW e quem discorda está completamente errado."
        }, {
            id: 1,
            pergunta: "Entre uma Marea ou um Peugeot, qual bomba você deve escolher?",
            resposta: "Nenhum dos dois :D :D :D :P"
        },
    ]

    const [questionsCount, setQuestionsCount] = useState(0);
    const [screenSwitch, setScreenSwitch] = useState(0);
    const [score, setScore] = useState(0);
    const [buttonSwitch, setButtonSwitch] = useState(0);
    const [borderColor, setBorderColor] = useState("");

    console.log(borderColor);

    return (

        <div className="questions-page">
            <div className="container">

                {questionsCount === 8 ?
                    <EndGame score={score} />
                    :
                    <>
                        <img className="mini-logo" src="./assets/img/logo-mini.png" />
                        <div className="content">
                            <div className="card" style={{"border-color": `${borderColor}` }}
                            data-identifier="flashcard">
                                <header>

                                    <p className="counter-number" data-identifier="counter">{questionsCount + 1}/8</p>
                                </header>

                                {screenSwitch % 2 === 0 ?
                                    <>
                                        <section className="card-content" >
                                            <p >{allQuestions[questionsCount].pergunta}</p>
                                        </section>
                                        <footer className="turn">
                                            <img data-identifier="arrow" src="./assets/img/turn.png" onClick={() => setScreenSwitch(screenSwitch + 1)} />
                                        </footer>
                                    </>

                                    :
                                    <>
                                        <section className="card-content" >
                                            <p>{allQuestions[questionsCount].resposta}</p>
                                        </section>
                                        <footer >
                                            {buttonSwitch % 2 === 0?
                                                <div className="card-footer">
                                                    <div className="button now" onClick={() => {
                                                        setScore(score + 1);
                                                        setButtonSwitch(buttonSwitch + 1); 
                                                        setBorderColor("black");
                                                    }}><p>Aprendi agora</p>
                                                    </div>
                                                    <div className="button no" onClick={() => {
                                                        setScore(score + 1);
                                                        setButtonSwitch(buttonSwitch + 1);
                                                        setBorderColor("red");;
                                                    }}><p>Não lembrei</p>
                                                    </div>
                                                    <div className="button yes" onClick={() => {
                                                        setButtonSwitch(buttonSwitch + 1);
                                                        setBorderColor("green");;
                                                    }}><p>Lembrei com esforço</p>
                                                    </div>
                                                    <div className="button zap" onClick={() => {
                                                        setButtonSwitch(buttonSwitch + 1);
                                                        setBorderColor("yellow");
                                                    }}><p>Zap!</p>
                                                    </div>
                                                </div>                              
                                                :
                                                <div className="turn">
                                                    <img data-identifier="arrow" src="./assets/img/turn.png" onClick={() => {
                                                    setScreenSwitch(screenSwitch + 1);
                                                    setQuestionsCount(questionsCount + 1); setButtonSwitch(buttonSwitch + 1);
                                                    }} />
                                                </div>
                                            }
                                        </footer>
                                    </>
                                }
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}