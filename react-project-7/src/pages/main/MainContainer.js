import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import uuid from 'uuid'
import * as MainStyled from './styledComponent'

import CookBookIcon from '@As/images/cookbook.png'
import CookBookIconActive from '@As/images/cookbook-active.png'
import LocationIcon from '@As/images/location.png'
import LocationIconActive from '@As/images/location-active.png'
import MenuIcon from '@As/images/menu.png'
import MenuIconActive from '@As/images/menu-active.png'
import MoreIcon from '@As/images/more.png'
import MoreIconActive from '@As/images/more-active.png'

import HomeContainer from '@pages/main/home/HomeContainer'
import ClassifyContainer from '@pages/main/classify/ClassifyContainer'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    let selectedTab = 'cook'
    this.state = {
      selectedTab: selectedTab,
      tabs: [
          { id: uuid(), title: '菜谱大全', selected: 'cook', component: <HomeContainer/>, icons: { default: CookBookIcon, active: CookBookIconActive } },
          { id: uuid(), title: '分类', selected: 'classify', component: <ClassifyContainer selectedTab = {  selectedTab } />, icons: { default: MenuIcon, active: MenuIconActive } },
          { id: uuid(), title: '地图', selected: 'location', component: '456', icons: { default: LocationIcon, active: LocationIconActive } },
          { id: uuid(), title: '更多', selected: 'more', component: '456', icons: { default: MoreIcon, active: MoreIconActive } },
      ]
    };
  }

  componentDidUpdate (props, {selectedTab}) {
    // 如果此时，状态改变说明切换组件，判断如果是从menu切换出来的话，就更改路由为/
    let { selectedTab: stab } = this.state
    if ( selectedTab !== stab && selectedTab === 'classify' ) {
      this.props.history.replace('/')
    }
    if ( selectedTab !== stab && stab === 'classify' ) {
      this.props.history.push('/menu')
    }
  }

  renderTabItems () {
      let { tabs } = this.state
      return tabs.map(tab => (
            <TabBar.Item
                title={tab.title} key={tab.id}
                icon={ <MainStyled.MainTabIcon url = {tab.icons.default} /> }
                selectedIcon={<MainStyled.MainTabIcon url = {tab.icons.active} />}
                selected={this.state.selectedTab === tab.selected}
                onPress={() => {
                    this.setState({ selectedTab: tab.selected });
                }}
            >
                { tab.component }
          </TabBar.Item>
      ))
  }

  componentDidMount () {
    if ( this.props.location.pathname === '/menu' ) {
      this.setState({
        selectedTab: 'classify'
      })
    }
  }

  render() {
    
    return (
      <MainStyled.MainWrapper>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="rgb(247,247,247)"
        >
          {this.renderTabItems()}
          
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }


}

export default MainContainer