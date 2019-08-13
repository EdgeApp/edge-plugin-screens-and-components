// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {NEW_USER_NAME_ROUTE} from '../constants/index'
import { ThankYouScreen } from '../scenes/ThankYouScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(NEW_USER_NAME_ROUTE)
  }
})
export const ThankYouConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYouScreen)
