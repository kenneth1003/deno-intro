// @deno-types="./index.d.ts"
import 'https://unpkg.com/react@16/umd/react.development.js'
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js'

ReactDOM.render(
  React.createElement('h1', null, 'Hello world'),
  document.getElementById('root')
);
