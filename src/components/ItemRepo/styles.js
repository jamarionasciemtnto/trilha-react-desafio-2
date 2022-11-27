import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    background-color:#E5385410;
    border-radius:15px;
    padding: 1em;
    
    h3 {
        font-size: 3em;
        color: #FAFAFA;
        text-transform: capitalize;
    }

    p {
        font-size:16px;
        color: #E5385480;
        margin-bottom:50px;
    }
   a.reposit  {
        color: #F55D5C;
        text-transform: uppercase;
        background-color: #fff;
        border-radius: 12px;
        padding: 0.75em 1.25em;
        height: 35px;
        width: auto;
        line-height: 35px;
        text-decoration: none;
        text-align: center;
        margin-left: 16px;
        float: left;
        font-weight:bold;
    }
    a.remover {
        color: #FFF;
        text-transform: uppercase;
        background-color: #F55D5C;
        border-radius: 12px;
        padding: 0.75em 1.25em;
        height: 35px;
        width: auto;
        line-height: 35px;
        text-decoration: none;
        text-align: center;
        margin-right: 16px;
        float: right;
        margin-top: -20px;
        font-weight:bold;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`