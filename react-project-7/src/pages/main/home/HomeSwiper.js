import React, { Component } from 'react'
import { HomeSwiperWrapper } from './styledComponent'
import {connect} from 'murlin-connect'
import {  Carousel } from 'antd-mobile'

class HomeSwiper extends Component {

    componentDidMount () {
        this.props.main_actions.getListAsync()
    }
    render () {
        return (
            <HomeSwiperWrapper>
                <Carousel
                    autoplay={false}
                    infinite
                >
                {this.renderSwiperList()}
                </Carousel>
            </HomeSwiperWrapper>
        )
    }
    renderSwiperList () {
        let { list } = this.props.main
        if ( !list.length ) return '';
        list  = list.splice(0, 4)
        return list.map(val => (
            <img
                key = { val.id }
                src={val.img}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
        ))
    }

}

export default connect(HomeSwiper, ['main'])