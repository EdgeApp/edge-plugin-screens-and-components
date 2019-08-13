// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import THEME from '../constants/themeConstants.js'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class BankConnectSceneComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render () {
    const image = require('../assets/bankGraphic.png')
    const image2 = require('../assets/twoChecks.png')
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy useBlack/>
        </div>
        <div className={classes.inset} >
          <div className={classes.headerText} >
            Great!
          </div>
          <div className={classes.subHeaderText}>
            Now that we have your details, we can connect your bank account using Plaid.
          </div>
          <img src={image} className={classes.bankGraphic} alt={''}/>
          <img src={image2} className={classes.checkedGraphic} alt={''}/>
        </div>
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.onNext} >Connect to bank account </PrimaryButton>
      </div>
    </div>
  }
}
const styles = theme => ({
  container: {...sceneContainer, backgroundColor: THEME.COLORS.WHITE},
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  inset: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 65,
    width: '100%',
    fontSize: 27,
    height: 40,
    color: THEME.COLORS.BLACK
  },
  subHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    width: '90%',
    fontSize: 17,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK
  },
  bankGraphic: {
    padding: 0,
    marginTop: 37
  },
  checkedGraphic: {
    padding: 0,
    marginTop: 18
  }
})
const BankConnectScene = withStyles(styles)(BankConnectSceneComponent)
export { BankConnectScene }
