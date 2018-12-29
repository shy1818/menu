
import styled from 'styled-components'
import config from '@As/stylesheets/config'

export const ClassifyWrapper = styled.section`
    width: 100%;
    height:100%;
    display: flex;
    flex-flow: column;
`
export const ClassifyContent = styled.div`
    position:relative;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
`

export const ClassifyNavBarWrapper = styled.div`
    width: 142px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #fff;
    position: relative;
`

export const ClassifyNavBarItem = styled.div`
    width: 50%;
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: ${props => props.active ? config.baseColor : '#fff'};
    transition: all 0.3s;
    float: left;
    position: relative;
    z-index:2;
`

export const ClassifyNavBarSlider = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => props.nav === '/menu' ? '0' : '50%'};
    width: 50%;
    height: 100%;
    background: #fff; 
    border-radius: 15px; 
    transition: all 0.3s;

`

export const ClassifyTabContent = styled.div`
    position: absolute;  
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;

`