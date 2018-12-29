import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { Header, Search, Icon } from '@commons'
import ClassifyNavBar from './ClassifyNavBar'
import ClassifyMenu from './ClassifyMenu'
import ClassifyFood from './ClassifyFood'
import { 
    ClassifyWrapper,
    ClassifyContent 
} from './styledComponent'
class ClassifyContainer extends Component {
    shouldComponentUpdate (props, state) {
        // 如果main的状态变化（更改显示的组件）的时候，main会rerender，导致此组件也会rerender -》 redirect
        let { pathname } = props.location
        let { pathname: _pathname } = this.props.location
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        if ( pathname === '/' && (_pathname === '/menu' || _pathname === '/food')) return false;
        
        return true
    }
    render () {
        let { location } = this.props
        return (
            <ClassifyWrapper>
                <Header>
                    <ClassifyNavBar/>
                </Header>
                <Search type = "dark" />
                <ClassifyContent>     
                    <Route path = "/" exact render = {() => {
                        if ( this.props.selectedTab ) return ''
                        return <Redirect to = "/menu" />
                    }} />
                    <Route path = "/menu" exact children =  {(props) => <ClassifyMenu {...props}/>} />
                    <Route path = "/food" exact children = {(props) => <ClassifyFood {...props}/>} />
                </ClassifyContent>
            </ClassifyWrapper>
        )
    }


}

export default withRouter(ClassifyContainer)

// light dark