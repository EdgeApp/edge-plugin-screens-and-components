// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { DocumentUploadScreen } from '../scenes/DocumentUploadScreen'
import { SOCIAL_ROUTE } from '../constants/index'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  return {
    poweredBy: {
      email: 'support@wyre.com',
      logo: '../assets/poweredByLogo.png'
    },
    camera: '../assets/camera.png'
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(SOCIAL_ROUTE)
  }
})
export const DocUploadConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentUploadScreen)
