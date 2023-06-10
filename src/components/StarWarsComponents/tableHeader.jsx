import React, { useState } from "react";

function TableHeader(props) {
  let { columns, handleSorting } = props;

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ Header, accessor }) => {
          return (
            <th key={accessor} onClick={() => handleSortingChange(accessor)}>
              {Header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHeader;
