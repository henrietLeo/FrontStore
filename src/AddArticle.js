import React, { useContext, useEffect } from 'react';
import { StoreContext } from './Store';

export const AddArticle = () => {
	const [state, dispatch] = useContext(StoreContext)
	return(<div>
			<h1>Add an Article to the list</h1>
			<input className='title' placeholder={'Title'} value={state.currentArticle.title} onChange={event => {dispatch({type: 'update_title', title: "" + event.target.value})}}/>
			<input className='content' placeholder={'Content'} value={state.currentArticle.content} onChange={event => {dispatch({ type: 'update_content', content: event.target.value+""})}}/>
			<button onClick={event => {dispatch({type: 'push_currentArticle'})}}>Publish</button>
		</div>);
}

