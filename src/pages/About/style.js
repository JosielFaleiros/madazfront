import styled from 'styled-components';

export const Values = styled.div`

    position:relative;
    width: 100%;
    font-size: clamp(1em, 1em + 1vw, 1.5em);    
    word-wrap: break-word;
    color: black;
    padding: 12% 12% 12%;
    background-image: url(https://littlevisuals.co/images/float.jpg);
`
export const Mission = styled(Values)`

    text-align: center;
    background-image: url(https://littlevisuals.co/images/747.jpg);
    color: white;
    padding: 10% 12% 10%;

`

export const Team = styled(Values)`
    
    text-align: right;
    background-image: url(https://littlevisuals.co/images/roll.jpg);
    background-size: 100%;
    color: white;

    div.background {
        border: 2px solid #CDC9C9;
    }

    div.transbox {
        margin: 30px;
        background-color: #ffffff;
        border: 1px solid #CDC9C9;
        opacity: 0.6;
    }

    div.transbox p {
        margin: 5%;
        font-weight: bold;
        color: #000000;
    }
`

export const Purpose = styled(Values)`

    background-image: url(https://littlevisuals.co/images/eponymous.jpg);    
    background-size: 100%;
    color:  #f2f3f3;
    text-align: inherit;
`