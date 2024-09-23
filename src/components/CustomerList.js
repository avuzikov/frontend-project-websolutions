import React from 'react';

function CustomerList({ customers, selectedCustomer, onCustomerSelect }) {
  const styles = {
    container: {
      backgroundColor: '#d0d0d0',
      padding: '10px',
      marginBottom: '10px',
      flex: 1,
      overflowY: 'auto'
    },
    header: {
      margin: '0 0 10px 0',
      padding: '5px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    },
    headerRow: {
      backgroundColor: '#f0f0f0'
    },
    headerCell: {
      padding: '10px',
      fontWeight: 'bold',
      textAlign: 'left',
      width: '33.33%'
    },
    dataRow: {
      backgroundColor: 'white'
    },
    dataCell: {
      padding: '10px',
      border: '1px solid #ccc',
      width: '33.33%', 
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Customer List</h2>
      <table style={styles.table}>
        <colgroup>
          <col style={{width: '33.33%'}} />
          <col style={{width: '33.33%'}} />
          <col style={{width: '33.33%'}} />
        </colgroup>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.headerCell}>Name</th>
            <th style={styles.headerCell}>Email</th>
            <th style={styles.headerCell}>Pass</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.map((customer, index) => (
            <tr 
              key={index} 
              onClick={() => onCustomerSelect(customer)}
              style={{
                ...styles.dataRow,
                cursor: 'pointer',
                fontWeight: selectedCustomer && selectedCustomer.email === customer.email ? 'bold' : 'normal'
              }}
            >
              <td style={styles.dataCell}>{customer.name}</td>
              <td style={styles.dataCell}>{customer.email}</td>
              <td style={styles.dataCell}>{customer.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;