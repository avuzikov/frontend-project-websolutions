import React from 'react';
import CustomerList from './components/CustomerList';
import UpdateForm from './components/UpdateForm';

function App() {
  const customerData = [
    { name: 'Jack Jackson', email: 'jackj@abc.com', pass: 'jackj' },
    { name: 'Katie Kates', email: 'katiek@abc.com', pass: 'katiek' },
    { name: 'Glen Glenns', email: 'gleng@abs.com', pass: 'gleng' }
  ];

  return ( 
    <div className="App">
      <CustomerList customers={customerData} />
      <UpdateForm />
    </div>
  );
}

export default App;