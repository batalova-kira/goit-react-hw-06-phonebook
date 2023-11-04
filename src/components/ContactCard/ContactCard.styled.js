import styled from "styled-components";

export const CardWrapper = styled.div`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(2)};
`

export const BtnClose = styled.button`
display: inline-block;
width: 150px;
	padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
	border-radius: ${p => p.theme.radii.lg};
	color: #fff;
	text-transform: uppercase;
	font-size: .85rem;
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 1;
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${p => p.theme.colors.teal};
		border-radius: 10rem;
		z-index: -2;
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background-color: ${p => p.theme.colors.darkTeal};
		transition: all .3s;
		border-radius: 10rem;
		z-index: -1;
	}
	&:hover {
		color: #fff;
		&:before {
			width: 100%;
		}
	}
`

export const Info = styled.p`
font-size: 20px;
font-weight: 500;
letter-spacing: -0.05em;
`