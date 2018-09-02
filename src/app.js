import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import Data from './components/Data';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <h1>Test</h1>
          <Route path="/" component={Data} />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
