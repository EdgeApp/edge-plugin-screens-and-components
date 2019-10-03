// @flow
import React, {Fragment} from 'react'

import type { Card } from  '../types/AppTypes.js'
import Divider from '@material-ui/core/Divider'
import {StartHeader} from './StartHeader'
import {StartParagraph} from './StartParagraph'
import { withStyles } from '@material-ui/core/styles'

type ParagraphProps = {
  classes: Object,
  card: Card,
  removeDivider: boolean
}
const renderListItems = (list: Array<string>) =>{
  const items = list.map((item: string) => {
    return <li key={item}>{item}</li>
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
const renderLinkItem = (card) => {
  console.log('render (card')
  if(!card.link) return null
  return <a href={card.link}>{card.linkText}</a>
}
const renderDivider = (removeDivider, classes) => {
  if(removeDivider) return null
  return <Divider className={classes.divider} />
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
          {renderLinkItem(props.card)}
        </div>
        {renderDivider(props.removeDivider ,props.classes)}
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
