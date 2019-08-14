// @flow
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import { PoweredBy } from '../components/indexComponents'
import THEME from '../constants/themeConstants.js'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class PendingSceneComponent extends Component<Props, State> {
  onNext = () => {
    this.props.onNext(this.props.history)
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy useBlack/>
        </div>
        <div className={classes.inset} >
          <div className={classes.headerText} >
            Please bear with us…
          </div>
          <div className={classes.subHeaderText}>
            Your application is still being reviewed.
          </div>
          <div className={classes.subHeaderText}>
            We will email you once we are done processing.
          </div>
          <div className={classes.subHeaderText2}>
            Thank you for your patience
          </div>
        </div>
      </div>

    </div>
  }
}
const styles = theme => ({
  container: {...sceneContainer, backgroundColor: THEME.COLORS.WHITE},
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  inset: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerText: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 62,
    marginBottom: 16,
    width: '100%',
    fontSize: 27,
    height: 40,
    color: THEME.COLORS.BLACK
  },
  subHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    fontSize: 17,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK
  },
  subHeaderText2: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginTop: 17,
    fontSize: 17,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK
  }
})
const PendingScene = withStyles(styles)(PendingSceneComponent)
export { PendingScene }
