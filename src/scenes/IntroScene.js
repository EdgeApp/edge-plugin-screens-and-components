// @flow
import type { Card, PoweredByType } from  '../types/AppTypes'
import { IntroItemComponent, PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  logo,
  poweredByRow,
  sceneButtonBottom,
  sceneContainerNoHeight,
  sceneMainContainer
} from '../styles/styles'

import THEME from '../constants/themeConstants'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  logo: any,
  poweredBy: PoweredByType,
  cards: Array<any>,
  onNext(Object): void
}
type State = {
}

class IntroSceneComponent extends Component<Props, State> {
  handleNext = () => {
    this.props.onNext(this.props.history)
  }
  renderCards = () => {
    let counter = 0
    const cards = this.props.cards.map((card: Card) => {
      counter++
      return <IntroItemComponent card={card} key={counter} removeDivider={counter === this.props.cards.length}/>
    })
    return cards
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
        <PoweredBy poweredBy={this.props.poweredBy} useBlack/>
        </div>
        <div className={classes.logoContainer}>
          <img
            style={logo}
            src={this.props.logo}
            alt=""
          />
        </div>
        {this.renderCards()}
      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={this.handleNext} >Next </PrimaryButton>
      </div>
    </div>
  }
}
const styles = theme => ({
  container: {...sceneContainerNoHeight, backgroundColor: THEME.COLORS.WHITE},
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: {...sceneButtonBottom, marginTop: 40},
  logoContainer: {
    display: 'flex',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 40,
    marginTop: 10
  },
  h3: {
    color: theme.palette.primary.main,
    fontSize: '17pt',
    padding: '5px 0'
  },
  p: {
    fontSize: '14pt'
  },
  divider: {
    margin: '15px 0',
    height: '2px'
  },
  feeList: {
    listStyleType: '-'
  }
})
const IntroScene = withStyles(styles)(IntroSceneComponent)
export { IntroScene }
