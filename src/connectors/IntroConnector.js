// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { IntroScene } from '../scenes/IntroScene'
import {TRANSACTION_AMOUNT_ROUTE} from '../constants'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  const logo = require('../assets/logo.png')
  const cards = [
    {
      title: 'Headline',
      body: 'The following fees are applied for buying and selling cryptocurrency with Wyre:',
      list: []
    },
    {
      title: 'Headline',
      body: 'The following fees are applied for buying and selling cryptocurrency with Wyre:',
      list: [
        'Edge Wallet 0.5%',
        'Wyre 0.5%'
      ]
    }
  ]
  return {
    logo,
    cards
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (history: Object) => {
    history.push(TRANSACTION_AMOUNT_ROUTE)
  }
})
export const IntroConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScene)
