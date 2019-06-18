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

	return <div>
		{articles}
		</div>;
}
const Articles = styled.div``;
