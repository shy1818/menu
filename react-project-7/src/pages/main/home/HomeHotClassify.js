import React, { Component } from 'react'
import {
    HotClassifyWrapper,
    HotClassifyTitle,
    HotClassifyContent,
    HotClassifyItem
} from './styledComponent'
import { connect } from 'murlin-connect'
import {withRouter} from 'react-router-dom'
import uuid from 'uuid'

class HomeHotClassify extends Component {
    render () {
        return (
            <HotClassifyWrapper>
                <HotClassifyTitle>热门分类</HotClassifyTitle>
                <HotClassifyContent>
                    {this.renderClassifyItems()}
                </HotClassifyContent>
            </HotClassifyWrapper>
        )
    }

    renderClassifyItems () {
        let { categories } = this.props.main
        if ( !categories ) return ''
        let renders = categories.category['热门'].slice(0, 11)
        renders.push('更多...')
        return renders.map(item => (
            <HotClassifyItem onClick = {() => this.props.history.push('/list') } key = {uuid()}>{item}</HotClassifyItem>
        ))
    }

    componentDidMount () {
        this.props.main_actions.getCategoriesAsync()
        this.props.main_actions.getCategoriesAsync()
    }

}

export default withRouter(connect(HomeHotClassify, [{
    name: 'main',
    states: ['categories']
}]))