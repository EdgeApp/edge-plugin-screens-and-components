// @flow
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import { PrimaryButton } from '../components/indexComponents'
import THEME from '../constants/themeConstants'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  thanksMessage: string,
  onNext(Object): void
}
type State = {}

class ThankYouScreenComponent extends Component<Props, State> {
  handleNext = () => {
    this.props.onNext(this.props.history)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.inset}>
            <div className={classes.headerText}>Thank You</div>
            <div className={classes.subHeaderText}>
              {this.props.thanksMessage}
            </div>
          </div>
        </div>
        <div className={classes.containerBottom}>
          <PrimaryButton onClick={this.handleNext}>Done </PrimaryButton>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  container: { ...sceneContainer, backgroundColor: THEME.COLORS.WHITE },
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
    marginTop: 62,
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
  }
})
const ThankYouScreen = withStyles(styles)(ThankYouScreenComponent)
export { ThankYouScreen }
