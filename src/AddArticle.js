import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StoreContext } from './Store';

export const AddArticle = () => {
	const [state, dispatch] = useContext(StoreContext)
	return(<Form>
			<h1>Add an Article to the list</h1>
		<Div>
			<input className='title' placeholder={'Title'} value={state.currentArticle.title} onChange={event => {dispatch({type: 'update_title', title: "" + event.target.value})}} />
		<Textarea className='content' placeholder={'Content'} value={state.currentArticle.content} onChange={event => {dispatch({ type: 'update_content', content: event.target.value+""})}}/>
		<Button onClick={event => {dispatch({type: 'push_currentArticle'})}}>Publish</Button>
		</Div>
	</Form>
	);
}
const Button = styled.button`
border-radius: 0px 0px 10px 10px;
background-color: #d7ead7;
`
const Textarea = styled.textarea`
height: 100%;
width: 100%;
box-sizing: border-box;
border-style: none;
border-left-style: solid;
border-right-style: solid;

margin-top: 5px;
`
const Div = styled.div `
display: flex;
flex-direction: column;
height: 500px;
`
const Form = styled.div `
width: 50%;
text-align: right
border-radius: 10px 0px 0px 0px;
background-color:#b2e0b2;
padding: 10px;
`
