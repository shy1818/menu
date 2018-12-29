
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
    ClassifyNavBarWrapper,
    ClassifyNavBarItem,
    ClassifyNavBarSlider
} from './styledComponent'

class ClassifyNavBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            active_nav: this.props.location.pathname
        }
    }
    // 当路由切来切去的时候，改状态
    componentWillReceiveProps (props, state) {
        this.setState({ active_nav: props.location.pathname })
    }
    render () {
        let { active_nav } = this.state
        return (
            <ClassifyNavBarWrapper>
                <ClassifyNavBarItem active = {active_nav === '/menu'} 
                    onClick = {() => this.handleClick('/menu', 'left')}
                >分类</ClassifyNavBarItem>
                <ClassifyNavBarItem active = {active_nav === '/food'} 
                    onClick = {() => this.handleClick('/food', 'right')}
                >食材</ClassifyNavBarItem>
                <ClassifyNavBarSlider nav = {active_nav}/>
            </ClassifyNavBarWrapper>
        )
    }
    handleClick (nav, dir) {
        // 路由切换， 并给路由中保存一个路由状态：点击的是左边的还是右边的
        this.props.history.push({pathname: nav, state:{ dir }})
    }

}

export default withRouter(ClassifyNavBar)