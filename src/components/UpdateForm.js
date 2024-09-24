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
        ...formData,
        id: selectedCustomer.id
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

  return (
    <div className="bg-[#d0d0d0] p-2.5">
      <h2 className="m-0 mb-2.5 p-1.5 font-bold text-xl">{selectedCustomer ? 'Update' : 'Add'}</h2>
      <table className="w-full border-collapse bg-white">
        <tbody>
          <tr className="border-b border-[#ccc]">
            <td className="p-2.5 font-bold w-20 border-r border-[#ccc]">Name:</td>
            <td className="p-2.5 w-[calc(100%-80px)]">
              <input 
                className="w-full border-none outline-none"
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleInputChange}
                placeholder="Customer Name"
              />
            </td>
          </tr>
          <tr className="border-b border-[#ccc]">
            <td className="p-2.5 font-bold w-20 border-r border-[#ccc]">Email:</td>
            <td className="p-2.5 w-[calc(100%-80px)]">
              <input 
                className="w-full border-none outline-none"
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleInputChange}
                placeholder="name@company.com"
              />
            </td>
          </tr>
          <tr className="border-b border-[#ccc]">
            <td className="p-2.5 font-bold w-20 border-r border-[#ccc]">Pass:</td>
            <td className="p-2.5 w-[calc(100%-80px)]">
              <input 
                className="w-full border-none outline-none"
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
      <div className="text-left bg-white p-2.5">
        <button 
          className={`mr-2.5 px-2.5 py-1.5 bg-[#f5f5f5] border border-[#ccc] rounded cursor-pointer ${!selectedCustomer && 'opacity-50 cursor-not-allowed'}`}
          type="button" 
          onClick={onDeleteClick} 
          disabled={!selectedCustomer}
        >
          Delete
        </button>
        <button 
          className={`mr-2.5 px-2.5 py-1.5 bg-[#f5f5f5] border border-[#ccc] rounded cursor-pointer ${(!selectedCustomer && !isFormValid) && 'opacity-50 cursor-not-allowed'}`}
          type="button" 
          onClick={onSaveClick} 
          disabled={!selectedCustomer && !isFormValid}
        >
          Save
        </button>
        <button 
          className="mr-2.5 px-2.5 py-1.5 bg-[#f5f5f5] border border-[#ccc] rounded cursor-pointer"
          type="button" 
          onClick={onCancelClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateForm;
