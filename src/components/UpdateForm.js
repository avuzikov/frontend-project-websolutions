import React from 'react';

function UpdateForm({ selectedCustomer, onDeselectCustomer }) {
  const onDeleteClick = () => {
    console.log('in onDeleteClick()');
  };

  const onSaveClick = () => {
    console.log('in onSaveClick()');
  };

  const onCancelClick = () => {
    onDeselectCustomer();
  };

  const styles = {
    container: {
      backgroundColor: '#d0d0d0',
      padding: '10px'
    },
    header: {
      margin: '0 0 10px 0',
      padding: '5px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white'
    },
    row: {
      borderBottom: '1px solid #ccc'
    },
    labelCell: {
      padding: '10px',
      fontWeight: 'bold',
      width: '80px',
      borderRight: '1px solid #ccc'
    },
    inputCell: {
      padding: '10px',
      width: 'calc(100% - 80px)'
    },
    input: {
      width: '100%',
      border: 'none',
      outline: 'none'
    },
    buttonContainer: {
      textAlign: 'left',
      backgroundColor: 'white',
      padding: '10px'
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
      <h2 style={styles.header}>{selectedCustomer ? 'Update' : 'Add' }</h2>
      <table style={styles.table}>
        <tbody>
          <tr style={styles.row}>
            <td style={styles.labelCell}>Name:</td>
            <td style={styles.inputCell}>
              <input 
                style={styles.input}
                type="text" 
                value={selectedCustomer ? selectedCustomer.name : ''} 
                readOnly
                placeholder="Customer Name"
              />
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.labelCell}>Email:</td>
            <td style={styles.inputCell}>
              <input 
                style={styles.input}
                type="email" 
                value={selectedCustomer ? selectedCustomer.email : ''} 
                readOnly
                placeholder="name@company.com"
              />
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.labelCell}>Pass:</td>
            <td style={styles.inputCell}>
              <input 
                style={styles.input}
                type="password" 
                value={selectedCustomer ? selectedCustomer.password : ''} 
                readOnly
                placeholder="password"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div style={styles.buttonContainer}>
        <button style={styles.button} type="button" onClick={onDeleteClick}>Delete</button>
        <button style={styles.button} type="button" onClick={onSaveClick}>Save</button>
        <button style={styles.button} type="button" onClick={onCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateForm;
