import styled from 'styled-components';

export const Menu = styled.div`
    font-family: "Helvetica Neue Light";
    float: right;
    margin-right: 10%;
    line-height: 40px;

    .item {
        color: #7e8686;
        font-weight: bold;
    }
`

export const Local = styled.div`

    height: 62px;
    padding: 10px 0 10px 5px;
    background: #fff;
    -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -o-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    position: relative;
    width: 100%;
    
    img {
        margin-top: 2px;
        float: left;
        min-width: auto;
        padding-left: 65px ;
        top: 0px;
    }

    a {
        top: 0px;
    }
    

/* Header */
/* .header {
    height: 62px;
    padding: 10px 0 10px 15px;
    background: #fff;
    -webkit-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -ms-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    -o-box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.13);
    float: left;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 99;
	padding-right: 30px;
    background-color: red;
} */
/* 

.btn-logout {
position: absolute;
width: 85px;
right: 5%;  
top: 30%;
font-size: 1em;
color: white;
border: 1px solid #e2e2e2;
background-color: rgb(91, 42, 137);
border-radius: 20px/50px;
text-decoration: none;
cursor: pointer;
transition: all 0.3s ease-out;
}
.btn-logout:hover {
background: white;
color: black;
} */

`