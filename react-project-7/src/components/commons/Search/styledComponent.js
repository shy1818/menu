import styled from 'styled-components'
import config from '@As/stylesheets/config'
export const SearchContainer = styled.div`
    padding: 13px 15px;
    background: ${ props => props.type === 'light' ? config.bgColor : '#fff' }
`




export const SearchContent = styled.div`
    height: 40px;
    border-radius: 5px;
    ${ props => props.type === 'light' ?`border: 1px solid ${config.baseColor};` : '' }
    
    background: ${ props => props.type === 'light' ? '#fff' : 'rgb(239,239,239)' };
    display:flex;
    justify-content: center;
    align-items: center;
    img {
        width: 18px;
        height:18px;
    }
    p {
        color: rgb(156,156,156);
        padding-left: 4px;
    }
`