import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../Store';

export const AddArticle = () => {
	const [state, dispatch] = useContext(StoreContext)
	return(<div>
			<h1>Add an Article to the list</h1>
			<input className='title' placeholder={'Title'} onChange={event => {dispatch({type: 'update_title', title: "" + event.target.value})}}/>
			<input className='content' placeholder={'Content'} onChange={event => {dispatch({ type: 'update_content', content: event.target.value+""})}}/>
			<button onClick={event => {dispatch({type: 'push_currentArticle'})}}>Publish</button>
		</div>);
}

