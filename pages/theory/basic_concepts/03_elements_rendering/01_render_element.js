// It doesn't work in the browser because of "document"

import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world!</h1>;
root.render(element);
