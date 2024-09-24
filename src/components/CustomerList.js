import React from 'react';

function CustomerList({ customers, selectedCustomer, onCustomerSelect }) {
  const isCustomerSelected = (customer) => {
    return selectedCustomer && customer.id === selectedCustomer.id
  };

  return (
    <div className="bg-[#d0d0d0] p-2.5 mb-2.5 flex-1 overflow-y-auto">
      <h2 className="m-0 mb-2.5 p-1.5 font-bold text-xl">Customer List</h2>
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
          {customers && customers.map((customer, index) => (
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
    </div>
  );
}

export default CustomerList;
