import React, { useContext } from 'react';
import { StoreContext } from '../Store';

export const Article = ({title, content}) => {
	const [state] = useContext(StoreContext);

	return (<div>
		<p>title = {title}</p>
		<p> Content = {content}</p>
	</div>);
}

