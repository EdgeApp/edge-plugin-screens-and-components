// @flow
import React from 'react'
import Typography from '@material-ui/core/Typography'

type HeaderProps = {
  classes: Object,
  text?: string
}

const StartHeader = (props: HeaderProps) => {
  return (
    <Typography variant="h3" className={props.classes.h3}>
      {props.text}
    </Typography>
  )
}

export { StartHeader }
