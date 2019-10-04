// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { PhoneScene } from '../scenes/PhoneScene'
import { THANK_YOU_ROUTE } from '../constants/index'
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
    history.push(THANK_YOU_ROUTE)
  }
})
export const PhoneConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneScene)
