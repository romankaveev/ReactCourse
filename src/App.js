import './App.css';
import React, {useState} from "react";
import Counter from "./Components/Counter";

function App() {
    const [value, setValue] = useState(" ")



    return (
        <div className="App">
            <Counter/>
        </div>

    );
}

export default App;
