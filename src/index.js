import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Store } from './Store';
import { AddArticle } from './Component/AddArticle';
import { ListArticles } from './Component/ListArticles';
//import * as serviceWorker from './serviceWorker';

const App =() =>
	<Wrapper>
		<Store>
			<AddArticle/>
			<ListArticles/>
		</Store>
	</Wrapper>

const Wrapper = styled.div `
	font-family: sans-serif;
`
const root = document.getElementById('root')
render(<App />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
