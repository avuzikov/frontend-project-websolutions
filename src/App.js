import React, { useState, useEffect } from 'react';
import CustomerList from './components/CustomerList';
import UpdateForm from './components/UpdateForm';
import { getAll, deleteById } from './memdb';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    setCustomers(getAll());
  }, []);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(prevCustomer => 
      prevCustomer && prevCustomer.email === customer.email ? null : { ...customer }
    );
  };

  const handleDeselectCustomer = () => {
    setSelectedCustomer(null);
  };

  const handleUpdateCustomer = (customerData) => {
    if (customerData.id) {
      setCustomers(prevCustomers => 
        prevCustomers.map(customer => 
          customer.id === customerData.id ? customerData : customer
        )
      );
    } else {
      const newCustomer = {
        ...customerData,
        id: Date.now()
      };
      setCustomers(prevCustomers => [...prevCustomers, newCustomer]);
    }
    setSelectedCustomer(null);
  };

  const handleDeleteCustomer = (customerId) => {
    deleteById(customerId);
    setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== customerId));
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
        onUpdateCustomer={handleUpdateCustomer}
        onDeleteCustomer={handleDeleteCustomer}
      />
    </div>
  );
}

export default App;
