import React, { Component, PureComponent } from 'react'
import {
    ContentWrapper,
    ContentContainer,
    ContentItem,
    ContentTitle
} from './styledComponent'
import { withRouter } from 'react-router-dom'
import { connect } from 'murlin-connect'
import  uuid  from 'uuid'
import BScroll from 'better-scroll'
class Content extends PureComponent {

    renderContents () {      
        this.els = []
        let {categories} = this.props.main
        if ( !categories ) return ''
        let type = this.props.location.pathname === '/menu' ? 'category': 'original'
        let data = categories[type]
        let results = []
        for ( var key in data ) {
            results.push((
                <ContentContainer ref = { el => {
                    if (el) this.els.push(el)                  
                }} key = {key}>
                    <ContentTitle>{key}</ContentTitle>
                    {
                        data[key].map((item, i) => (
                            <ContentItem key = {i}>{item}</ContentItem>
                        ))
                    }
                </ContentContainer>
            ))
        }
        return results
    }

    render () {
        return (
            <ContentWrapper ref = {el => this.el = el}>
                <div>
                    { this.renderContents() }
                </div>
            </ContentWrapper>
        )
    }
    componentDidMount () {
        this.scroll = new BScroll(this.el)
    }
    scrollTo (index) {
        this.scroll.scrollToElement(this.els[index], 300)
    }
    componentDidUpdate (props) {   
        if ( props.activeIndex !== this.props.activeIndex ) {  
            this.scrollTo(this.props.activeIndex)
        }
    }

}

export default withRouter(connect(Content, ['main']))