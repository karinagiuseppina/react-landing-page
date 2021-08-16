//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";

let html = (
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron
				title="A Warm Welcome!"
				description="React is the most popular rendering library in the world"
				buttonLabel="Call to action!"
				buttonURL="https://reactjs.org/"
			/>
			<div className="row">
				<Card
					title="CardTitle"
					imageUrl="http://via.placeholder.com/250x150"
					description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
					buttonLabel="Find out more!"
					buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				/>
				<Card
					title="CardTitle"
					imageUrl="http://via.placeholder.com/250x150"
					description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
					buttonLabel="Find out more!"
					buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				/>
				<Card
					title="CardTitle"
					imageUrl="http://via.placeholder.com/250x150"
					description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
					buttonLabel="Find out more!"
					buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				/>
				<Card
					title="CardTitle"
					imageUrl="http://via.placeholder.com/250x150"
					description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
					buttonLabel="Find out more!"
					buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
				/>
			</div>
		</div>
		<Footer />
	</div>
);

//render your react application
ReactDOM.render(html, document.querySelector("#app"));
