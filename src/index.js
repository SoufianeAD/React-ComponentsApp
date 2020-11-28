import React from 'react';
import  ReactDOM from 'react-dom';
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
      <div className="ui container comments">
          <ApprovalCard>
              <div className="ui content">
                  <h3>Warning!</h3>
                  <p>Are you sure to do this!</p>
              </div>
          </ApprovalCard>
          <ApprovalCard>
              <CommentDetails
                  author="Soufiane"
                  timeAgo="Today at 4:00am"
                  commentText="Bonjour"
                  image={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetails
                  author="Omar"
                  timeAgo="Today at 5:00am"
                  commentText="Hola"
                  image={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetails
                  author="Mehdi"
                  imeAgo="Today at 6:00am"
                  commentText="Hello"
                  image={faker.image.avatar()}
              />
          </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));