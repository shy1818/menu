import React, { Component } from 'react'
import { Header, Search } from '@commons'
import { HomeWrapper } from './styledComponent'
import HomeSwiper from './HomeSwiper'
import HomeHotClassify from './HomeHotClassify'
import HomeBetter from './HomeBetter'

import BScroll from 'better-scroll'
class HomeContainer extends Component {
    constructor () {
        super()
        this.scroll = {
            tool: null
        }
    }
    render () {
        return (
            <HomeWrapper ref = { el => this.el = el } >
                <div>
                    <Header>菜谱大全</Header>
                    <HomeSwiper/>
                    <Search type = "light"/>
                    <HomeHotClassify/>
                    <HomeBetter scroll = { this.scroll } />
                </div>            
            </HomeWrapper>
        )
    }
    componentDidMount () {
        // 使用引用类型的特性来进行数据的传递，保证子组件中可以使用到better-scroll的实例
        this.scroll.tool = new BScroll(this.el, {
            pullUpLoad: {
                threshold: 50
            },
            click: true
        })
    }
}

export default HomeContainer