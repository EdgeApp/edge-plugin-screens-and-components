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
  camera: any,
  onNext(Object): void
}
type State = {}

class DocumentUploadScreenComponent extends Component<Props, State> {
  handleNext = () => {
    this.props.onNext(this.props.history)
  }

  render() {
    const image = this.props.camera
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.containerMain}>
          <div className={classes.poweredByRow}>
            <PoweredBy poweredBy={this.props.poweredBy} useBlack />
          </div>
          <div className={classes.inset}>
            <div className={classes.headerText}>
              Upload your passport or driver’s license.
            </div>
            <div className={classes.dashBox}>
              <img src={image} className={classes.camera} alt="" />
            </div>
            <div className={classes.subHeaderText}>Please note:</div>
            <div className={classes.bulletPoints}>
              - Identification cannot be expired
            </div>
            <div className={classes.bulletPoints}>- No glare or reflection</div>
            <div className={classes.bulletPoints}>
              - All details and corners in frame
            </div>
            <div className={classes.bulletPoints}>- Photo must be in focus</div>
          </div>
        </div>
        <div className={classes.containerBottom}>
          <PrimaryButton onClick={this.handleNext}>Next </PrimaryButton>
        </div>
      </div>
    )
  }
}
const styles = theme => ({
  container: { ...sceneContainer, backgroundColor: THEME.COLORS.WHITE },
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
    marginTop: 34,
    width: '100%',
    fontSize: 17,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME.COLORS.BLACK
  },
  subHeaderText: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 33,
    width: '80%',
    fontSize: 17,
    color: THEME.COLORS.BLACK
  },
  bulletPoints: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    fontSize: 17,
    color: THEME.COLORS.BLACK
  },
  dashBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 178,
    height: 178,
    borderRadius: 6,
    borderColor: THEME.COLORS.ACCENT_BLUE,
    borderWidth: 6,
    borderStyle: 'dashed',
    marginTop: 30
  },
  camera: {
    padding: 0,
    width: 98,
    height: 72
  }
})
const DocumentUploadScreen = withStyles(styles)(DocumentUploadScreenComponent)
export { DocumentUploadScreen }
