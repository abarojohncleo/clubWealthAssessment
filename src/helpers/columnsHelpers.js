// use this if you want to control columns 
const columnNames = [
  {
    "Header":'Name',
    "accessor":'name',
  },
  {
    "Header":'Height',
    "accessor":'height',
  },
  {
    "Header":'Mass',
    "accessor":'mass',
  },
  {
    "Header":'Hair Color',
    "accessor":'hair_color',
  },
  {
    "Header":'Skin Color',
    "accessor":'skin_color',
  },
  {
    "Header":'Eye Color',
    "accessor":'eye_color',
  },
  {
    "Header":'Birth Year',
    "accessor":'birth_year',
  },
  {
    "Header":'gender',
    "accessor":'gender',
  },
]

const columnsHelpers = {
  columnNames:columnNames
  // use this if you want a dynamic approach in getting columns
  // getColumnHeader: function (data) {
  //   console.log('helpres data',data)
  //   let object = data[0];
  //   let newObject = [];

  //   for (const property in object) {
  //     let newString = property.replace("_", " ");
  //     let newPropertyName =
  //       newString.charAt(0).toUpperCase() + newString.slice(1);
  //     let item = { Header: newPropertyName, accessor: property };
  //     newObject.push(item);
  //   }
  //   return newObject;
  // }

};

export default columnsHelpers;