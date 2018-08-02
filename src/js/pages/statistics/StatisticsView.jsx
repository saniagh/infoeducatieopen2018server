import React, { Component } from 'react';
import axios from 'axios';

import { notification } from 'antd';

import Statistics from './Statistics.jsx';

class StatisticsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: [],
    };
  }

  componentDidMount() {
    if (this.props.match.params.recoveryKey) {
      axios.get('/users/get-user', {
        params: { recoveryKey: this.props.match.params.recoveryKey },
      }).then((res) => {

        let newSites = res.data.sites.sort(function (a, b) {
          let key1 = a.milis;
          let key2 = b.milis;

          if (key1 < key2)
            return 1;
          else if (key1 === key2)
            return 0;
          else return -1;
        });

        this.setState({
          sites: newSites,
        });
      });
      axios.get('/users/get-recommendations', {
        params: { recoveryKey: this.props.match.params.recoveryKey },
      }).then((res) => {
      });
    } else notification.error({
      message: 'No key detected',
      description: 'Please use a key to access your statistics',
    });

  }

  render() {
    return <Statistics sites={this.state.sites}/>;
  }
}

export default StatisticsView;
