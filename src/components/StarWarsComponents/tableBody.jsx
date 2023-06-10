import React, { useState } from "react";

function TableBody(props) {
  let { columns, tableData , handleRemovingItem} = props;

  const handleRemoveItem = (name) => {
    handleRemovingItem(name)
  }

  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            <div onClick={() => handleRemoveItem(data.name)}>
              <p>x</p>
            </div>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
