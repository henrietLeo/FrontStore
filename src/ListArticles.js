import React, { useContext } from 'react';
import { StoreContext } from './Store';
import styled from 'styled-components';
import { Article } from './Component/Article';

export const ListArticles = () => {
	const [state] = useContext(StoreContext)
	if (!state.listArticles)
	{
		return <p>Is Empty</p>;
	}
	const articles = state.listArticles.map(article => {
		return <Article key={article.title} title={article.title} content={article.content}/>;
	});

	return <Articles>
		{articles}
		</Articles>;
}
const Articles = styled.div`
width:50%;
background-color: #b2e0b2;
border-radius: 0px 10px 0px 0px;
padding: 10px;
`;
