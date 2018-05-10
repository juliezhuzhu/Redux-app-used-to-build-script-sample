# Redux-app-used-to-build-script-sample
This sample follow the pluralsight-redux-app-used-to-build-script project.
The link is below https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents.

This sample talk about how to use React Redux. and it will use the webpack 4.0 and React ^16.0,
so it have some different setting with pluralsight-redux-app-used-to-build-script on package.json and webpack.config file.

### The below information is listed when meeting some error:

** Why .editorconfig and .eslintrc file (规范代码)
eslint (lint)
  > https://www.jianshu.com/p/81322502a0a9

eslint-plugin-import
https://www.npmjs.com/package/eslint-plugin-import

** why.babelrc (Babel的配置文件是.babelrc)

   **Link**: http://www.ruanyifeng.com/blog/2016/01/babel.html

babel-polyfill

babel-preset-env (replace babel-preset-es2015) 
需要编译ES6，我们需要设置presets为"es2015"，也就是预先加载es6编译的相关模块
  
babel-preset-react
如果需要编译jsx，需要预先加载"react"这个模块
  
babel-preset-stage-0  / babel-preset-stage-1 (narrow function)
”stage-0"是对ES7一些提案的支持，Babel通过插件的方式引入，让Babel可以编译ES7代码

babel-node
  **Not meant for production use** -> https://babeljs.io/docs/usage/cli/#babel-node
      
### Problem
Unable to resolve path to module './routes'  import/no-unresolved  
"rules": { "import/no-unresolved": [ 2, { caseSensitive: false } ]  

Module not found: Error: Can't resolve  
e.g. resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
But it need to take time to spike on how to optimize.
https://www.cnblogs.com/vajoy/p/4650467.html
What changed for after v15.5 react
"Cannot read property 'func' of undefined" when updated react to 16.0.0
https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactproptypes

“No store found” when using Redux chrome extension
// Setup store to be aware by redux dev Tools in chrome
  const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => (f)
  );  





