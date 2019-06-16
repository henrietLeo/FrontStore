import React, { useContext } from 'react';
import { map } from 'ramda';
import { StoreContext } from '../Store';
import styled from 'styled-components';
import { Article } from './Article';

export const ListArticles = () => {
	const [state] = useContext(StoreContext)
	if (!state.listArticles.length >= 1)
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
