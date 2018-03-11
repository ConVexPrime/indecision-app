// Visibility toggle
class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleVisToggle = this.handleVisToggle.bind(this);
		this.state = {
			textVisible: false
		}
	}
	handleVisToggle() {
		this.setState((prevState) => {
			return {
				textVisible: !(prevState.textVisible)
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleVisToggle}>
					{this.state.textVisible ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.textVisible && (<p>Here are the details!</p>)}
			</div>
		);	
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
// 	textVisible: false
// };

// const appRoot = document.getElementById('app');

// const onVisToggle = () => {
// 	app.textVisible = !(app.textVisible);
// 	render();
// };


// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={onVisToggle}>
// 				{app.textVisible ? 'Hide Details' : 'Show Details'}
// 			</button>
// 			{app.textVisible && (
// 				<p>Here are the details!</p>
// 			)}
// 			{/*<p>{app.textVisible ? 'Here are the details' : ''}</p>*/}
// 		</div>
// 	);

// 	ReactDOM.render(template, appRoot);
// };

// render();