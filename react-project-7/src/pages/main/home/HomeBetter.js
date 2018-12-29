import React, { Component } from 'react'

import {
    BetterContainer,
    BetterTitle,
    BetterContent,
    BetterItem
} from './styledComponent'

class HomeBetter extends Component {

    constructor (props) {
        super(props)
        this.state = {
            items: []
        }
        this.datasource = [] // 全部数据
        this.pageNum = 1
        this.pageSize = 10
    }

    getItemsAsync () {
        return this.axios.get('/mock/cookbook-list.json').then(res => {
            if (!this.datasource.length) this.datasource = res.data.data 
            this.setItems()
            this.pageNum ++;
        })
    }

    setItems () {
        let start = (this.pageNum -1) * this.pageSize
        let end = start + this.pageSize
        let items = [ ...this.state.items, ...this.datasource.slice(start, end) ]
        this.setState({items})
    }

    componentDidMount () {
        this.getItemsAsync()
        // 因为子组件的DidMount会比父组件的DidMount先执行，所以利用setTimeout 0 将逻辑放入异步队列
        setTimeout(() => {
            let { tool } = this.props.scroll
            tool.on('pullingUp', async () => {
                if ( this.datasource.length < this.pageNum * this.pageSize ) return false
                console.log('获取数据', this.pageNum)
                // 在这个项目中，不需要每次上啦获取数据了
                this.setItems()
                this.pageNum ++;
                tool.finishPullUp()
            })
        }, 0)      
    }

    componentDidUpdate (props, state) {
        if ( this.state.items !== state.items ) {
            this.props.scroll.tool.refresh()
        }
    }

    render () {
        let data = '<h1>Hello World</h1>'
        let { items } = this.state
        return (
            <BetterContainer>
                <BetterTitle>精品好菜</BetterTitle>
                
                {/* <div dangerouslySetInnerHTML = {{ __html: data }}></div> */}
                
                <BetterContent>
                    {
                        items.map((item, index) => (
                            <BetterItem key = { index }>
                                <img src = {item.img} />
                                <div className = "title">
                                    <h1>{item.name}</h1>
                                    <p>{item.all_click}浏览&nbsp;&nbsp;{item.favorites}收藏</p>
                                </div>
                            </BetterItem>
                        ))
                    }
                    
                </BetterContent>
            </BetterContainer>
        )
    }

}

export default HomeBetter