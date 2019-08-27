// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {TRANSACTION_CONFIRM_ROUTE} from '../constants/index'
import { TransactionAmountScreen } from '../scenes/TransactionAmountScreen'
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
    useExchangeRate: true,
    exchangeRatesFrom: 10,
    buyOrSell: 'sell',
    cryptoAmount: '.00345',
    fiatAmount: '50',
    bankName: 'Allen\'s Amazing Banks XX007',
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  getExchangeRate: () => {
    // dispatch(getExchangeRate())
  },
  confirmQuote: (crypto: string, fiat: string,  history: Object) => {
    // dispatch(confirmQuote(crypto,fiat, history))
    history.push(TRANSACTION_CONFIRM_ROUTE)
  },
  changeCrypto: (amount, exchangeRate: number) => {
  },
  changeFiat: (amount: string, exchangeRate: number) => {

  }
  /*
  changeCrypto = (arg: string) => {
    window.edgeProvider.consoleLog('arg: ' + arg)
    window.edgeProvider.consoleLog('this.props.exchangeRatesFrom: ' + this.props.exchangeRatesFrom)
    window.edgeProvider.consoleLog(Number(arg) * this.props.exchangeRatesFrom)
    const fiat = Number(arg) * this.props.exchangeRatesFrom
    const fiatRound = Math.round(fiat * 100) / 100
    this.setState({
      cryptoAmount: arg,
      fiatAmount: fiatRound.toString()
    })
  }
  changeFiat = (arg: string) => {
    const crypto = this.props.wallet.currencyCode === 'BTC'
      ? Math.round((Number(arg) * this.props.exchangeRatesTo) * 1000000) / 1000000
      : Number(arg) * this.props.exchangeRatesTo
    this.setState({
      fiatAmount: arg,
      cryptoAmount: crypto.toString()
    })
  }
  */
})
export const TransactionAmountConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionAmountScreen)
