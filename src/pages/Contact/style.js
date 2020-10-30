import styled from 'styled-components';

export const Local = styled.div`
    position:relative;
    height: 600px;
    width: 100%;    
    background-color: #f1f3f3;
    padding: 5% 15% 10%;
    color: #595959;
    
    .field {
    margin-bottom: 10px;
    }

    .field label {
    display: block;
    font-size: 12px;
    color: #777;
    }

    .field input {
    display: block;
    min-width: 250px;
    line-height: 1.5;
    font-size: 14px;
    }

    input[type="submit"] {
        display: block;
        padding: 6px 30px;
        font-size: 14px;
        background-color: #000;
        color: #fff;
        border: none
    }

    input[type="submit"]:hover {
        background-color: white;
        border:groove ;
        border-color: #e6e6e6;
        color: #000;
    }
    
`