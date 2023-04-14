import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="The Hague" />
			</div>
		</div>
	);
}

export default App;
