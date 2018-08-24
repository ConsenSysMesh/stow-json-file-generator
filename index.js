const fs = require('fs');
const faker = require('faker');

/*
  Welcome to the fake file generator! The Linia Team threw this together so you
  could spend less time making fake data and more time building! In order to get
  this working for you, you should change three things:

  1. Change `numberOfFiles` to equal the amount of files you want to generate

  2. Change the `fileSchema` to make that of the data you want to produce. More explantion
     on how to do that in the comment above it.

  3. Change the fileName function to product the name for the file that you want.
*/

/*
  The number of files that the script will generator. Pretty self explanatory.
*/

const numberOfFiles = 10;

/*
  The schema for the files you want to generate. Keys added to the object will be
  the name of the property that appears in the JSON, and the value will be a function
  that produces the fake data. 

  For instance:

  const fileSchema = {
    name: () => 'Sammy'
  }

  Will set translate to:

  {
    "name": "Sammy"
  }

  The included `faker` library provides great methods to produce fake data. Documentation
  can be found here: https://github.com/marak/Faker.js
*/

const fileSchema = {
  // will provide a fake name provided by the library
  name: faker.name.findName,
  // will increment age by 1 per file
  age: (() => {
    let age = 0;
    return () => {
      age++;
      return age;
    };
  })(),
  // will always set favoritePet to cats
  favoritePet: () => 'cats'
};

/*
  A function that produces the name for each file. It will receive the generated data
  for the file as an argument
*/

const generateFileName = (fileData) => fileData.name;

/*
  ***********************************************************
  YOU PROBABLY DONT NEED TO CHANGE ANYTHING BELOW THESE LINES
  ***********************************************************
*/

const generateFileData = () => {
  const fileData = {};

  Object.entries(fileSchema).forEach((pair) => {
    const [ key, value ] = pair;
    fileData[key] = value();
  });

  return fileData;
};

const generateFiles = async () => {
  for (let i = 0; i < numberOfFiles; i++) {
    const fileData = generateFileData();
    const fileName = generateFileName(fileData);
    const json = JSON.stringify(fileData);
    fs.writeFileSync(`./files/${fileName}.json`, json);
  }
};

generateFiles();

