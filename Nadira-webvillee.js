const data = [
  {
    tm_number: "9724084103",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "9724084103",
    tm_name: "PRADIP duplicate",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "9724084105",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 2 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 3 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
  },
];

// filter data according to daynamic key
const filterData = (key) => {
  let obj = {};
  let localKey = ""; 
  let result = [];
  for (let i = 0; i < data.length; i++) {
    localKey = data[i][key];  
    if (obj[data[i][key]]) {
      delete data[i][key]; //for delete key
      obj[localKey] = [...obj[localKey], { ...data[i] }];   
    } else {
      delete data[i][key];  //for delete key
      obj[localKey] = [{ ...data[i] }];
    }
  }
 for (const key in obj) {
    result.push({[key]:obj[key]});   //final result as output 
  }
    return JSON.stringify(result,null,2);
};
console.log("Result ",filterData("zbm_number"));
