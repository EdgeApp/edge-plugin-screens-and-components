// @flow
import React from 'react'
import THEME from '../constants/themeConstants.js'
import { withStyles } from '@material-ui/core/styles'
const powerThemes = theme => ({
  container: {
    display: 'flex',
    flex: 1
  },
  containerInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  logo: {
    height: 30,
    padding: 0,
    margin: 0
  },
  logoWrapper: {
    borderRadius: 6,
    backgroundColor: THEME.COLORS.WHITE,
    padding: 4,
    height: 38,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  shim: {
    width: 10
  },
  p: {
    color: THEME.COLORS.WHITE,
    textAlign: 'right',
    fontSize: 11,
    marginRight: 10
  },
  pDark: {
    color: THEME.COLORS.BLACK,
    textAlign: 'right',
    fontSize: 11
  }
})
type Props = {
  classes: Object,
  useBlack?: boolean
}
const onClick = () => {
  window.edgeProvider.openEmailApp('support@sendwyre.com')
}
const PoweredBy = withStyles(powerThemes)((props: Props) => {
  const image = require('../assets/poweredByLogo.png')
  const p = props.useBlack
    ? props.classes.pDark
    : props.classes.p
  return (
    <div className={props.classes.container} onClick={onClick}>
      <div className={props.classes.containerInner} >
        <div>
          <div className={p} >
            Powered by
          </div>
          <div className={p} >
            support@sendwyre.com
          </div>
        </div>
      </div>
      <div className={props.classes.shim} />
      <div className={props.classes.logoWrapper} >
        <img src={image} className={props.classes.logo} alt={''}/>
      </div>
    </div>
  )
})

export { PoweredBy }
