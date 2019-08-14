// @flow
import React from 'react'
import Typography from '@material-ui/core/Typography'
type ParagraphProps = {
  classes: Object,
  children: any
}

const StartParagraph = (props: ParagraphProps) => {
  return (
    <Typography component="p" className={props.classes.p}>
      {props.children}
    </Typography>
  )
}

export { StartParagraph }
