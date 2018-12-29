import React, { Component } from 'react'
import { Header, Icon } from '@commons'

function inject_unount (target) {

    // 改装componentWillUnmount，销毁的时候记录一下
    let next = target.prototype.componentWillUnmount
    target.prototype.componentWillUnmount = function () {
        if (next) next.call(this, ...arguments);
        this.unmount = true
    }
    // 对setState的改装，setState查看目前是否已经销毁
    let setState = target.prototype.setState
    target.prototype.setState = function () {
        if ( this.unmount ) return ;
        setState.call(this, ...arguments)
    }

}

@inject_unount
class BaseComponent extends Component {

}


// @inject_unount
class Test extends BaseComponent {
    constructor () {
        super()       
        this.state = {
            num: 0
        }

    }
    getNum = () => {
        this.timer = setTimeout(() => {
            this.setState({ num: Math.random() })
        }, 3000)
    }
    // componentWillUnmount () {     
    //     // clearTimeout(this.timer)
    //     // this.unmount = true
    //     console.log('hehe')
    // }
    render () {
        
        return (
            <div onClick = {this.getNum} style = {{ width: 100, height: 100, background: 'red' }}>
                {this.state.num}
            </div>
        )
    }

}


class DetailContainer extends Component {
    constructor () {
        super()
       
        this.state = {
            isShow: true
        }

    }
    
    render () {      
        return (
            <div>
                <Header
                    icon = { <Icon type = "angle-left" /> }
                    onLeftClick = {() => this.props.history.goBack()}
                >菜谱详情</Header>
                <div>
                    <button onClick = {() => this.setState({isShow: !this.state.isShow})}>toggle</button>
                    { !!this.state.isShow && <Test/> }
                </div>
            </div>
        )
    }

}


export default DetailContainer



