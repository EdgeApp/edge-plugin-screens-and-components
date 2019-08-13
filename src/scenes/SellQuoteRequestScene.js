// @flow
import { PoweredBy, PrimaryButton } from './components'
import React, { Component } from 'react'

import { CircularProgress } from 'material-ui/Progress'
import SellAmountFiatBigInputContainer from '../components/SellAmountFiatBigInputContainer.js'
import THEME from '../constants/themeConstants.js'
import type {WalletDetails} from '../types/AppTypes'
import { withStyles } from 'material-ui/styles'

type Props = {
  history: Object,
  classes: Object,
  /* wallet: WalletDetails,
  bankName: string,
  exchangeRatesFrom: number,
  exchangeRatesTo: number,
  getExchangeRate(): void,
  confirmQuote(string,string, Object): void */
}
type State = {
  /* cryptoAmount: string,
  fiatAmount: string */
}

class SellQuoteRequestScene extends Component<Props, State> {
  /* constructor (props: Props) {
    super(props)
    this.state = {
      cryptoAmount: '',
      fiatAmount: ''
    }
  }
  componentDidMount () {
    this.props.getExchangeRate()
  }
  next = () => {
    window.edgeProvider.consoleLog('next value ', this.state.fiatAmount)
    if(this.state.fiatAmount !== ''){
      this.props.confirmQuote(this.state.cryptoAmount, this.state.fiatAmount, this.props.history)
    }
  }
  changeCrypto = (arg: string) => {
    window.edgeProvider.consoleLog('arg: ' + arg)
    window.edgeProvider.consoleLog('this.props.exchangeRatesFrom: ' + this.props.exchangeRatesFrom)
    window.edgeProvider.consoleLog(Number(arg) * this.props.exchangeRatesFrom)
    const fiat = Number(arg) * this.props.exchangeRatesFrom
    const fiatRound = Math.round(fiat * 100) / 100
    this.setState({
      cryptoAmount: arg,
      fiatAmount: fiatRound.toString()
    })
  }
  changeFiat = (arg: string) => {
    const crypto = this.props.wallet.currencyCode === 'BTC'
      ? Math.round((Number(arg) * this.props.exchangeRatesTo) * 1000000) / 1000000
      : Number(arg) * this.props.exchangeRatesTo
    this.setState({
      fiatAmount: arg,
      cryptoAmount: crypto.toString()
    })
  }
  renderReceive = () => {
    const { classes } = this.props
    if(this.state.cryptoAmount !== '') {
      return <div className={classes.receiveAmount} >
      You will sell {this.state.cryptoAmount} {this.props.wallet.currencyCode}
    </div>
    }
    return <div className={classes.receiveAmount} />
  } */
  renderSellComponent = () => {

  }
  render () {
    const { classes } = this.props
    /* if (!this.props.exchangeRatesFrom) {
      return <div className={classes.containerSpinner}>
      <CircularProgress size={60} />
    </div>
    } */
    return (<div className={classes.container} >
        <div className={classes.containerInsideTop} >
          <PoweredBy />
          <div className={classes.chooseAmount} >
            Choose Amount
          </div>
          <SellAmountFiatBigInputContainer
            onChange={this.changeFiat}
            value={this.state.fiatAmount}
            />
            {this.renderReceive()}
            <div className={classes.depositBox} >
              <div className={classes.dpLeft} >
                Deposit To:
              </div>
              <div className={classes.dpRight} >
                {this.props.bankName}
              </div>
            </div>
            <div className={classes.disclaimer} >
              Sell amount is an estimate. Actual rate is determined at the time funds are received.
            </div>
        </div>
        <div className={classes.containerInsideBottom} >
          <PrimaryButton onClick={this.next}>Next</PrimaryButton>
        </div>
    </div>)
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column'
  },
  containerInsideTop: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    flexGrow: 3,
    width: '90%',
    minHeight: '320px',
    maxHeight: '360px',
    paddingTop: '20px'
  },
  containerInsideBottom: {
    display: 'flex',
    flexGrow: 2,
    flexDirection: 'column',
    position: 'relative',
    width: '90%',
    paddingBottom: '10px',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  chooseAmount: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '17px',
    color: THEME.COLORS.WHITE,
    marginBottom: '30px',
    marginTop: '20px'
  },
  containerSpinner: {
    display: 'flex',
    flex: '1',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  depositBox: {
    display: 'flex',
    width: '100%',
    height: '102px',
    borderTop: '0.5px solid #FFF',
    borderBottom: '0.5px solid #FFF'
  },
  dpLeft: {
    flexGrow: 1,
    display: 'flex',
    minWidth: '90px',
    maxWidth: '90px',
    fontSize: '16px',
    color: THEME.COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dpRight: {
    flexGrow: 1,
    display: 'flex',
    fontSize: '16px',
    color: THEME.COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  disclaimer: {
    flex: 1,
    display: 'flex',
    fontSize: '12px',
    width: '100%',
    textAlign: 'center',
    color: THEME.COLORS.WHITE,
    flexDirection: 'column',
    marginTop: '20px'
  },
  receiveAmount: {
    flex: 1,
    display: 'flex',
    fontSize: '13px',
    width: '100%',
    textAlign: 'center',
    color: THEME.COLORS.WHITE,
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '60px'
  }
})

export default withStyles(styles)(SellQuoteRequestScene)
