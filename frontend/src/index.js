import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('h1');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // test();

  return element;
}

async function test() {
  const res = await fetch("http://localhost:3000/test", {
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();

  console.log(data);
}

function render_post(owner, title) {

}

document.body.appendChild(component());