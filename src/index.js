import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as BumbagProvider, css } from 'bumbag';

import LandingPage from './routes/Landing';

const theme = {
  palette: {
    primary: '#47b475',
    secondary: '#66777',
  },
  fonts: {
    default: '"Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};

class App extends React.Component {
  render() {
    return (
      <BumbagProvider theme={theme}>
        <LandingPage />
      </BumbagProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
