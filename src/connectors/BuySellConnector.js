// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { BuySellScene } from '../scenes/BuySellScene'
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
    transactions: state.Transactions.transactions,
    isBuyDisabled: true,
    isSellDisabled: true,
    partnerName: 'Wyre',
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSellClick: () => {
  },
  selectWallet: () => {
  },
  onBuyClick: () => {
  },
  getPreviousOrders: () => {

  }
})
export const BuySellConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuySellScene)
