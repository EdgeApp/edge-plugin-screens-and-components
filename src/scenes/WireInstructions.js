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
  title: string,
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
          {this.props.title}
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
    textAlign: 'center',
    marginTop: 50,
    width: '100%',
    fontSize: 30,
    color: THEME.COLORS.WHITE
  },
  subHeaderText: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 16,
    color: THEME.COLORS.WHITE
  },
  individualLinesText: {
    marginTop: 8,
    width: '100%',
    fontSize: 16,
    color: THEME.COLORS.WHITE
  }
})
const WireInstructions = withStyles(styles)(WireInstructionsComponent)
export { WireInstructions }
