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



function createNewProject (projectName) {
  const section = document.querySelector('section');
  
  const card = document.createElement('article');
  card.classList.add('card1');
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
  plusText.classList.add('plus');
  plusText.textContent = 'plus';
  header.appendChild(plusText);
  return {
    card
  }

  

  ;
}

createNewProject('test');

function createNewTask  (task)  {
  const todo = document.createElement('div');
  todo.classList.add('content');
  createNewProject.card.appendChild(todo);

  const todoP = document.createElement('p');
  todoP.textContent = task;
  todo.appendChild(todoP);

  const todoDelete = document.createElement('div');
  todoDelete.classList.add("delete");
  todoDelete.textContent = 'delete';
  todo.appendChild(todoDelete);
}

createNewTask('example');
