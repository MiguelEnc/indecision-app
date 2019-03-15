 
const app = {
  title: 'Indecision App',
  subtitle: "I'll help you choose what to do",
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;
  
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderPage();
  }
};

const removeAllOptions = () => {
  app.options = [];
  renderPage();
}

const chooseAnOption = () => {
  let rndNumber = Math.floor(Math.random() * app.options.length);
  let option = app.options[rndNumber];
}

const appRoot = document.getElementById('app');

const renderPage = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={chooseAnOption} disabled={app.options.length === 0}>Choose an option</button>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        {
        app.options.map((option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderPage();