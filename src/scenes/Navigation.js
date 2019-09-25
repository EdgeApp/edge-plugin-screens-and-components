// @flow
import {
  ADDRESS_ROUTE,
  BANK_CONNECT_ROUTE,
  DOC_UPLOAD_ROUTE,
  PHONE_ROUTE,
  SIGNATURE_ROUTE,
  SOCIAL_ROUTE,
  START_ROUTE,
  THANK_YOU_ROUTE,
  TRANSACTION_AMOUNT_ROUTE,
  TRANSACTION_CONFIRM_ROUTE,
  TRANSACTION_SUCCESS_ROUTE
} from '../constants/index'
import {
  AddressConnector,
  BankConnector,
  DocUploadConnector,
  PhoneConnector,
  SignatureConnector,
  SocialConnector,
  StartSceneConnector,
  ThankYouConnector,
  TransactionAmountConnector,
  TransactionConfirmationConnector,
  TransactionSuccessConnector,
  WireInstructionsConnector
} from '../connectors/indexConnectors'
import React, { Component } from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import history from '../history/history';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4876a4',
      main: '#0e4b75',
      dark: '#002449',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif !important"
  },
  shadows: ['none']
})

export const routes = [{
  path: START_ROUTE,
  main: WireInstructionsConnector,
  exact: true
}, {
  path: ADDRESS_ROUTE,
  main: AddressConnector,
  exact: true
}, {
  path: BANK_CONNECT_ROUTE,
  main: BankConnector,
  exact: true
}, {
  path: DOC_UPLOAD_ROUTE,
  main: DocUploadConnector,
  exact: true
}, {
  path: PHONE_ROUTE,
  main: PhoneConnector,
  exact: true
}, {
  path: SIGNATURE_ROUTE,
  main: SignatureConnector,
  exact: true
}, {
  path: SOCIAL_ROUTE,
  main: SocialConnector,
  exact: true
}, {
  path: THANK_YOU_ROUTE,
  main: ThankYouConnector,
  exact: true
}, {
  path: TRANSACTION_AMOUNT_ROUTE,
  main: TransactionAmountConnector,
  exact: true
}, {
  path: TRANSACTION_CONFIRM_ROUTE,
  main: TransactionConfirmationConnector,
  exact: true
}, {
  path: TRANSACTION_SUCCESS_ROUTE,
  main: TransactionSuccessConnector,
  exact: true
}]

type AppProps = {}

class Navigation extends Component<AppProps> {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default Navigation
