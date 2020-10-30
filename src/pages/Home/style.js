import styled from 'styled-components';

export const Carousel = styled.div`

	margin:0;
	padding: 0;
	box-sizing: border-box;	

	#items-wrapper {
		width: 100vw;
	}

	#items {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
	}

	.item {
		flex: none;
		scroll-snap-align: start;
		pointer-events: none;
	}

	img {
		width: 100%;
		height: 100%;
	}
`   

export const Help = styled.div`

    position:relative;
    background-color: #e1e6ea;
    width: 100%;
    height: 400px;
	color: #636969;
	text-align: justify;
	font-family: "Helvetica Neue Light";
	
	a {
		font-size: 17px;
		text-align: right;
		display: block;
	}
	
	li { list-style-type: none; }

	div {
		display: inline-block;
		font-size: 18px;
	}	

	h1 {
		text-align: center;
		color: #899090;
	}

	h4 {
		font-size: 19px;
	}
	
	.box-1 {
		width: 50%;
		margin-left: 25%;
	}

	.box-2 {
		margin-left: 12%;
	}
`

export const Work = styled.div`

	font-family: "Helvetica Neue Light";
	font-size: 19px;
	position:relative;
    background-color:  #f2f3f3;
    width: 100%;
    height: 450px;
	text-align: center;
	
	div {
		display: inline-block;
		width: 300px;
	}	
`   

export const Products = styled.div`

	padding: 5% 5% 5%;
	color:  #252828;
	background-image: url(https://littlevisuals.co/images/level.jpg);
    background-size: 100%;
	font-size: clamp(1em, 1em + 1vw, 1.5em);    
	font-family: "Helvetica Neue Light";
    position:relative;
    background-color:  #eaf2fa;
    width: 100%;
    height: 500px;
	text-align: justify;
	font-weight: bold;

	h1 {
		color: #3d4242;
		text-align: center;
	}

	div {
		display: inline-block;
		width: 50%;
		margin-left: 25%;
		background-color: #ffffff;
		padding: 3% 3% 3%;		
        opacity: 0.6;
	}

`   