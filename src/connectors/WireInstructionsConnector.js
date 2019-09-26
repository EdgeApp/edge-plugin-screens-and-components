// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import {PHONE_ROUTE} from '../constants/index'
import { WireInstructions } from '../scenes/WireInstructions'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  const message = []
  message.push('To complete your purchase. wire funds to Bity.  You must include the reference')
  message.push('Recipient: Bity SA Rue des Usines 44 20')
  message.push('Bank Address: Fidor Bank AG, Germany')
  message.push('Account: 0020041966')
  message.push('iban: DE07700222000020041966')
  message.push('swift bic: FDDODDEMXXX')
  message.push('Reference: biy.com XBJ2-9f89')
  return {
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    },
    message
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(PHONE_ROUTE)
  }
})
export const WireInstructionsConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(WireInstructions)
