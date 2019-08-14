// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {TRANSACTION_CONFIRM_ROUTE} from '../constants/index'
import { TransactionAmountScreen } from '../scenes/TransactionAmountScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(TRANSACTION_CONFIRM_ROUTE)
  }
})
export const TransactionAmountConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionAmountScreen)
