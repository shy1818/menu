import React, { Component } from 'react'
import { Header, Icon } from '@commons'
import { util_decorator } from '@lib/decorator'
import {
    ListWrapper,
    ListContent,
    ListItem,
    ListItemInfo
} from './styledComponent'
import { PullToRefresh, ListView } from 'antd-mobile';

@util_decorator
class ListContainer extends Component {
    constructor () {
        super()
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.datasource = [] // 替身数据，因为dataSource数据不能加入新数据
        this.state = {
            items: [],
            dataSource, // 数据源
            refreshing: true,// 判断是不是正在刷新的开关
            isLoading: true,// 判断是不是正在加载的开发
            hasMore: true,
            height: document.documentElement.clientHeight,// 屏幕高度
        }
        this.pageSize = 10 // 控制每页多少
        this.pageNum  = 1 // 控制页数

    }
    getItemsAsync () { // 每次获取数据的方法
        return this.axios.get('/mock/cookbook-list.json')
            .then(res => {
                // 获取到对应页数的数据
                let data = this.getItemsByPage(res.data.data)
                this.pageNum ++; // 获取之后增加页面
                this.datasource = [...this.datasource, ...data] // 给替身添加数据
                // 如果没有数据了
                if ( this.datasource.length >= res.data.data.length ) {
                    this.setState({ hasMore: false })
                }  
                return data                 
            })
    }
    getItemsByPage (data) { // 根据页码信息，返回对应页数的数据
        let start = (this.pageNum - 1) * this.pageSize
        let end = start + this.pageSize
        return data.slice(start, end)
    }
    
    handleData () { // 获取数据后，更改真正的数据源，并且操作开关
        setTimeout(async () => {
            let data = await this.getItemsAsync()
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.datasource),
                refreshing: false,
                isLoading: false
            })
        }, 5000)      
    }
    
    // 渲染每一个item的方法
    // rowData 每一个数据，sectionID，每个组的id，rowID 每个item的id
    renderItem (rowData, sectionID, rowID) {
        return (
            <ListItem key = {rowID}>
                <img src = {rowData.img}/>
                <ListItemInfo>
                    <h1>{rowData.name}</h1>
                    <h4>{rowData.burdens}</h4>
                    <p>
                        {this.formatNumber(rowData.all_click)} 
                        浏览&nbsp;&nbsp; 
                        {this.formatNumber(rowData.favorites)}
                        收藏
                    </p>
                </ListItemInfo>
            </ListItem>
        )
    }
    onRefresh = () => { // 下拉刷新的逻辑
        this.setState({ refreshing: true, isLoading: true })
        // 因为是下拉属性，相当于要重新获取数据，重置页数...
        this.pageNum = 0
        if (!this.state.hasMore) this.setState({ hasMore: true })
        this.handleData()

    }; 
    onEndReached = (event) => { // 上啦加载的逻辑
        console.log('onEndReached')
        if (this.state.isLoading || !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        this.handleData()
    };
    componentDidMount () { // 初始化的话就去获取一波数据
        this.handleData()
    }
    render () {      
        return (
            <ListWrapper>
                <Header
                    icon = { <Icon type = "angle-left" /> }
                    onLeftClick = {() => this.props.history.goBack()}
                    fixed = { true }
                >菜谱列表</Header>
                <ListContent>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderFooter={() => (<div style={{ padding: '15px 0px', textAlign: 'center' }}>
                            {this.state.isLoading ? '正在加载...' : (!this.state.hasMore && '没有更多了')}
                        </div>)}
                        renderRow={(rowData, sectionID, rowID) => this.renderItem(rowData, sectionID, rowID)}
                        useBodyScroll={false}
                        pullToRefresh={<PullToRefresh
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                            indicator = {{
                                activate: '放手就刷新', // 已经扯出来
                                deactivate: '下拉去刷新', // 没有拉出来
                                release: '请稍等...', //  开始转
                                finish: '已经加载了新的数据' // 完成
                            }}
                        />}
                        onEndReached={this.onEndReached}
                        pageSize={5}
                    />
                </ListContent>
            </ListWrapper>
        )
    }

}


export default ListContainer



