// @flow
import type { Dispatch, State } from '../types/ReduxTypes'

import { IntroScene } from '../scenes/IntroScene'
import {THANK_YOU_ROUTE} from '../constants'
import { connect } from 'react-redux'

const mapStateToProps = (state: State) => {
  const logo = 'http://edge.app/wp-content/uploads/2019/09/logo300.png' /// require('../assets/logo.png')
  const cards = [
    {
      title: 'Bity ',
      body: 'Bity is a compliant fiat to crypto exchange allowing users to safely buy and sell cryptocurrency with a bank account or directly from Edge.',
      list: []
    },
    {
      title: 'Fee',
      body: 'The following fees are applied for buying and selling cryptocurrency with Bity',
      list: [
        'Edge 0.15%',
        'Bity 0.65%'
      ]
    },
    {
      title: 'No Personal Info ',
      body: 'Users can trade up to €5000 per day without providing any personal info.',
      list: []
    },
    {
      title: 'Support',
      body: 'For support please contact',
      list: [],
      link: 'support@bity.com',
      linkText: 'support@bity.com'
    },
    {
      title: 'Terms of Service',
      body: 'Orders placed through the Bity Plugin are executed by bity. By creating orders you are agreeing to Bity\'s terms of service ',
      list: [],
      link: 'https://bity.com/legal/',
      linkText: 'Terms of Service'
    }
  ]
  return {
    logo,
    cards,
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
export const IntroConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroScene)
