import React from "react";

const User = (props) => {
  return (
    <div>
      User Component
      <br />
      {props.data.age}
      {props.data.name}
      <br />
    </div>
  );
};

export default User;
