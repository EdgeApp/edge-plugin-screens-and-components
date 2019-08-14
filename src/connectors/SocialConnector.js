// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { SocialScreen } from '../scenes/SocialScreen'
import {THANK_YOU_ROUTE} from '../constants/index'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(THANK_YOU_ROUTE)
  }
})
export const SocialConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialScreen)
