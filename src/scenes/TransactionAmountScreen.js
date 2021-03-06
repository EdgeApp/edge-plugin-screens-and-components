// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import type { PoweredByType, WalletDetails } from '../types/AppTypes'
import React, { Component } from 'react'
import {
  containerSpinner,
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import CircularProgress from '@material-ui/core/CircularProgress'
import THEME from '../constants/themeConstants'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  buyOrSell: string,
  fiatSymbol?: string,
  cryptoAmount: string,
  fiatAmount: string,
  wallet: WalletDetails,
  bankName: string,
  exchangeRatesFrom: number,
  exchangeRatesTo: number,
  poweredBy: PoweredByType,
  useExchangeRate: boolean,
  getExchangeRate(): void,
  confirmQuote(string, string, Object): void,
  changeFiat(string, number): void,
  openBankAccountInfo(Object): void
}
type State = {
  clicked: number,
  value: string
}

class TransactionAmountScreenComponent extends Component<Props, State> {
  inputRef: any
  constructor(props: Props) {
    super(props)
    this.state = {
      value: '',
      clicked: 1
    }
    // $FlowFixMe
    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.props.getExchangeRate()
    if (this.props.fiatAmount !== null) {
      this.setState({
        value: this.props.fiatAmount
      })
      if (this.inputRef.current) {
        this.inputRef.current.focus()
      }
    }
  }

  componentDidUpdate() {
    if (this.inputRef.current) {
      this.inputRef.current.focus()
    }
  }

  handleClick = () => {
    const cl = this.state.clicked + 1
    this.setState({
      clicked: cl
    })
  }

  handleOpenBankAccountInfo = () => {
    this.props.openBankAccountInfo(this.props.history)
  }

  handleNext = () => {
    if (this.props.fiatAmount) {
      this.props.confirmQuote(
        this.props.cryptoAmount,
        this.props.fiatAmount,
        this.props.history
      )
    }
  }

  handleChange = (event: Object) => {
    const val = event.target.value
    this.setState({
      value: val
    })
    const exchangeRate =
      this.props.buyOrSell === 'sell'
        ? this.props.exchangeRatesFrom
        : this.props.exchangeRatesTo
    this.props.changeFiat(val, exchangeRate)
  }

  //
  renderReceive = () => {
    const { classes } = this.props
    if (this.props.cryptoAmount !== '' && this.props.useExchangeRate) {
      return (
        <div className={classes.receiveAmount}>
          You will {this.props.buyOrSell} {this.props.cryptoAmount}{' '}
          {this.props.wallet.currencyCode}
        </div>
      )
    }
    return <div className={classes.receiveAmount} />
  }

  renderFiatCode = () => {
    if (this.props.fiatSymbol) {
      return this.props.fiatSymbol
    }
    return '$'
  }

  renderOptions = () => {
    const { classes } = this.props
    return (
      <div className={classes.doRow}>
        <div className={classes.dollar}>{this.renderFiatCode()}</div>
        <div className={classes.inputWrapper}>{this.state.value}</div>
      </div>
    )
  }

  render() {
    const { classes, buyOrSell } = this.props
    console.log('exchange Rates From ', this.props.exchangeRatesFrom)
    if (!this.props.exchangeRatesFrom && this.props.useExchangeRate) {
      return (
        <div className={classes.containerSpinner}>
          <CircularProgress size={60} />
        </div>
      )
    }
    const buyOrSellSyntax = buyOrSell.replace(
      buyOrSell.slice(0, 1),
      buyOrSell.slice(0, 1).toUpperCase()
    )
    const depositOrWithdrawal =
      buyOrSell === 'buy' ? 'Withdrawal from' : 'Deposit To'
    return (
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.poweredByRow}>
            <PoweredBy poweredBy={this.props.poweredBy} />
          </div>
          <div className={classes.chooseAmount}>Choose Amount</div>
          <div className={classes.amountContainer} onClick={this.handleClick}>
            <div className={classes.innerDiv}>{this.renderOptions()}</div>
          </div>
          {this.renderReceive()}
          <div
            className={classes.depositBox}
            onClick={this.handleOpenBankAccountInfo}
          >
            <div className={classes.dpLeft}>{depositOrWithdrawal}:</div>
            <div className={classes.dpRight}>{this.props.bankName}</div>
          </div>
          <div className={classes.disclaimer}>
            {`${buyOrSellSyntax} amount is an estimate. Actual rate is determined at the time funds are received.`}
          </div>
          {this.renderInvisible()}
        </div>
        <div className={classes.containerBottom}>
          <PrimaryButton onClick={this.handleNext}>Next </PrimaryButton>
        </div>
      </div>
    )
  }

  renderInvisible = () => {
    const { classes } = this.props
    return (
      <TextField
        inputRef={this.inputRef}
        id="standard-uncontrolled"
        label="Phone Number"
        type="tel"
        tabIndex="0"
        fullWidth
        InputProps={{
          classes: {
            input: classes.resize
          }
        }}
        style={{
          width: '2px',
          height: '2px',
          opacity: 0,
          position: 'absolute',
          top: -17
        }}
        value={this.state.value}
        className={classes.textField}
        margin="normal"
        onChange={this.handleChange}
        autoFocus
      />
    )
  }
}
const styles = theme => ({
  container: sceneContainer,
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  containerSpinner: containerSpinner,
  amountContainer: {
    position: 'relative',
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderRadius: 6
  },
  innerDiv: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    flexShrink: 1,
    fontSize: 50,
    color: THEME.COLORS.WHITE
  },
  inputHidden: {
    fontSize: 2,
    border: 0,
    marginLeft: -20,
    color: THEME.COLORS.WHITE
  },
  doRow: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row'
  },
  dollar: {
    paddingTop: 10,
    fontSize: 40,
    marginRight: 3
  },
  inputWrapper: {
    fontSize: 68
  },
  textField: {
    position: 'relative',
    selfAlign: 'center'
  },
  chooseAmount: {
    flexShrink: 1,
    display: 'flex',
    fontSize: 17,
    width: '100%',
    textAlign: 'center',
    marginTop: 24,
    color: THEME.COLORS.WHITE,
    flexDirection: 'column'
  },
  receiveAmount: {
    flexShrink: 1,
    display: 'flex',
    fontSize: 13,
    width: '100%',
    textAlign: 'center',
    marginTop: 14,
    color: THEME.COLORS.WHITE,
    flexDirection: 'column'
  },
  depositBox: {
    display: 'flex',
    width: '100%',
    height: 62,
    marginTop: 46,
    borderTop: '0.5px solid #FFF',
    borderBottom: '0.5px solid #FFF'
  },
  dpLeft: {
    flex: 1,
    display: 'flex',
    minWidth: 90,
    maxWidth: 90,
    fontSize: 16,
    color: THEME.COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dpRight: {
    flex: 1,
    display: 'flex',
    fontSize: 16,
    color: THEME.COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  disclaimer: {
    flex: 1,
    display: 'flex',
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    color: THEME.COLORS.WHITE,
    flexDirection: 'column',
    marginTop: 20
  },
  resize: {
    fontSize: 17
  }
})
const TransactionAmountScreen = withStyles(styles)(
  TransactionAmountScreenComponent
)
export { TransactionAmountScreen }
