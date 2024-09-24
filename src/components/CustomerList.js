import React, { useState, useMemo } from 'react';

function CustomerList({ customers, selectedCustomer, onCustomerSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = useMemo(() => {
    if (!searchTerm) return customers;
    const lowercasedTerm = searchTerm.toLowerCase();
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(lowercasedTerm) ||
      customer.email.toLowerCase().includes(lowercasedTerm)
    );
  }, [customers, searchTerm]);

  const isCustomerSelected = (customer) => {
    return selectedCustomer && customer.id === selectedCustomer.id;
  };

  const MagnifyingGlassIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  return (
    <div className="bg-[#d0d0d0] p-2.5 mb-2.5 flex-1 overflow-y-auto">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="m-0 p-1.5 font-bold text-xl">Customer List</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon />
          </div>
          <input
            type="text"
            placeholder="Find customer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-3 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      
      {customers.length === 0 ? (
        <div className="bg-white p-4 text-center rounded-md shadow">
          <p className="text-gray-600">No customers found</p>
        </div>
      ) : filteredCustomers.length === 0 ? (
        <div className="bg-white p-4 text-center rounded-md shadow">
          <p className="text-gray-600">No customers satisfy the search criteria</p>
        </div>
      ) : (
        <table className="w-full border-collapse table-fixed">
          <colgroup>
            <col className="w-1/3" />
            <col className="w-1/3" />
            <col className="w-1/3" />
          </colgroup>
          <thead>
            <tr className="bg-[#f0f0f0]">
              <th className="p-2.5 font-bold text-left w-1/3">Name</th>
              <th className="p-2.5 font-bold text-left w-1/3">Email</th>
              <th className="p-2.5 font-bold text-left w-1/3">Pass</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr 
                key={index} 
                onClick={() => onCustomerSelect(customer)}
                className={`bg-white cursor-pointer ${isCustomerSelected(customer) ? 'font-bold' : 'font-normal'}`}
              >
                <td className="p-2.5 border border-[#ccc] w-1/3 whitespace-nowrap overflow-hidden overflow-ellipsis">{customer.name}</td>
                <td className="p-2.5 border border-[#ccc] w-1/3 whitespace-nowrap overflow-hidden overflow-ellipsis">{customer.email}</td>
                <td className="p-2.5 border border-[#ccc] w-1/3 whitespace-nowrap overflow-hidden overflow-ellipsis">{customer.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CustomerList;
