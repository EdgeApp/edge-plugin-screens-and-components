// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {ADDRESS_ROUTE} from '../constants/index'
import { IntroScene } from '../scenes/IntroScene'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(ADDRESS_ROUTE)
  }
})
export const IntroConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScene)
