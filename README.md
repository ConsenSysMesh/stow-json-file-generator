# Linnia JSON File Generator

Welcome to the fake file generator! The Linia Team threw this together so you
could spend less time making fake data and more time building! In order to get
this working for you, you should change three things:

1. Change `numberOfFiles` to equal the amount of files you want to generate
2. Change the `fileSchema` to make that of the data you want to produce.
3. Change the `fileName` function to product the name for the file that you want.

### Customizing the script

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