'use strict';

/*global ReactDOM*/
/*global React*/
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderPage();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  renderPage();
};

var chooseAnOption = function chooseAnOption() {
  var rndNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[rndNumber];
};

var appRoot = document.getElementById('app');

var renderPage = function renderPage() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { onClick: chooseAnOption, disabled: app.options.length === 0 },
      'Choose an option'
    ),
    React.createElement(
      'button',
      { onClick: removeAllOptions },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderPage();
