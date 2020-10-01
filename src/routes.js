import React from 'react';
import { Route } from "react-router-dom";

import Home from './containers/HomePage';
import ContactPage from './components/ContactForm';

const BaseRouter = () => {
	return (
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact/" component={ContactPage} />
			</div>
		)
}

export default BaseRouter;