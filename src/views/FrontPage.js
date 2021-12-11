export default function FrontPage({setSwitchFrontPage}){

    return (
        
        <div className="front-page">
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <img src="./assets/img/logo.png" />
                    </div>
                    <div className="start-button" onClick={() => setSwitchFrontPage(false)}>
                        <p>Treinar Memória</p>
                    </div>
                </div>
            </div>
        </div>
    );
}