import React from 'react';
import ReactDOM from 'react-dom/client';

function Welcome(props) {
    return <h3>Hello, {props.name}</h3>
}

function Example1() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<Example1 />);

export default Example1;