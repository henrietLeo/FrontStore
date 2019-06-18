import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoreContext } from '../Store';

export const Article = ({title, content}) => {
	const [state] = useContext(StoreContext);

	return (<Box>
		<p>title = {title}</p>
		<p> Content = {content}</p>
	</Box>);
}
const Box = styled.div`
margin: 3px;
padding: 5px;
border-radius: 10px 10px 0px 10px;
background-color: white;
`
