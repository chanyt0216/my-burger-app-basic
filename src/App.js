import React, { Component } from "react";
import Layout from './hoc/Layout/Layout';
import BugerBuilder from './containers/BugerBuilder/BugerBuilder';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BugerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
