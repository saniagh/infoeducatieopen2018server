import React, { Component } from 'react';
import { Card } from 'antd';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Statistics extends Component {
  render() {

    const columns = [
      {
        Header: 'Website',
        accessor: 'host',
        Cell: props => <a href={props.value}>{props.value}</a>,
      },
      {
        Header: 'Time spent on the website',
        accessor: 'milis',
      },
      {
        Header: 'Times you\'ve accessed it.',
        accessor: 'times',
      },
    ];

    return (
        <Card style={{
          maxWidth: 1540,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 40,
        }}
              noHovering={true}
              bordered={false}>
          <ReactTable data={this.props.sites ? this.props.sites : []}
                      columns={columns}/>
        </Card>
    );
  }
}

export default Statistics;
