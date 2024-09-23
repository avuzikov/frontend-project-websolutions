import React from 'react';

function UpdateForm({ selectedCustomer }) {
  const onDeleteClick = () => {
    console.log('in onDeleteClick()');
  };

  const onSaveClick = () => {
    console.log('in onSaveClick()');
  };

  const onCancelClick = () => {
    console.log('in onCancelClick()');
  };

  const styles = {
    container: {
      backgroundColor: '#d0d0d0',
      padding: '10px'
    },
    header: {
      backgroundColor: '#d0d0d0',
      padding: '5px',
      margin: '0 0 10px 0'
    },
    form: {
      backgroundColor: 'white',
      padding: '20px'
    },
    row: {
      display: 'flex',
      borderBottom: '1px solid #ccc',
      padding: '10px 0'
    },
    label: {
      width: '80px',
      paddingRight: '10px',
      borderRight: '1px solid #ccc'
    },
    input: {
      flexGrow: 1,
      marginLeft: '10px',
      border: 'none',
      outline: 'none'
    },
    buttonContainer: {
      marginTop: '20px'
    },
    button: {
      marginRight: '10px',
      padding: '5px 10px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Update</h2>
      <form style={styles.form}>
        <div style={styles.row}>
          <label style={styles.label}>Name:</label>
          <input 
            style={styles.input}
            type="text" 
            value={selectedCustomer ? selectedCustomer.name : ''} 
            readOnly
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Email:</label>
          <input 
            style={styles.input}
            type="email" 
            value={selectedCustomer ? selectedCustomer.email : ''} 
            readOnly
          />
        </div>
        <div style={styles.row}>
          <label style={styles.label}>Pass:</label>
          <input 
            style={styles.input}
            type="password" 
            value={selectedCustomer ? selectedCustomer.pass : ''} 
            readOnly
          />
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.button} type="button" onClick={onDeleteClick}>Delete</button>
          <button style={styles.button} type="button" onClick={onSaveClick}>Save</button>
          <button style={styles.button} type="button" onClick={onCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;