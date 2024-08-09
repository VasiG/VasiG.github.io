import { useState } from 'react';
import './App.css'

function App() {

    const [photo, setPhoto] = useState();

    function fetchPembroke(){
        
            const doFetchPembroke = async () => {
                await fetch('https://dog.ceo/api/breed/pembroke/images/random')
                    .then((result) => {
                        return result.json();
                    })
                    .then((data) => {
                        setPhoto(data.message);
                    });
            }

            doFetchPembroke();
    }

    function fetchCardigan() {

        const doFetchCardigan = async () => {
            await fetch('https://dog.ceo/api/breed/corgi/cardigan/images/random')
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    setPhoto(data.message);
                });
        }

        doFetchCardigan();
    }

    function fetchDog() {

        const doFetchDog = async () => {
            await fetch('https://dog.ceo/api/breeds/image/random')
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    setPhoto(data.message);
                });
        }

        doFetchDog();
    }
    

    return (
        <div>
            <div>
                <img className="corgiImg" src={photo} alt="A very cute corgi"/>
            </div>
            <div className="top-center">
                <button className="corgiBtn" onClick={fetchPembroke}>I want a new PEMBROKE WELSH CORGI!!!</button>
                <button className="corgiBtn" onClick={fetchCardigan}>I want a new CARDIGAN CORGI!!!</button>
                <button className="corgiBtn" onClick={fetchDog}>Surprise dog</button>
            </div>
        </div>
    );
}

export default App
