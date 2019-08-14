// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {TRANSACTION_SUCCESS_ROUTE} from '../constants/index'
import { TransactionConfirmationScreen } from '../scenes/TransactionConfirmationScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
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
