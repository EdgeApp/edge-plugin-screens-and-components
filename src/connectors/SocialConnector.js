// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {BANK_CONNECT_ROUTE} from '../constants/index'
import { SocialScreen } from '../scenes/SocialScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(BANK_CONNECT_ROUTE)
  }
})
export const SocialConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialScreen)
