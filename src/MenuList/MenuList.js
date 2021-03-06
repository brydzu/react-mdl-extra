import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import KEYCODE from '../keycodes'

import './MenuList.css'

export default class MenuList extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    closePortal: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.keyDown = this.keyDown.bind(this)
  }

  keyDown(e) {
    if (e.keyCode === KEYCODE.ESC) {
      // prevent esc bubbling
      e.preventDefault()
      e.stopPropagation()
      this.props.closePortal()
    }
  }

  render() {
    const { closePortal, className } = this.props
    const listClass = classnames('mdl-portalmenu__list', className)
    const children = Children.toArray(this.props.children).filter(c => c)
    return (
      <ul className={listClass} ref={ref => this.list = ref}>
        {Children.map(children, (child, index) => cloneElement(child, {
          tabIndex: index + 1,
          closeMenu: closePortal,
        }))}
      </ul>
    )
  }

}
