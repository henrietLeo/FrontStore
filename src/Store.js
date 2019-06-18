import React, { createContext, useReducer, useEffect } from 'react';
import styled from 'styled-components';

const initialState = {
	listArticles : [ {title: "Titre", content: "content de ouf"}],
	currentArticle: {
		title: '',
		content: '',
	},
}

const reducer = (state = initialState, action) => {
	if (!action){
		return state
	}

	switch(action.type) {
		case 'update_content':
			console.log('new content = ' + action.content);
			return {...state,
				currentArticle: {
				...state.currentArticle,
				content: action.content
				}
			}
		case 'update_title':
			console.log('new title = ' + action.title);
			return {...state,
				currentArticle: {
					...state.currentArticle,
					title: action.title
				}
			}
		case 'push_currentArticle':
			if(!state.currentArticle.title || !state.currentArticle.content)
				return state;
			console.warn('this is it');
			return {...state,
				currentArticle: {title: '', content: ''},
				listArticles: [...state.listArticles, {title: state.currentArticle.title, content : state.currentArticle.content}]
			};
		default:
			return state;
	}
}
export const StoreContext = createContext([ initialState, () => null])
export const Store = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	
	useEffect( () => {
		return;
	})

	return (
		<Page>
			<StoreContext.Provider value={[state, dispatch]}>
				{children}
			</ StoreContext.Provider>
		</ Page>
	) 
}
const Page = styled.div `

`
