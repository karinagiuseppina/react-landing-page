import React from "react";
import PropType from "prop-types";

const Card = props => {
	return (
		<div className="col-12 col-md-3">
			<div className="card">
				<img
					className="card-img-top"
					src={props.imageUrl}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
	buttonUrl: PropType.string
};

export default Card;
