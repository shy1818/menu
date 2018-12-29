
import styled from 'styled-components'
import config from '@As/stylesheets/config'

export const HomeWrapper = styled.section`
    width: 100%;
    height:100%; 
    overflow: hidden;
`

export const HomeSwiperWrapper = styled.section`
    width: 100%;
    height:6.666667rem;
    img {
        width: 100%;
        height: 100%;
    } 
`


export const HotClassifyWrapper = styled.section`
    width: 100%;
    background: #fff; 
`

export const HotClassifyTitle = styled.section`
    width: 100%;
    padding: 12px;
    font-size: 14px;
    color: rgb(156,156,156);
    
`
export const HotClassifyContent = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`
export const HotClassifyItem = styled.li`
    width: 25%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-top: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
    color: #333;
`



export const BetterContainer = styled.div`
    padding: 12px;
    color: #999;
`
export const BetterTitle = styled.div`
    padding: 12px 0px;
    

`
export const BetterContent = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const BetterItem = styled.li`
    width: 170px;
    margin-bottom: 12px;
    background: #fff;
    img {
        width: 100%;
        height: 170px;
    }

    .title {
        height: 60px;
        display: flex; 
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        h1 {
            width: 100%;
            color: #333;
            font-size: 16px;
            margin: 0;
        }
        p {
            width: 100%;
            font-size: 14px;
        }
    }

`
