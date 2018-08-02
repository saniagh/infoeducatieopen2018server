import React, { Component } from 'react';

import { Card, Input, Button } from 'antd';

class Home extends Component {
  render() {
    return (
        <Card style={{
          maxWidth: 1540,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 40,
        }}
              bodyStyle={{
                textAlign: 'center',
              }}
              noHovering={true}
              bordered={false}>
          <div style={{ fontSize: 24 }}>
            Welcome to Net <span style={{ color: 'orange' }}>Max</span>
          </div>
          <div style={{ marginTop: 30 }}>
            <Input value={this.props.inputValue}
                   onChange={this.props.onInputChange}
                   placeholder="Search your statistics here by typing your unique recovery key"
                   style={{ maxWidth: 400 }}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                       this.props.onSearch();
                     }
                   }}
            />
            <Button type="primary" style={{ fontSize: 14 }}
                    onClick={this.props.onSearch}>Search</Button>
          </div>
        </Card>
    );
  }
}

export default Home;
