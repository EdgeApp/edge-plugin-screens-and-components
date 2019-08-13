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

class TransactionSuccessComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy/>
        </div>
        <div className={classes.headerText} >
          Congratulations!
        </div>
        <div className={classes.subHeaderText}>
          Transaction was successful
        </div>
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.onNext} >Next </PrimaryButton>
      </div>
    </div>
  }
}
const styles = theme => ({
  container: sceneContainer,
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 147,
    width: '100%',
    fontSize: 30,
    height: 40,
    color: THEME.COLORS.WHITE
  },
  subHeaderText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 16,
    width: '100%',
    fontSize: 16,
    height: 20,
    color: THEME.COLORS.WHITE
  }
})
const TransactionSuccess = withStyles(styles)(TransactionSuccessComponent)
export { TransactionSuccess }
