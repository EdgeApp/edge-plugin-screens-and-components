// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  containerSpinner,
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import CircularProgress from '@material-ui/core/CircularProgress'
import THEME from '../constants/themeConstants.js'
import type { WalletDetails } from '../types/AppTypes'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  cryptoAmount: string,
  fiatAmount: string,
  wallet: WalletDetails,
  bankName: string,
  exchangeRatesFrom: number,
  exchangeRatesTo: number,
  getExchangeRate(): void,
  confirmQuote(string,string, Object): void,
  changeCrypto(string): void,
  changeFiat(string): void
}
type State = {
}

class TransactionAmountScreenComponent extends Component<Props, State> {
  componentDidMount () {
    this.props.getExchangeRate()
  }
  onNext = () => {
    if(this.props.fiatAmount !== ''){
      this.props.confirmQuote(this.props.cryptoAmount, this.props.fiatAmount, this.props.history)
    }
  }
  render () {
    const { classes } = this.props
    console.log('exchange Rates From ', this.props.exchangeRatesFrom)
    if (!this.props.exchangeRatesFrom) {
      return <div className={classes.containerSpinner}>
      <CircularProgress size={60} />
    </div>
    }
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy />
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
  containerSpinner: containerSpinner
})
const TransactionAmountScreen = withStyles(styles)(TransactionAmountScreenComponent)
export { TransactionAmountScreen }
