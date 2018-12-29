
import React, { Component } from 'react'
import {
    ClassifyContentWrapper
} from './styledComponent'
import Menu from './Menu'
import Content from './Content'

class ClassifyContent extends Component {

    constructor () {
        super()
        this.state = {
            activeIndex: 0
        }
    }
    render () {
        let { activeIndex } = this.state
        return (
            <ClassifyContentWrapper>
                <Menu  activeIndex = {activeIndex} changeActiveIndex = {(index) => this.setState({activeIndex: index})}></Menu>
                <Content  activeIndex = {activeIndex}></Content>
            </ClassifyContentWrapper>
        )
    }

}

export default ClassifyContent