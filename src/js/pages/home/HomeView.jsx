import React, { Component } from 'react';

import Home from './Home.jsx';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSearch = () => {
    window.location.replace(`/${this.state.inputValue}`);
  };

  render() {
    return <Home inputValue={this.state.inputValue}
                 onInputChange={this.onInputChange}
                 onSearch={this.onSearch}/>;
  }
}

export default HomeView;
