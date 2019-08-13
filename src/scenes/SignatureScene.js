// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import Checkbox from 'material-ui/Checkbox'
import THEME from '../constants/themeConstants.js'
import TextField from 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class SignatureSceneComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy useBlack/>
        </div>
        <div className={classes.inset} >
          <div className={classes.headerText} >
            Provide your electronic signature.
          </div>

          <TextField
            id="filled-email-input"
            label="Social Security Number"
            className={classes.textField}
            type="number"
            fullWidth
            name="security"
            autoComplete="email"
            margin="normal"
            variant="filled"
            onChange={() => {}}
            autoFocus
          />
        </div>
        <div>

        </div>
        <Checkbox className={classes.checkbox} onChange ={() => {}}/>
        <div className={classes.disclaimer}>I confirm that all information submitted, to the best of my knowledge, is true, accurate, and up to date.</div>
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.onNext} >Next </PrimaryButton>
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
  textField: {
    position: 'relative',
    selfAlign: 'center'
  },
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 34,
    width: '100%',
    fontSize: 17,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK,
  },
  checkbox: {
    width: 30,
    height: 30
  },
  disclaimer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    fontSize: 17,
    color: THEME.COLORS.BLACK
  },
})
const SignatureScene = withStyles(styles)(SignatureSceneComponent)
export { SignatureScene }
