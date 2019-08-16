// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import THEME from '../constants/themeConstants'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class AddressSceneComponent extends Component<Props, State> {
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
            Provide your home address.
          </div>
          <TextField
            id="standard-uncontrolled"
            label="Address"
            type="text"
            tabIndex='0'
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
            autoFocus
          />
          <TextField
            id="standard-uncontrolled"
            label="Unit (optional)"
            type="text"
            tabIndex='1'
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
          />
          <TextField
            id="standard-uncontrolled"
            label="City"
            type="text"
            tabIndex='2'
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
          />
          <TextField
            id="standard-uncontrolled"
            label="State"
            type="text"
            tabIndex='3'
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
          />
          <TextField
            id="standard-uncontrolled"
            label="Postal Code"
            type="tel"
            tabIndex='4'
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
          />
        </div>
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
  resize: {
    fontSize: 17
  },
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 33,
    width: '100%',
    fontSize: 17,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK,
  }
})
const AddressScene = withStyles(styles)(AddressSceneComponent)
export { AddressScene }
