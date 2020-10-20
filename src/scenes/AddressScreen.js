// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import type { PoweredByType } from '../types/AppTypes'
import THEME from '../constants/themeConstants'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  poweredBy: PoweredByType,
  address1?: string,
  address2?: string,
  city?: string,
  country?: string,
  state?: string,
  zip?: string,
  onNext(Object): void
}
type State = {
  address1: string,
  address2: string,
  city: string,
  country: string,
  state: string,
  zip: string
}

class AddressSceneComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      address1: this.props.address1 ? this.props.address1 : '',
      address2: this.props.address2 ? this.props.address2 : '',
      city: this.props.city ? this.props.city : '',
      country: this.props.country ? this.props.country : '',
      state: this.props.state ? this.props.state : '',
      zip: this.props.zip ? this.props.zip : ''
    }
  }

  handleNext = () => {
    const { address1, address2, city, country, state, zip } = this.state
    if (address1 && city && country && state && zip) {
      this.props.onNext({
        address1,
        address2,
        city,
        country,
        state,
        zip,
        history: this.props.history
      })
    }
  }

  handleChangeAddress1 = event => {
    this.setState({
      address1: event.target.value
    })
  }

  handleChangeAddress2 = event => {
    this.setState({
      address2: event.target.value
    })
  }

  handleChangeCity = event => {
    this.setState({
      city: event.target.value
    })
  }

  handleChangeState = event => {
    this.setState({
      state: event.target.value
    })
  }

  handleChangePostalCode = event => {
    this.setState({
      zip: event.target.value
    })
  }

  handleChangeCountry = event => {
    this.setState({
      country: event.target.value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.poweredByRow}>
            <PoweredBy poweredBy={this.props.poweredBy} useBlack />
          </div>
          <div className={classes.inset}>
            <div className={classes.headerText}>Provide your home address.</div>
            <TextField
              id="standard-uncontrolled"
              label="Address"
              type="text"
              tabIndex="0"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangeAddress1}
              value={this.state.address1}
              autoFocus
            />
            <TextField
              id="standard-uncontrolled"
              label="Unit (optional)"
              type="text"
              tabIndex="1"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangeAddress2}
              value={this.state.address2}
            />
            <TextField
              id="standard-uncontrolled"
              label="City"
              type="text"
              tabIndex="2"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangeCity}
              value={this.state.city}
            />
            <TextField
              id="standard-uncontrolled"
              label="State"
              type="text"
              tabIndex="3"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangeState}
              value={this.state.state}
            />
            <TextField
              id="standard-uncontrolled"
              label="Postal Code"
              type="tel"
              tabIndex="4"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangePostalCode}
              value={this.state.zip}
            />
            <TextField
              id="standard-uncontrolled"
              label="Country"
              type="text"
              tabIndex="5"
              fullWidth
              InputProps={{
                classes: {
                  input: classes.resize
                }
              }}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChangeCountry}
              value={this.state.country}
            />
          </div>
        </div>
        <div className={classes.containerBottom}>
          <PrimaryButton onClick={this.handleNext}>Next</PrimaryButton>
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
    marginTop: 34,
    width: '100%',
    fontSize: 17,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK
  }
})
const AddressScene = withStyles(styles)(AddressSceneComponent)
export { AddressScene }
