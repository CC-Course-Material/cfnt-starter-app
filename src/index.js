import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

class App extends React.Component {
  render() {
    return <div className={styles.foo}>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
