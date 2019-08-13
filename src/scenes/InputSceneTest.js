// @flow
import React, { Component } from 'react'

import THEME from '../constants/themeConstants.js'
import { withStyles } from 'material-ui/styles'

type Props = {
  history: Object,
  classes: Object,
  onChange(string): void
}
type State = {
  value: string

}

class SellAmountFiatBigInputContainer extends Component <Props, State> {
  inputRef
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.inputRef = React.createRef()
  }
  onChange = (event: Object) => {
    const val = event.target.value
    this.setState({
      value: val
    })
    console.log(val)
  }
  componentDidMount() {
    this.nameInput.focus()
    if(this.inputRef.current) {
      this.inputRef.current.focus()
    }
  }

  render () {
   //  window.edgeProvider.consoleLog('render')
    const { classes } = this.props
    // const stringValue = '$' + this.props.value
    const newWidth = 30 * this.state.value.length
    return <div className={classes.container}>
        <div className={classes.inputBottom} >
          <div className={classes.innerDiv} >
            $
            <input
              ref={(input) => { this.nameInput = input }}  //ref={this.inputRef}
              type="tel"
              autoFocus={true}
              name="amount"
              className={classes.input}
              style={{width: newWidth + 'px'}}
              value={this.props.value}
              onChange={this.onChange}
            />
          </div>
        </div>
    </div>
  }
}

const styles = theme => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    borderRadius: '6px',
    height: '81px',
    marginBottom: '20px'
  },
  input: {
    fontSize: '50px',
    border: 0,
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  resize: {
    fontSize: '64px',
    textAlign: "center",
    color: THEME.COLORS.WHITE
  },
  innerDiv: {
    flexDirection: 'row',
    position: 'relative',
    minWidth: '30px',
    fontSize: '50px',
    color: THEME.COLORS.WHITE
  },
  inputBottom: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '21px',
    backgroundColor: THEME.COLORS.ACCENT_ORANGE
  },
  inputComponent : {
    position: 'relative',
    width: '50%',
    fontSize: '21px'
  }


})

export default withStyles(styles)(SellAmountFiatBigInputContainer)
