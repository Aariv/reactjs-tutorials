// Import packages
import React from "react";
import ReactDOM from "react-dom";
// Create components

function getButtonText() {
    return {test: "test"};
}

const App = () => {
    const buttonText = {test: "test"}
    const style={backgroundColor: 'blue', color: 'white'}

    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id ="name"/>
            <button style={style}>
                {buttonText.test}
            </button>
        </div>
    );
}
// Render UI

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);