import React from 'react';

function UpdateForm() {
  const onDeleteClick = () => {
    console.log('in onDeleteClick()');
  };

  const onSaveClick = () => {
    console.log('in onSaveClick()');
  };

  const onCancelClick = () => {
    console.log('in onCancelClick()');
  };

  return (
    <div>
      <h2>Update</h2>
      <form>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Pass" />
        </div>
        <div>
          <button type="button" onClick={onDeleteClick}>Delete</button>
          <button type="button" onClick={onSaveClick}>Save</button>
          <button type="button" onClick={onCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;