// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import type { PoweredByType, WalletDetails } from '../types/AppTypes'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import CircularProgress from '@material-ui/core/CircularProgress'
import THEME from '../constants/themeConstants'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  wallet: WalletDetails,
  cryptoAmount: string,
  fiatAmount: string,
  withdrawFrom: string,
  depositTo: string,
  buyOrSell: string,
  isSell: boolean,
  fees: string,
  total: string,
  poweredBy: PoweredByType,
  onOfCurrencyCodeInFiat: string,
  onNext(Object): void
}
type State = {
}

class TransactionConfirmationScreenComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render () {
    const { classes } = this.props
    if(!this.props.cryptoAmount) {
      return <div className={classes.containerSpinner}>
        <CircularProgress size={60} />
      </div>
    }
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy poweredBy={this.props.poweredBy}/>
        </div>
        <div className={classes.amountContainer}>
          <div className={classes.innerDiv} >
            <div className={classes.doRow}>
                <div className={classes.dollar}>$</div>
                <div className={classes.inputWrapper}>{this.props.fiatAmount}</div>
            </div>
          </div>
        </div>
        <div className={classes.receiveAmount} >
          You will {this.props.buyOrSell} {this.props.cryptoAmount} {this.props.wallet.currencyCode}
        </div>
        <div className={classes.shim} />
        <div className={classes.box1} >
          <div className={classes.b1l}>
            <div className={classes.whiteText}>
                Price {this.props.wallet.currencyCode}
            </div>
          </div>
          <div className={classes.b1r}>
            <div className={classes.whiteText}>
              {this.props.onOfCurrencyCodeInFiat}
            </div>
          </div>
        </div>
        <div className={classes.shim} />
        <div className={classes.box1} >
          <div className={classes.b1l}>
            <div className={classes.whiteText}>
                Withdrawal from:
            </div>
          </div>
          <div className={classes.b1r}>
            <div className={classes.whiteText}>
              {this.props.withdrawFrom}
            </div>
          </div>
        </div>
        <div className={classes.shim} />
        <div className={classes.box1} >
          <div className={classes.b1l}>
            <div className={classes.whiteText}>
              Deposit fo:
            </div>
          </div>
          <div className={classes.b1r}>
            <div className={classes.whiteText}>
            {this.props.depositTo}
            </div>
          </div>
        </div>
        <div className={classes.shim} />
        <div className={classes.box1} >
          <div className={classes.b1l}>
            <div className={classes.twoRow}>
              <div className={classes.greenText}>
                Fees
              </div>
              <div className={classes.greenText}>
                Total
              </div>
            </div>
          </div>
          <div className={classes.b1r}>
            <div className={classes.twoRow}>
              <div className={classes.greenTextRight}>
                {this.props.fees}
              </div>
              <div className={classes.greenTextRight}>
                {this.props.total}
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.onNext} >Next </PrimaryButton>
      </div>
    </div>
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
    fontSize: 68,
  },
  receiveAmount: {
    flexShrink: 1,
    display: 'flex',
    fontSize: 13,
    width: '100%',
    textAlign: 'center',
    marginTop: 0,
    color: THEME.COLORS.WHITE,
    flexDirection: 'column'
  },
  box1: {
    display:'flex',
    flexDirection: 'row',
    position: 'relative',
    nimHHeight: 31,
    width: '100%',
    borderColor: THEME.COLORS.WHITE,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderStyle: 'solid'
  },
  b1l: {
    display: 'flex',
    flex: 1,
  },
  b1r: {
    display: 'flex',
    flex: 1,
    flexDirection:'column',
    alignItems: 'flex-end'
  },
  whiteText: {
    fontSize: 16,
    height: 19,
    color: THEME.COLORS.WHITE,
    marginBottom: 6
  },
  greenText: {
    fontSize: 16,
    height: 19,
    color: THEME.COLORS.ACCENT_MINT,
    marginBottom: 6
  },
  greenTextRight: {
    fontSize: 16,
    height: 19,
    color: THEME.COLORS.ACCENT_MINT,
    marginBottom: 6,
    textAlign: 'right'
  },
  shim: {
    height: 38
  },
  twoRow: {
    display : 'flex',
    flexDirection: 'column',
  },
})
const TransactionConfirmationScreen = withStyles(styles)(TransactionConfirmationScreenComponent)
export { TransactionConfirmationScreen }
