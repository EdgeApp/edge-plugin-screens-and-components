// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

// import { InputAdornment } from 'material-ui/Input'
import THEME from '../constants/themeConstants.js'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

/* import Typography from 'material-ui/Typography' */

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class SocialScreenComponent extends Component<Props, State> {
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
           Provide your social security number.
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
    color: THEME.COLORS.BLACK
  },
})
const SocialScreen = withStyles(styles)(SocialScreenComponent)
export { SocialScreen }

/*
<TextField
              id="cryptoInput"
              type="number"
              label={'Enter amount you wish to sell'}
              margin="none"
              fullWidth
              disabled={this.state.cryptoLoading}
              InputLabelProps={{
                shrink: true
              }}
              tabIndex={1}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {this.state.cryptoLoading && <CircularProgress size={25} />}
                    {!this.state.cryptoLoading && this.state.currentWalletCurrencyCode}
                  </InputAdornment>
                )
              }}
              onChange={this.calcFiat}
            />*/
