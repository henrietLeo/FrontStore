import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Store } from './Store';
import { AddArticle } from './AddArticle';
import { ListArticles } from './ListArticles';
//import * as serviceWorker from './serviceWorker';

const App =() =>
	<Wrapper>
		<Store>
			<Trick>
				<AddArticle/>
				<ListArticles/>
			</Trick>
		</Store>
	</Wrapper>

const Trick = styled.div `
display: flex;
flex-direction: row;
width: 100%;
`
const Wrapper = styled.div `
	font-family: sans-serif;
	width: 100%;
	height: 100%;
`
const root = document.getElementById('root')
render(<App />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
