import React, { Component } from 'react'
import { HeaderContainer } from './styledComponent'
class Header extends Component {

    render () {
        let none = () => {}
        return (
            <HeaderContainer fixed = {this.props.fixed}>
               <div onClick = { this.props.onLeftClick || none } className = "left">{this.props.icon}</div>
               <div className = "center">{this.props.children}</div>
               <div className = "right">{this.props.rightContent}</div>
            </HeaderContainer>
        )

    }

}

export default Header