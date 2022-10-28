import React from 'react';

function Welcome(props) {
    return <h3>Hello, {props.name}</h3>
}

export default function Example1() {
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}
