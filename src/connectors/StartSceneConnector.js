// @flow
import type { Dispatch, State } from '../types/ReduxTypes'
import { NOT_STARTED, THANK_YOU_ROUTE } from '../constants/index'

import { StartScene } from '../scenes/StartScene'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    accountStatus: NOT_STARTED
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(THANK_YOU_ROUTE)
  },
  initInfo: () => {

  }
})
export const StartSceneConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScene)
