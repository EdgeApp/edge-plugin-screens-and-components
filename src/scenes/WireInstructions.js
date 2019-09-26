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
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  poweredBy: PoweredByType,
  onNext(Object): void,
  message: Array<string>
}
type State = {
}

class WireInstructionsComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  renderMessage = () => {
    const { classes } = this.props
    const lines = this.props.message.map((arg: string, index: number) => {
      if(index === 0) {
        return <div className={classes.subHeaderText}>
        {arg}
      </div>
      }
      return <div className={classes.individualLinesText}>
      {arg}
    </div>
    })
    return lines
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy poweredBy={this.props.poweredBy}/>
        </div>
        <div className={classes.headerText} >
          Wire Instructions
        </div>
        {this.renderMessage()}
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
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 100,
    width: '100%',
    fontSize: 30,
    height: 40,
    color: THEME.COLORS.WHITE
  },
  subHeaderText: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 36,
    width: '95%',
    fontSize: 16,
    height: 20,
    color: THEME.COLORS.WHITE
  },
  individualLinesText: {
    display: 'flex',
    marginTop: 8,
    width: '100%',
    fontSize: 16,
    height: 20,
    color: THEME.COLORS.WHITE
  }
})
const WireInstructions = withStyles(styles)(WireInstructionsComponent)
export { WireInstructions }
