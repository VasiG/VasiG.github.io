import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
function App() {
    const [photo, setPhoto] = useState();
    function fetchPembroke() {
        const doFetchPembroke = async () => {
            await fetch('https://dog.ceo/api/breed/pembroke/images/random')
                .then((result) => {
                return result.json();
            })
                .then((data) => {
                setPhoto(data.message);
            });
        };
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
        };
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
        };
        doFetchDog();
    }
    return (_jsxs("div", { children: [_jsx("div", { children: _jsx("img", { className: "corgiImg", src: photo, alt: "A very cute corgi" }) }), _jsxs("div", { className: "top-center", children: [_jsx("button", { className: "corgiBtn", onClick: fetchPembroke, children: "I want a new PEMBROKE WELSH CORGI!!!" }), _jsx("button", { className: "corgiBtn", onClick: fetchCardigan, children: "I want a new CARDIGAN CORGI!!!" }), _jsx("button", { className: "corgiBtn", onClick: fetchDog, children: "Surprise dog" })] })] }));
}
export default App;
