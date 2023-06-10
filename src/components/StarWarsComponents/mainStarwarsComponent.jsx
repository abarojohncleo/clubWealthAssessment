import React, { useState, useEffect } from "react";
import starwars from "../../APIs/starwars";
// import SearchBar from "./seacrhBar";
import  columnsHelpers from "../../helpers/columnsHelpers";
import Table from "./table";

function MainStarwarsComponent() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modifiedData, setModifiedData] = useState([]);

  useEffect(() => {
    starwars.getPeople().then((response) => {
      // let fetchedColumns = columnsHelpers.getColumnHeader(response);
      setColumns(columnsHelpers.columnNames);
      setData(response);
    });
  }, []);

  const filterRow = (searchTerm) => {
    console.log("search", searchTerm);
    const filteredList = data.filter((obj) => {
      const values = Object.values(obj);
      return values.some((value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setModifiedData(filteredList);
  };

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    console.log("newSearchTerm", newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  const handleRemoveItem = (name) => {
    const removeItemByProperty = (list, property, value) => {
      return list.filter(item => item[property] !== value);
    };
    
    const updatedList = removeItemByProperty(modifiedData.length > 0 ? modifiedData : data, 'name', name);
    setModifiedData(updatedList)
  }

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      let dataToSort = modifiedData.length > 0 ? modifiedData : data;
      const sorted = [...dataToSort].sort((a, b) => (
        a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
          numeric: true
        }) * (sortOrder === "asc" ? 1 : -1)
      ));
      setModifiedData(sorted);
    }
  };

  useEffect(() => {
    filterRow(searchTerm);
  }, [searchTerm]);

  console.log('modified data',modifiedData)

  return (
    <div className="App">
      <div>
        <input
          onChange={handleChange}
          name="searchTerm"
          placeholder="Search ..."
        />
      </div>
      {/* <SearchBar pullSearchTerm={filterRow} /> */}
      <Table data={modifiedData.length > 0  ? modifiedData : data} columns={columns} handleRemovingItem={handleRemoveItem} handleSorting={handleSorting}/>
    </div>
  );
}

export default MainStarwarsComponent;
