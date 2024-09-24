import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import UpdateForm from './components/UpdateForm';
import * as restdb from './restdb';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await restdb.getAll();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      alert('Error fetching customers. Please try again.');
    }
  };

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(prevCustomer => 
      prevCustomer && prevCustomer.email === customer.email ? null : { ...customer }
    );
  };

  const handleDeselectCustomer = () => {
    setSelectedCustomer(null);
  };

  const handleUpdateCustomer = async (customerData) => {
    try {
      if (customerData.id) {
        await restdb.put(customerData.id, customerData);
      } else {
        await restdb.post(customerData);
      }
      fetchCustomers();
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Error updating customer. Please try again.');
    }
  };

  const handleDeleteCustomer = async (customerId) => {
    try {
      await restdb.deleteById(customerId);
      fetchCustomers();
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer. Please try again.');
    }
  };

  return (
    <div className="App" style={{
      backgroundColor: '#f0f0f0',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box'
    }}>
      <CustomerList 
        customers={customers} 
        selectedCustomer={selectedCustomer}
        onCustomerSelect={handleCustomerSelect}
      />
      <UpdateForm 
        selectedCustomer={selectedCustomer} 
        onDeselectCustomer={handleDeselectCustomer}
        onUpdateCustomer={handleUpdateCustomer}
        onDeleteCustomer={handleDeleteCustomer}
      />
    </div>
  );
}

export default App;
