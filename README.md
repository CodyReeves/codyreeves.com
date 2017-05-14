A portfoilo site created with React/Redux

## Dependencies

* React
    * react
    * react-dom

* Create React App
    * react-scripts

* Redux
    * redux
    * react-redux
    * react-router
    * react-router-redux
    * redux-thunk
    
* Fetch
    * babel-polyfill
    * isomorphic-fetch

* Github Deployment Tool
    * gh-pages

### Runs the app in development mode:

```
npm start
```

Open http://localhost:3000 to view it in the browser.

### Runs the test watcher in an interactive mode:

```
npm test
```

By default, runs tests related to files changes since the last commit.

### Builds the app for production to the build folder:

```
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Deploys the production to github.io page:

Changes package.json
 
```
"homepage": "http://{account_name}.github.io/{project_name}",
```

And runs

```
npm run build
npm run deploy
```
