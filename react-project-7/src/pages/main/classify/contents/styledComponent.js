
import styled from 'styled-components'

export const ClassifyContentWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #f3f3f3;
`

export const MenuWrapper = styled.nav`
    width: 25%;
    height: 100%;
    background: #f3f3f3;
    overflow:hidden;
`
export const MenuItem = styled.nav`
    width: 100%;
    height: 47px;
    text-align: center;
    line-height: 47px;
    background: ${props => props.active ? '#fff' : '#f3f3f3'};
    color: ${props => props.active ? '#D77D48' : '#333'};
    span {
        display: inline-block;
        height: 100%;
        border-bottom: 1px solid ${props => props.active ? '#D77D48' : '#f3f3f3'};
    }

`


export const ContentWrapper = styled.article`
    width: 75%;
    height: 100%;
    background: #fff;
    padding: 12px;
    overflow:hidden;
    
`

export const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content:flex-start;
    border-bottom: 1px solid #f3f3f3;
`

export const ContentTitle = styled.div`
    width: 100%;
    background: #fff;
    height: 47px;
    text-align: left;
    line-height: 47px;
    color: #333;
    padding-left: 20px;
`

export const ContentItem = styled.div`
    width: 33.33%;
    background: #fff;
    height: 47px;
    text-align: center;
    line-height: 47px;
    color: #999;
`