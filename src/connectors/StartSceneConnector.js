// @flow
import { APPROVED, THANK_YOU_ROUTE } from '../constants/index'
import type { Dispatch, State } from '../types/ReduxTypes'

import { StartScene } from '../scenes/StartScene'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    accountStatus: APPROVED,
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    }
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
