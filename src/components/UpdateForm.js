import React, { useState, useEffect } from 'react';

function UpdateForm({ selectedCustomer, onDeselectCustomer, onUpdateCustomer, onDeleteCustomer }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (selectedCustomer) {
      setFormData({
        name: selectedCustomer.name,
        email: selectedCustomer.email,
        password: selectedCustomer.password
      });
    } else {
      clearForm();
    }
  }, [selectedCustomer]);

  useEffect(() => {
    const { name, email, password } = formData;
    const isValid = name.trim() !== '' && 
                    email.trim() !== '' && 
                    email.includes('@') && 
                    password.trim() !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onDeleteClick = () => {
    if (selectedCustomer) {
      onDeleteCustomer(selectedCustomer.id);
    }
  };

  const onSaveClick = () => {
    if (selectedCustomer) {
      onUpdateCustomer({
        ...selectedCustomer,
        ...formData
      });
    } else if (isFormValid) {
      onUpdateCustomer(formData);
    }
    clearForm();
  };

  const onCancelClick = () => {
    onDeselectCustomer();
    clearForm();
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
    },
    disabledButton: {
      opacity: 0.5,
      cursor: 'not-allowed'
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
                name="name"
                value={formData.name} 
                onChange={handleInputChange}
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
                name="email"
                value={formData.email} 
                onChange={handleInputChange}
                placeholder="name@company.com"
              />
            </td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.labelCell}>Pass:</td>
            <td style={styles.inputCell}>
              <input 
                style={styles.input}
                type="text" 
                name="password"
                value={formData.password} 
                onChange={handleInputChange}
                placeholder="password"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div style={styles.buttonContainer}>
        <button 
          style={{...styles.button, ...(selectedCustomer ? {} : styles.disabledButton)}} 
          type="button" 
          onClick={onDeleteClick} 
          disabled={!selectedCustomer}
        >
          Delete
        </button>
        <button 
          style={{...styles.button, ...(selectedCustomer || isFormValid ? {} : styles.disabledButton)}} 
          type="button" 
          onClick={onSaveClick} 
          disabled={!selectedCustomer && !isFormValid}
        >
          Save
        </button>
        <button style={styles.button} type="button" onClick={onCancelClick}>Cancel</button>
      </div>
    </div>
  );
}

export default UpdateForm;