import React from 'react';

const Roles = () => {
  return (
    <div>
      <h1>Choose Your Role:</h1>
      <input type="radio" id="option1" name="options" value="Option 1" />
      <label htmlFor="option1">Admin</label><br />
      <input type="radio" id="option2" name="options" value="Option 2" />
      <label htmlFor="option2">Fashion Designer</label><br />
      <input type="radio" id="option3" name="options" value="Option 3" />
      <label htmlFor="option3">User</label><br />
      <button type="button">Submit</button>
    </div>
  );
};

export default Roles;