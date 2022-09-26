import React from 'react';
import ReactDOM from 'react-dom/client';
import Example1 from "./Example1";

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

function Example2() {
    return (
        <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}/>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<Example2 />);

export default Example2;


