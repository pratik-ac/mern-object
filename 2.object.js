// Give an example of a spread operator to copy objects and arrays.

const employee1 = {
  name: "Rajan",
  age: 25,
  designation: "Software Engineer",
  address: {
    permanent: "Kathmandu",
    temporary: "Pokhara",
  },
};

const employee2 = { ...employee1 };
console.log(employee2);
