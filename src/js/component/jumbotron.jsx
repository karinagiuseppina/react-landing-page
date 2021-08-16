import React from "react";
import PropTypes from "prop-types";

const jumbotron = props => {
	return (
		<div className="row m-2">
			<div className="col jumbotron">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

export default jumbotron;
