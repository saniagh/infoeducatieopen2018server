import React, { Component } from 'react';
import axios from 'axios';

import Delete from './Delete.jsx';

import { notification } from 'antd';

class DeleteView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deletingUser: false,
      deletedUser: false,
    };
  }

  onDelete = () => {

    this.setState({
      deletingUser: true,
    });
    axios.delete('/users/delete-user', {
      params: { recoveryKey: this.props.match.params.recoveryKey },
    }).then(() => {

      this.setState({
        deletingUser: false,
        deletedUser: true,
      });

      notification.success({
        message: 'Success!',
        description: 'Your account has been deleted. It\'s sad that you had to go.',
      });

      setTimeout(() => {
        window.location.replace('/');
      }, 5000);

    }).catch(() => {

      this.setState({
        deletingUser: false,
      });

      notification.error({
        message: 'Failed',
        description: 'Something went wrong...',
      });
    });
  };

  render() {
    return <Delete deletingUser={this.state.deletingUser}
                   deletedUser={this.state.deletedUser}
                   onDelete={this.onDelete}/>;
  }
}

export default DeleteView;
