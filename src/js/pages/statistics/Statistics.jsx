import React, { Component } from 'react';
import { Card } from 'antd';

import PieChart from 'react-minimal-pie-chart';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalMS: 0,
    };
  }

  calculateTotalMS = () => {
    let tempMS = 0;
    for (let i = 0; i < this.props.sites.length; i++) {
      tempMS += this.props.sites[i].milis;
    }

    this.setState({
      totalMS: tempMS,
    });
  };

  componentDidMount() {
    this.calculateTotalMS();
  }

  componentWillReceiveProps(nextProps) {
    let tempMS = 0;
    for (let i = 0; i < nextProps.sites.length; i++) {
      tempMS += nextProps.sites[i].milis;
    }

    this.setState({
      totalMS: tempMS,
    });
  }

  convertMS = (milliseconds) => {
    let day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      day: day,
      hour: hour,
      minute: minute,
      seconds: seconds,
    };
  };

  getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  calculatePercentage = (i) => {

    let percentage = this.props.sites[i].milis / this.state.totalMS * 100;

    return percentage.toPrecision(2);
  };

  render() {

    const columns = [
      {
        Header: 'Website',
        accessor: 'host',
        Cell: props => <div>{props.value ?
            props.value :
            'newtab.ignore'}</div>,
      },
      {
        Header: 'Time spent on the website',
        accessor: 'milis',
        Cell: props => <span>Days: {this.convertMS(props.value).day}
          {' '} || (h/m/s) {this.convertMS(props.value).hour}:{this.convertMS(
              props.value).minute}:{this.convertMS(props.value).seconds}</span>,
      },
      {
        Header: 'Times you\'ve accessed it.',
        accessor: 'times',
      },
    ];

    let data = this.props.sites.map((site) => {
      return {
        value: site.milis,
        color: this.getRandomColor(),
      };
    });

    const cardMediaQuery = window.matchMedia('(max-width: 768px)');

    return (
        <Card style={{
          maxWidth: 1540,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 40,
        }}
              noHovering={true}
              bordered={false}>
          <h3 style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>
            Table view</h3>
          <ReactTable data={this.props.sites ? this.props.sites : []}
                      columns={columns}/>
          <h3 style={{
            textAlign: 'center',
            fontSize: 20,
            marginBottom: 20,
            marginTop: 20,
          }}>Chart view</h3>
          <div style={{
            marginTop: 30,
            display: 'flex',
            flexDirection: cardMediaQuery.matches ? 'column' : 'line',
          }}>
            <div style={{
              width: cardMediaQuery.matches ? '100%' : '50%',
              fontSize: 14,
              padding: 20,
            }}>
              <ul>
                {this.props.sites.map((site, i) => {
                  if (site.host)
                    return <li key={i} style={{
                      padding: 5,
                      border: '1px solid #ddd',
                      overflow: 'hidden',
                    }}>
                    <span style={{ width: '49%', overflow: 'hidden' }}>{i +
                    1}. {site.host}</span>
                      <span
                          style={{
                            width: '50%',
                            float: 'right',
                            fontWeight: 700,
                            paddingLeft: cardMediaQuery.matches ? 3 : 9,
                            borderLeft: '1px solid #ddd',
                          }}>{this.calculatePercentage(i)}% of total time spent online</span>
                    </li>;
                })}
              </ul>
            </div>
            <div style={{
              width: cardMediaQuery.matches ? '100%' : '50%',
              padding: 20,
            }}>
              <PieChart data={data}/>
            </div>
          </div>
        </Card>
    );
  }
}

export default Statistics;
