// @flow
import { PoweredBy, PrimaryButton } from '../components/indexComponents'
import React, { Component } from 'react'
import {
  poweredByRow,
  sceneButtonBottom,
  sceneContainer,
  sceneMainContainer
} from '../styles/styles'

import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Checkbox from '@material-ui/core/Checkbox';
import THEME from '../constants/themeConstants'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  history: Object,
  classes: Object,
  onNext(Object): void
}
type State = {
}

class SignatureSceneComponent extends Component<Props, State> {
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
            Provide your electronic signature.
          </div>
          <TextField
            id="standard-uncontrolled"
            label="Full Name"
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            margin="normal"
            onChange={() => {}}
            autoFocus
          />
        </div>
        <div className={classes.twoColumn}>
          <div className={classes.left}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon style={{ width: 26, height: 26 }}/>}
              checkedIcon={<CheckBoxIcon style={{ width: 26, height: 26 }} backgroundColor={THEME.COLORS.ACCENT_BLUE}/>}
              value="checkedI"
              color= 'primary'
            />
          </div>
          <div className={classes.right} >
            <div className={classes.disclaimer}>I confirm that all information submitted, to the best of my knowledge, is true, accurate, and up to date.</div>
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
  container: {...sceneContainer, backgroundColor: THEME.COLORS.WHITE},
  poweredByRow: poweredByRow,
  containerMain: sceneMainContainer,
  containerBottom: sceneButtonBottom,
  clear: {
    backgroundColor: THEME.COLORS.WHITE
  },
  inset: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    position: 'relative',
    selfAlign: 'center'
  },
  resize: {
    fontSize: 17
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
    color: THEME.COLORS.BLACK,
  },
  twoColumn: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 47
  },
  checkbox: {
    width: 100,
    height: 100,
    fontSize: 90
  },
  left: {
    flexShrink: 1,
    maxWidth: 50
  },
  right: {
    flexGrow: 1
  },
  disclaimer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: 17,
    marginTop: 9,
    color: THEME.COLORS.BLACK
  },
})
const SignatureScene = withStyles(styles)(SignatureSceneComponent)
export { SignatureScene }
