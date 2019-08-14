// @flow
import React, { Component } from 'react'
import type { Transaction, WalletDetails } from '../types/AppTypes'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainerNoHeight,
  sceneMainContainer
} from '../styles/styles'

import ChooseWalletButton from '../components/ChooseWalletButton'
import { PoweredBy } from '../components/indexComponents'
import THEME from '../constants/themeConstants.js'
import { TertiaryButton } from '../components/TertiaryButton'
import { TransactionItem } from '../components/TransactionItem.js'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  wallet: WalletDetails | null,
  partnerName: string,
  transactions: Array<Transaction>,
  isBuyDisabled: boolean,
  isSellDisabled: boolean,
  onSellClick(): void,
  selectWallet(): void,
  onBuyClick(): void
}
type State = {
}

class BuySellSceneComponent extends Component<Props, State> {
  renderButtonInsides = () => {
    const { classes, wallet } = this.props
    if (wallet) {
      return <ChooseWalletButton text={wallet.name} image={wallet.currencyIcon}/>
    }
    return <div className={classes.whiteText} >
      Choose Wallet
    </div>
  }
  renderItems = () => {
    const { transactions } = this.props
    const items = transactions.map((transaction: Transaction) => {
      return <TransactionItem transaction={transaction} />
    })
    return items
  }
  renderTransactions = () => {
    const { classes, transactions } = this.props
    if (transactions.length > 0) {
      return <div className={classes.scroller} >
        {this.renderItems()}
      </div>
    }
    return null
  }
  render () {
    const { classes, wallet, partnerName} = this.props
    const currencyCode = wallet ? wallet.currencyCode : ''
    const buyText = this.props.wallet ? 'Buy ' + currencyCode + ' with ' + partnerName : 'Buy'
    const sellText = this.props.wallet ? 'Sell ' + currencyCode + ' with ' + partnerName : 'Sell'
    const textStyle = this.props.isSellDisabled ? classes.disableText : classes.greenText
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy />
        </div>
        <div className={classes.buttonsContainer} >
          <TertiaryButton
            onClick={this.props.selectWallet}
            lineColor={THEME.COLORS.WHITE}
            disabled={false}
            isCustom  >
              {this.renderButtonInsides()}
          </TertiaryButton>
          <div className={classes.space40} />
          <TertiaryButton
            onClick={this.props.onBuyClick}
            lineColor={THEME.COLORS.ACCENT_MINT}
            disabled={this.props.isBuyDisabled}>
            <div className={textStyle} >
              {buyText}
            </div>
          </TertiaryButton>
          <div className={classes.space10} />
          <TertiaryButton
            onClick={this.props.onSellClick}
            lineColor={THEME.COLORS.ACCENT_MINT}
            disabled={this.props.isSellDisabled}>
            <div className={textStyle}>
              {sellText}
            </div>
          </TertiaryButton>
        </div>
        <div className={classes.transactionsContainer} >
          <div className={classes.transactionsTitle} >
            Transaction History
          </div>
          {this.renderTransactions()}
        </div>
      </div>
    </div>
  }
}
const styles = theme => ({
  container: sceneContainerNoHeight,
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  scroller: {
    flexGrow: 1,
    position: 'relative',
    width: '100%'
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
    minHeight: '200px',
    maxHeight: '200px',
    marginTop: 14
  },
  greenText: {
    fontSize: 17,
    color: THEME.COLORS.ACCENT_MINT
  },
  disableText: {
    fontSize: 17,
    color: THEME.COLORS.GRAY_2
  },
  space40: {
    height: '40px'
  },
  space10: {
    height: '10px'
  },
  transactionsContainer: {
    paddingTop: '25px',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    width: '100%',
    fontSize: '17px',
    paddingBottom: '20px'
  },
  transactionsTitle: {
    flexGrow: 1,
    minHeight: '20px',
    maxHeight: '20px',
    color: THEME.COLORS.WHITE,
    paddingBottom: '17px',
    width: '100%',
    textAlign: 'center'
  }
})
const BuySellScene = withStyles(styles)(BuySellSceneComponent)
export { BuySellScene }
