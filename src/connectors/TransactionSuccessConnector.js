// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { PHONE_ROUTE } from '../constants/index'
import { TransactionSuccess } from '../scenes/TransactionSuccess'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(PHONE_ROUTE)
  }
})
export const TransactionSuccessConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionSuccess)
