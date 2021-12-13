import React, { useState } from "react";

export default function EndGame({ score }) {

    return (

        <div className="questions-page">
            <div className="container">
                <img className="mini-logo" src="./assets/img/logo-mini.png" />
                {score === 0 ?
                    <div className="content">
                        <p className="result">Parabéns!</p><img src="./assets/img/party.png"/>
                        <p className="result-sub">Você não esqueceu de nenhum flashcard!</p>
                    </div>
                    :
                    <div className="content">
                        <p className="result">Putz..</p>
                        <img src="./assets/img/sad.png"/>
                        <p className="result-sub">Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}