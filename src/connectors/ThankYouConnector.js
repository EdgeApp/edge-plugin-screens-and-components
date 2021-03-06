// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { SOCIAL_ROUTE } from '../constants/index'
import { ThankYouScreen } from '../scenes/ThankYouScreen'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    thanksMessage:
      'We’re reviewing your information right now, pending approval. Check your email in the next few days for next steps.',
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    }
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(SOCIAL_ROUTE)
  }
})
export const ThankYouConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYouScreen)
