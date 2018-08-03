import React, { Component } from 'react';

import { Layout, BackTop, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const { Content, Header } = Layout;

import Routes from './Routes.jsx';

class BaseApp extends Component {
  render() {

    const cardMediaQuery = window.matchMedia('(max-width: 768px)');
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <header style={{
            height: cardMediaQuery.matches ? 90 : 60,
            width: '100%',
            background: 'white',
            display: 'flex',
          }}>
            <h1 style={{ padding: 12, cursor: 'pointer' }}
                onClick={() => window.location.replace('/')}>Net<span
                style={{ color: 'orange' }}> Max</span>
            </h1>
            <h2 style={{
              marginLeft: cardMediaQuery.matches ? '0' : '35%',
              padding: 16,
              textAlign: 'center',
            }}>
              Statistics and management
            </h2>
          </header>
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
