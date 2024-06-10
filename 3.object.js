// Give an example of a rest operator.

const person = {
  name: "Patrick",
  age: 22,
  job: "Engineer",
  country: "Nepal",
};

const { name, age, ...rest } = person;
console.log(name);
console.log(age);
console.log(rest);
