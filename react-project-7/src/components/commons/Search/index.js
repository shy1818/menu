import React, { Component } from 'react'
import { 
    SearchContainer, SearchContent 
} from './styledComponent'
import search_img from "@As/images/search.png"
class Search extends Component {

    render () {
        return (
            <SearchContainer {...this.props}>
                <SearchContent {...this.props} className = "border-1px">
                    <img src = {search_img}/>
                    <p>想吃什么搜这里，如川菜</p>
                </SearchContent>
            </SearchContainer>
        )
    }

}

export default Search