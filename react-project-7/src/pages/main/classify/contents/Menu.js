
import React, { Component, PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import {
    MenuWrapper,
    MenuItem
} from './styledComponent'
import BScroll from 'better-scroll'
import { connect } from 'murlin-connect'
const Item = (props) => {
    return (
        <MenuItem { ...props }>
            <span>{props.children}</span>
        </MenuItem>
    )
}

class Menu extends PureComponent {
    renderItems () {
        let { categories } = this.props.main
        if ( !categories ) return ''
        let type = this.props.location.pathname === '/menu' ? 'category': 'original'
        return Object.keys(categories[type]).map((item, i) => (
            <Item 
                onTouchStart = { (e) => this.handleClick(i, e) } 
                key = {i} 
                active = { this.props.activeIndex === i }
            >{item}</Item>
        ))
    }

    handleClick = (i, e) => {
        this.props.changeActiveIndex(i)
    }

    render () {
        return (
            <MenuWrapper ref = {el => this.el = el}>   
                <div>
                    {this.renderItems()} 
                </div>    
            </MenuWrapper>
        )
    }

    componentDidMount () {
        new BScroll(this.el)
    }
    

}

export default withRouter(connect(Menu, ['main']))