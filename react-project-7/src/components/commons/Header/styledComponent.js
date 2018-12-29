
import styled from 'styled-components'
import config from '@As/stylesheets/config'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 1.173333rem;
    background: ${config.baseColor};
    /* background: ${props => props.a ? 'blue': 'red'}; */
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 0rem .24rem;
    .left, .right, .center {
        color: #fff;
        font-size: .48rem;
    }
    ${ props => props.fixed ? `position:fixed;z-index: 999;top: 0;`:''}
    
`