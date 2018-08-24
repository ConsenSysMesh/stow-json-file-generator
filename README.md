# Linnia JSON File Generator

Welcome to the fake file generator! The Linnia Team threw this together so you
could spend less time making fake data and more time building!

## Customizing the script

In order to get this working for you, you should change three things:

1. Change `numberOfFiles` to equal the amount of files you want to generate
2. Change the `fileSchema` to generate the fake contents of the files that you need.
3. Change the `fileName` function to produce the name for the file that you want.

### Number of files

This is just a number that tells the script how many files to generate:

```javascript
const numberOfFiles = 10;

```

No need to over think it.

### File Schema

This object is a little more complicated. You will define an object where the `key` is
the name of the property you want in your JSON, and the `value` is `a function` that
produces the value you want to appear in your JSON. For example:

```javascript
const fileSchema = {
  name: () => 'Sammy'
}
```

Will generate a JSON file that looks like this:

```json
{
  "name": "Sammy"
}
```

The example in `index.js` includes a library called `Faker` that is excellent at producing
fake data. Documentation for it can be found [here](https://github.com/marak/Faker.js).

### File Name

This function takes the generated `file data` as an argument, and produces the name of the
file for that data. For the example provided in the `index.js`:

```javascript
const generateFileName = (fileData) => fileData.name;
```

The name of the file will be `${fileData.name}.json`.


To get started, head over to `index.js` and follow the steps provided in the comments.

### Running the script

To run the script, you can run either:

```bash
npm run generate
```

or:

```
node index.js
```

All of the generated files will be added to the `files` folder.