import React, { useState, useMemo, useEffect } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default function Table(props) {

  const { columns, data, handleRemovingItem, handleSorting} = props;
  console.log('data', data)
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <div className="container">
      <TableHeader columns={columns} handleSorting={handleSorting} />
      <TableBody columns={columns} handleRemovingItem={handleRemovingItem} tableData={tableData ? tableData : data} />
    </div>
  );
}