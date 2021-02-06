import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as BumbagProvider, css } from 'bumbag';

import LandingPage from './routes/Landing';

const theme = {
  palette: {
    primary: '#47b475',
    secondary: '#292929',
    Button: {
      defaultProps: {
        palette: 'primary',
        color: 'white',
      },
    },
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
