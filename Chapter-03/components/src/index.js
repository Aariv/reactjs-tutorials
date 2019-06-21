import React from 'react';
import ReactDOM from 'react-dom';
// For Fake data
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                My Custom Message
             </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ariv" timeAgo="Today at 6:00PM" content="Nice Blog!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Anupama" timeAgo="Today at 8:00PM" content="Contents were good." avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Zakir" timeAgo="Today at 8:00PM" content="Ok!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Asif Ali" timeAgo="Yesterday at 6:00PM" content="Lol!!!!!!!!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Prashanth" timeAgo="Today at 6:00PM" content="Nothing to define!" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);