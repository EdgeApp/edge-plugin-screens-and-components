// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {NEW_USER_NAME_ROUTE} from '../constants/index'
import { ThankYouScreen } from '../scenes/ThankYouScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    thanksMessage: 'We’re reviewing your information right now, pending approval. Check your email in the next few days for next steps.'
  }
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
