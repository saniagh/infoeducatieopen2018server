import React, { Component } from 'react';

class Statistics extends Component {
  render() {

    let data = this.props.sites.map((site, i) => {

      let lineName = site.host + ' ' + `(Accessed ${site.times} times)`;

      return [lineName, site.milis];
    });

    return (
        <div>

        </div>
    );
  }
}

export default Statistics;
