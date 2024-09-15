import React from 'react';

const BottomBar = () => {
  const tables = [
    { tableId: 'T1', name: 'Jacob Jones', items: 6, status: 'Process' },
    { tableId: 'T2', name: 'Bessie Cooper', items: 4, status: 'Process' },
    { tableId: 'T3', name: 'Ralph Edwards', items: 8, status: 'Process' },
    { tableId: 'T4', name: 'Cameron Williamson', items: 5, status: 'Process' },
  ];

  return (
    <div className="bottom-bar">
      {tables.map((table, index) => (
        <div key={index} className="table-status">
          <span className="table-id">{table.tableId}</span>
          <div className="table-info">
            <p>{table.name}</p>
            <p>{table.items} items → Kitchen</p>
          </div>
          <span className="process-status">{table.status}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
