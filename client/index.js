import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
  return <div>Lyrical</div>
};

const container = document.querySelector('#root');
const reactRoot = ReactDOM.createRoot(container);

reactRoot.render(<Root />);
