// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {TRANSACTION_SUCCESS_ROUTE} from '../constants/index'
import { TransactionConfirmationScreen } from '../scenes/TransactionConfirmationScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    wallet: {
      name: 'Allen Wallet',
      receiveAddress: {
        publicAddress: 'string'
      },
      currencyCode: 'BTC',
      fiatCurrencyCode: 'USD',
      currencyIcon: 'string',
      currencyIconDark: 'string'
    },
    isSell:true,
    cryptoAmount: '.00345',
    fiatAmount: '50',
    withdrawFrom: 'Western Bank',
    depositTo: 'My Wallet',
    fees: '$2.99',
    total: '$1,027.01',
    onOfCurrencyCodeInFiat: '$5,1023',
    buyOrSell: 'sell'
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(TRANSACTION_SUCCESS_ROUTE)
  }
})
export const TransactionConfirmationConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionConfirmationScreen)
