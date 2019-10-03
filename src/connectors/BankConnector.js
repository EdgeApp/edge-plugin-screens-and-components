// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { ADDRESS_ROUTE } from '../constants/index'
import { BankConnectScene } from '../scenes/BankConnectScene'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    bankGraphic: 'any', //  require('../assets/twoChecks.png') ,
    twoChecks: 'any' // require('../assets/bankGraphic.png'),
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(ADDRESS_ROUTE)
  }
})
export const BankConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(BankConnectScene)
