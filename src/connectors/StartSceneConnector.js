// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {ADDRESS_ROUTE} from '../constants/index'
import { StartScene } from '../scenes/StartScene'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(ADDRESS_ROUTE)
  }
})
export const StartSceneConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartScene)
