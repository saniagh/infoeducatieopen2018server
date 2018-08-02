import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { BrowserRouter as Router } from 'react-router-dom';

import BaseApp from './pages/BaseApp.jsx';

injectTapEventPlugin();

ReactDom.render(
    <Router>
      <BaseApp/>
    </Router>, document.getElementById('reactApp'));
