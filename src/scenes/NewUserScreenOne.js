// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import THEME from '../constants/themeConstants.js'
import { withStyles } from 'material-ui/styles'

type Props = {
  history: Object,
  classes: Object,
}
type State = {
}

class NewUserScreenOne extends Component<Props, State> {
  render () {
    const { classes } = this.props
    return <div className={classes.container} >
      <div className={classes.containerMain}>
        <div className={classes.poweredByRow}>
          <PoweredBy useBlack/>
        </div>

      </div>
      <div className={classes.containerBottom}>
        <PrimaryButton onClick={() => {}} >Next </PrimaryButton>
      </div>
    </div>
  }
}
const styles = theme => ({
  container: {...sceneContainer, backgroundColor: THEME.COLORS.WHITE},
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom
})

export default withStyles(styles)(NewUserScreenOne)
