import './style.css';
import { compareAsc, format } from "date-fns";



document.querySelector('.card-list').addEventListener('wheel', (event) => {
  event.preventDefault();
const element = document.querySelector('.card-list')
  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});

/*
     <div id="content">
         <nav>
            <ul>
                <li>Projects <span class="remove">delete</span><span class="add">add</span></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>

        <section class="card-list">
            <article class="card">
              <header class="projectName">
                <h2>example</h2>
                <div class="plus">plus</div>
              </header>
              <div class="todo">
                <p>Lorem ipsum dolor</p>
                <div class="delete">delete</div>
              </div>
            </article>
          </section>
*/

let projectIndex = 0;

//function to create new project

function createNewProject (projectName) {
  const section = document.querySelector('section');
  
  const card = document.createElement('article');
  card.classList.add('card');
  section.appendChild(card);

  const header = document.createElement('header');
  header.classList.add('projectName');
  card.appendChild(header);

  const plus = require('./plus.svg');
  const remove = require('./delete.svg');

  const projectNameHeading = document.createElement('h2');
  projectNameHeading.textContent = projectName;
  header.appendChild(projectNameHeading);

  const plusText = document.createElement('div');
  plusText.classList.add(`plus`);
  plusText.classList.add(Date.now());
  plusText.textContent = 'plus';
  header.appendChild(plusText);
  return {
    card
  }
  ;
}

//function to create new task

createNewProject('test');

function createNewTask  (element, task)  {
  const card = getCard(element)

  const todo = document.createElement('div');
  todo.classList.add('content');

  const todoP = document.createElement('p');
  todoP.textContent = task;
  todo.appendChild(todoP);

  const todoDelete = document.createElement('div');
  todoDelete.classList.add("delete");
  todoDelete.textContent = 'delete';
  todo.appendChild(todoDelete);

  card.appendChild(todo);
}

//add button functionality


function getCard(element) {
  const plus = element.getAttribute('class');
  const temp = document.getElementsByClassName(plus);
  const plusEl = temp[0]
  const card = plusEl.closest('.card');
  console.log(card);
  return card
}

const plusArr = document.querySelectorAll('.plus');

for (let element of plusArr) {
  element.onclick = function() {
    createNewTask(element, 'example')
  }
  };