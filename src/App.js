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
      prevCustomer && 
      prevCustomer.id === customer.id
        ? null 
        : { ...customer }
    );
  };

  const handleDeselectCustomer = () => {
    setSelectedCustomer(null);
  };

  const handleUpdateCustomer = async (customerData) => {
    try {
      let updatedCustomer;
      console.log(customerData)
      if (customerData.hasOwnProperty('id') ) {
        updatedCustomer = await restdb.put(customerData.id, customerData);
        setCustomers(prevCustomers => 
          prevCustomers.map(customer => 
            customer.id === updatedCustomer.id ? updatedCustomer : customer
          )
        );
      } else {
        updatedCustomer = await restdb.post(customerData);
        setCustomers(prevCustomers => [...prevCustomers, updatedCustomer]);
      }
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Error updating customer. Please try again.');
    }
  };

  const handleDeleteCustomer = async (customerId) => {
    try {
      await restdb.deleteById(customerId);
      setCustomers(prevCustomers => prevCustomers.filter(customer => customer.id !== customerId));
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer. Please try again.');
    }
  };

  return (
    <div className="App bg-[#f0f0f0] h-screen flex flex-col p-2.5 box-border">
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
