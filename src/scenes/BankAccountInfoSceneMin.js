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
import { COUNTRY_CODES } from '../constants/accountConstants'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  poweredBy: PoweredByType,
  iban?: string,
  swift?: string,
  owner?: string,
  address1?: string,
  address2?: string,
  city?: string,
  country?: string,
  state?: string,
  zip?: string,
  requireAddress?: boolean,
  onNext(Object): void
}
type State = {
  iban: string,
  swift: string,
  owner: string,
  address1: string,
  address2: string,
  city: string,
  country: string,
  state: string,
  zip: string,
  requireAddress: boolean,
  filteredCountryList: Object[]
}

class BankAccountInfoSceneMinComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.handleSelectCountry = this.handleSelectCountry.bind(this)
    this.state = {
      iban: this.props.iban ? this.props.iban : '',
      swift: this.props.swift ? this.props.swift : '',
      owner: this.props.owner ? this.props.owner : '',
      address1: this.props.address1 ? this.props.address1 : '',
      address2: this.props.address2 ? this.props.address2 : '',
      city: this.props.city ? this.props.city : '',
      country: this.props.country ? this.props.country : '',
      state: this.props.state ? this.props.state : '',
      zip: this.props.zip ? this.props.zip : '',
      requireAddress: this.props.requireAddress
        ? this.props.requireAddress
        : false,
      filteredCountryList: COUNTRY_CODES
    }
  }

  handleNext = () => {
    const {
      iban,
      swift,
      owner,
      address1,
      address2,
      city,
      country,
      state,
      zip,
      requireAddress
    } = this.state
    if (iban && swift && owner && !requireAddress) {
      this.props.onNext({
        iban,
        swift,
        owner,
        history: this.props.history
      })
    } else if (
      iban &&
      swift &&
      owner &&
      address1 &&
      city &&
      country &&
      state &&
      zip &&
      requireAddress
    ) {
      this.props.onNext({
        iban,
        swift,
        owner,
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

  handleChangeIban = event => {
    this.setState({
      iban: event.target.value
    })
  }

  handleChangeOwner = event => {
    this.setState({
      owner: event.target.value
    })
  }

  handleChangeSwift = event => {
    this.setState({
      swift: event.target.value
    })
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

  handleSelectCountry = event => {
    const saveEvent = event
    this.setState({
      country: saveEvent.target.value
    })
  }

  render() {
    const { classes } = this.props
    const { filteredCountryList, requireAddress } = this.state
    const countryRows =
      filteredCountryList.length > 0 &&
      filteredCountryList.map((country, i) => {
        return (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        )
      }, this)
    return (
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.poweredByRow}>
            <PoweredBy poweredBy={this.props.poweredBy} useBlack />
          </div>
          <div className={classes.inset}>
            <div className={classes.headerText}>
              Enter Bank Account Information.
            </div>
            <TextField
              id="standard-uncontrolled"
              label="Account Owner"
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
              onChange={this.handleChangeOwner}
              value={this.state.owner}
              autoFocus
            />
            <TextField
              id="standard-uncontrolled"
              label="IBAN"
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
              onChange={this.handleChangeIban}
              value={this.state.iban}
            />
            <TextField
              id="standard-uncontrolled"
              label="Swift Code"
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
              onChange={this.handleChangeSwift}
              value={this.state.swift}
            />
            {requireAddress && (
              <div className={classes.headerText}>
                Provide your home address.
              </div>
            )}
            {requireAddress && (
              <TextField
                id="standard-uncontrolled"
                label="Address"
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
                onChange={this.handleChangeAddress1}
                value={this.state.address1}
                autoFocus={
                  this.state.owner !== '' && this.state.address1 === ''
                }
              />
            )}
            {requireAddress && (
              <TextField
                id="standard-uncontrolled"
                label="Unit (optional)"
                type="text"
                tabIndex="4"
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
            )}
            {requireAddress && (
              <TextField
                id="standard-uncontrolled"
                label="City"
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
                onChange={this.handleChangeCity}
                value={this.state.city}
              />
            )}
            {requireAddress && (
              <TextField
                id="standard-uncontrolled"
                label="State"
                type="text"
                tabIndex="6"
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
            )}
            {requireAddress && (
              <TextField
                id="standard-uncontrolled"
                label="Postal Code"
                type="text"
                tabIndex="7"
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
            )}
            {requireAddress && (
              <div>
                <label>
                  Select Country
                  <select
                    onChange={this.handleSelectCountry}
                    value={this.state.country}
                  >
                    {countryRows}
                  </select>
                </label>
              </div>
            )}
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
const BankAccountInfoSceneMin = withStyles(styles)(
  BankAccountInfoSceneMinComponent
)
export { BankAccountInfoSceneMin }
