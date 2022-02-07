import "./index.html";
import "./css/index.css";

import start from "./modules/start.js";
import getFormPerson from "./modules/getFormPerson.js";
import readyPlane from "./modules/readyPlane.js";

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  
  const {main, firstForm} = start(app, title);
  
  firstForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const forms = getFormPerson(firstForm.count.value);
    
    main.append(...forms);
    
    readyPlane(forms, main);
  })
};

init('.app', 'Выберите тур');