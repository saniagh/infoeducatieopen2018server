import React, { Component } from 'react';

import { Card, Popconfirm, Button, Spin } from 'antd';

class Delete extends Component {
  render() {
    return (
        <Spin spinning={this.props.deletedUser}
              size="large"
              tip="Account deleted. Redirecting in 5 seconds...">
          <Card style={{
            maxWidth: 1540,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 40,
            height: 500,
          }}
                bodyStyle={{
                  textAlign: 'center',
                }}
                noHovering={true}
                bordered={false}>

            <div style={{ fontSize: 24 }}>
              Are you sure about deleting all of your data?
            </div>
            <span style={{ color: 'red', fontSize: 14 }}>Warning, there is no going back</span>
            <div style={{ marginTop: 10 }}>
              <Popconfirm title="Are you sure?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={this.props.onDelete}>
                <Button type="danger"
                        size="large">Delete all of my data affiliated with
                  Goofale.</Button>
              </Popconfirm>
            </div>
          </Card>
        </Spin>
    );
  }
}

export default Delete;
