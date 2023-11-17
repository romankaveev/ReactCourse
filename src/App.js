import './Styles/App.css';
import React, {useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './Styles/App.css';

function App() {
    const [value, setValue] = useState(" ")



    return (
        <div className="App">
            <div className="post">
            <div className="post__content">
            <strong> 1. JS </strong>
                <div>
                    Залупный текст для дива
                </div>
                <div className="post__btns">
                    <button> Удалить</button>
                </div>
            </div>
            </div>
        </div>

    );
}

export default App;
