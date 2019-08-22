// @flow
import React, {Fragment} from 'react'

import type { Card } from  '../types/AppTypes.js'
import Divider from '@material-ui/core/Divider'
import {StartHeader} from './StartHeader'
import {StartParagraph} from './StartParagraph'
import { withStyles } from '@material-ui/core/styles'

type ParagraphProps = {
  classes: Object,
  card: Card
}
const renderListItems = (list: Array<string>) =>{
  const items = list.map((item: string) => {
    return <li>{item}</li>
  })
  return items
}
const renderList = (tempList :Array<string>, classes: Object) => {
  console.log(tempList)
  if(!tempList) return null
  if (tempList.length < 1) return null
  return <ul className={classes.feeList}>
    {renderListItems(tempList)}
  </ul>
}
const IntroItem = (props: ParagraphProps) => {

  return (
    <Fragment>
      <div>
          <StartHeader text={props.card.title} classes={props.classes} />
          <StartParagraph classes={props.classes}>
            {props.card.body}
          </StartParagraph>
          {renderList(props.card.list, props.classes)}
        </div>
        <Divider className={props.classes.divider} />
    </Fragment>
  )
}
const styles = theme => ({
  h3: {
    color: theme.palette.primary.main,
    fontSize: '17pt',
    padding: '5px 0'
  },
  p: {
    fontSize: '14pt'
  },
  divider: {
    margin: '15px 0',
    height: '2px'
  },
  feeList: {
    listStyleType: '-'
  }
})

const IntroItemComponent = withStyles(styles)(IntroItem)
export { IntroItemComponent }
