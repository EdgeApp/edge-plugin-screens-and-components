// @flow
import {BuySellConnector, IntroConnector, PendingConnector} from '../connectors/indexConnectors'
import { NOT_STARTED, PENDING } from '../constants/index'
import React, { Component } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import {
  containerSpinner
} from '../styles/styles'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  accountStatus: string | null,
  initInfo(): void,
  onNext(Object): void
}
type State = {
}

class StartSceneComponent extends Component<Props, State> {
  componentDidMount = async () => {
    // window.edgeProvider.consoleLog('Sign In Screen ')
    this.props.initInfo()
  }
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render() {
    const classes = this.props.classes
    if (!this.props.accountStatus) {
      return <div className={classes.containerSpinner}>
      <CircularProgress size={60} />
    </div>
    }
    if(this.props.accountStatus === NOT_STARTED) {
      return <IntroConnector history={this.props.history}/>
    }
    if(this.props.accountStatus === PENDING) {
      return <PendingConnector history={this.props.history}/>
    }
    return <BuySellConnector history={this.props.history}/>
  }
}
const styles = theme => ({
  containerSpinner: containerSpinner
})
const StartScene = withStyles(styles)(StartSceneComponent)
export { StartScene }
