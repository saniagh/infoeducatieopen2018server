import React, { Component } from 'react';

import { Layout, BackTop, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const { Content } = Layout;

import Routes from './Routes.jsx';

class BaseApp extends Component {
  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <LocaleProvider locale={enUS}>
            <Content>
              <Routes/>
            </Content>
          </LocaleProvider>
          <BackTop/>
        </Layout>
    );
  }
}

export default BaseApp;
