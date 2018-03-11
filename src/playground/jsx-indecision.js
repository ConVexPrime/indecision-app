// babel compiler command (with watch)
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

// Live Server (serving public folder)
// live-server public

const app = {
	title: 'Indecision App',
	subtitle: 'Strike a match, pour gasoline',
	options: []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
	// Stops full page refresh
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
	console.log(randomNum);
};

const onRemoveAll = () => {
	app.options = [];
	render();
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options.' : 'No Options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((option) => {
						return <li key={option}>{option}</li>;
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	
	ReactDOM.render(template, appRoot);
};

render();