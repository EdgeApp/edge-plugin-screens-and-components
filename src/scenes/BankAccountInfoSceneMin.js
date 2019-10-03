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
  iban?: string,
  swift?: string,
  owner?: string,
  onNext(Object): void
}
type State = {
  iban: string,
  swift: string,
  owner: string
}

class BankAccountInfoSceneMinComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      iban:  this.props.iban ? this.props.iban :'',
      swift:  this.props.swift ? this.props.swift : '',
      owner: this.props.owner ? this.props.owner : ''
    }
  }
  handleNext = () => {
    const { iban, swift, owner } = this.state
    if (iban && swift && owner) {
      this.props.onNext({
        iban,
        swift,
        owner,
        history: this.props.history
      })
    }

  }
  handleChangeIban = (event) => {
    this.setState({
      iban: event.target.value
    })
  }
  handleChangeOwner = (event) => {
    this.setState({
      owner: event.target.value
    })
  }
  handleChangeSwift = (event) => {
    this.setState({
      swift: event.target.value
    })
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy poweredBy={this.props.poweredBy} useBlack/>
        </div>
        <div className={classes.inset} >
          <div className={classes.headerText} >
            Enter Bank Account Information.
          </div>
          <TextField
            id="standard-uncontrolled"
            label="Account Owner"
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
            onChange={this.handleChangeOwner}
            value={this.state.owner}
            autoFocus
          />
          <TextField
            id="standard-uncontrolled"
            label="IBAN"
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
            onChange={this.handleChangeIban}
            value={this.state.iban}
          />
          <TextField
            id="standard-uncontrolled"
            label="Swift Code"
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
            onChange={this.handleChangeSwift}
            value={this.state.swift}
          />
        </div>
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.handleNext} >Next</PrimaryButton>
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
    marginTop: 34,
    width: '100%',
    fontSize: 17,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK,
  },
})
const BankAccountInfoSceneMin = withStyles(styles)(BankAccountInfoSceneMinComponent)
export { BankAccountInfoSceneMin }
