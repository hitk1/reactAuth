import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    padding-top: 30px;
    margin-bottom: 30px;
    height: 65vh;
    max-height: 100%;
    min-height: 680px;
    border: 1px solid #aaa;
`

export const LeftContainer = styled.div`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex: 0.65;
    display: flex;
    flex-direction: column-reverse;    
`
export const RightContainer = styled.div`
    background: #ddd;
    flex: 0.35;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`