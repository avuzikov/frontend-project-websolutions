import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import UpdateForm from './components/UpdateForm';

function App() {
  const customerData = [
    { name: 'Jack Jackson', email: 'jackj@abc.com', pass: 'jackj' },
    { name: 'Katie Kates', email: 'katiek@abc.com', pass: 'katiek' },
    { name: 'Glen Glenns', email: 'gleng@abs.com', pass: 'gleng' }
  ];

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(prevCustomer => 
      prevCustomer && prevCustomer.email === customer.email ? null : customer
    );
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
        customers={customerData} 
        selectedCustomer={selectedCustomer}
        onCustomerSelect={handleCustomerSelect}
      />
      <UpdateForm selectedCustomer={selectedCustomer} />
    </div>
  );
}

export default App;