import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import UpdateForm from './components/UpdateForm';
import { getAll } from './memdb';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    setCustomers(getAll());
  }, []);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(prevCustomer => 
      prevCustomer && prevCustomer.email === customer.email ? null : customer
    );
  };

  const handleDeselectCustomer = () => {
    setSelectedCustomer(null);
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
      />
    </div>
  );
}

export default App;
