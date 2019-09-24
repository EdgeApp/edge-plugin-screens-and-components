// @flow
import type { PoweredByType, Transaction, WalletDetails } from '../types/AppTypes'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainerNoHeight,
  sceneMainContainer
} from '../styles/styles'

import ChooseWalletButton from '../components/ChooseWalletButton'
import { PoweredBy } from '../components/indexComponents'
import THEME from '../constants/themeConstants'
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
  poweredBy: PoweredByType,
  isSellDisabled: boolean,
  onSellClick(Object): void,
  selectWallet(): void,
  onBuyClick(Object): void,
  getPreviousOrders(): void
}
type State = {
}

class BuySellSceneComponent extends Component<Props, State> {
  componentDidMount () {
    this.props.getPreviousOrders()
  }
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
  onSellClick = () => {
    this.props.onSellClick(this.props.history)
  }
  onBuyClick = () => {
    this.props.onBuyClick(this.props.history)
  }
  render () {
    const { classes, wallet, partnerName} = this.props
    const currencyCode = wallet ? wallet.currencyCode : ''
    const buyText = this.props.wallet ? 'Buy ' + currencyCode + ' with ' + partnerName : 'Buy'
    const sellText = this.props.wallet ? 'Sell ' + currencyCode + ' with ' + partnerName : 'Sell'
    const textStyle = this.props.isSellDisabled ? classes.disableText : classes.greenText
    return <div className={classes.container} >
      <div className={classes.poweredByRow}>
        <PoweredBy poweredBy={this.props.poweredBy}/>
      </div>
      <div className={classes.containerInner}>
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
            onClick={this.onBuyClick}
            lineColor={THEME.COLORS.ACCENT_MINT}
            disabled={this.props.isBuyDisabled}>
            <div className={textStyle} >
              {buyText}
            </div>
          </TertiaryButton>
          <div className={classes.space10} />
          <TertiaryButton
            onClick={this.onSellClick}
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
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  poweredByRow: {...poweredByRow, width: '96%'},
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  containerInner: {
    position:'relative',
    display: 'flex',
    width: '96%',
    flexGrow: 1,
    flexDirection:'column'
  },
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
    minHeight: 200,
    maxHeight: 200,
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
    height: 40
  },
  space10: {
    height: 10
  },
  transactionsContainer: {
    paddingTop: 25,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    width: '100%',
    fontSize: 17,
    paddingBottom: 20
  },
  transactionsTitle: {
    flexGrow: 1,
    minHeight: 20,
    maxHeight: 20,
    color: THEME.COLORS.WHITE,
    paddingBottom: 17,
    width: '100%',
    textAlign: 'center'
  }
})
const BuySellScene = withStyles(styles)(BuySellSceneComponent)
export { BuySellScene }
