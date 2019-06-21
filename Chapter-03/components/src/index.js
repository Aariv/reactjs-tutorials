import React from 'react';
import ReactDOM from 'react-dom';
// For Fake data
import faker from 'faker';
import CommentDetail from "./CommentDetail";
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Ariv" timeAgo="Today at 6:00PM" text="Nice Blog!" avatar={faker.image.avatar()} />
            <CommentDetail author="Anupama" timeAgo="Today at 8:00PM" text="Contents were good." avatar={faker.image.avatar()} />
            <CommentDetail author="Zakir" timeAgo="Today at 8:00PM" text="Ok!" avatar={faker.image.avatar()} />
            <CommentDetail author="Asif Ali" timeAgo="Yesterday at 6:00PM" text="Lol!!!!!!!!" avatar={faker.image.avatar()} />
            <CommentDetail author="Prashanth" timeAgo="Today at 6:00PM" text="Nothing to define!" avatar={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);