# Getting started

## Build

The repository must have push permissions.  
After committing all the changes,Run the following command
`/build` folder and automatically push to the `/build` branch after the build is completed.

```bash
npm run build:push
```

## Installation

```bash
npm i git+ssh://git@github.com/returnvalues/returnvalues-design.git#build
```

Install the version from the `build` branch.

## Usage

you can `import` the npm package as a Vue.js plugin with `webpack` or `rollup`

```javascript
import Vue from "vue";
import ReturnvaluesDesign from "returnvalues-design";

Vue.use(ReturnvaluesDesign);
```

## Branch build and upload on Github

Authentication required to push to a repository.  
Let's commit the files to store the changes you've made.
And then type the command below to build files and push changes from your commit into the `gh-pages` branch automatically.

```bash
npm run gh-pages
```
