import createElement from "./createElement.js";

const createCockpit = (titleText) => {
  const cockpit = createElement('div', {
    className: 'cockpit',
  });

  const title = createElement('h1', {
    className: 'cockpitTitle',
    textContent: title,
  });

  const button = createElement('button', {
    className: 'cockpit-title',
    textContent: title,
  });

  // const button = createElement('button', {
  //   className: 'cockpit-confirm',
  //   type: 'submit',
  //   textContent: 'Подтвердить',    
  // });

  return cockpit;
}

const createExit = () => {
  const fuselage = createElement('div', {
    className: 'fuselage exit',
  });

  return fuselage;
}

const createAirplane = (title, scheme) => {
  const choisesSeat = createElement('form', {
    className: 'choises-seat',
  })

  const plane = createElement('fieldset', {
    className: 'plane',
    name: 'plane',
  })

  const cockpit = createCockpit(title);
  
  const elements = scheme.map((type) => {
    if (type ==='exit') {
      return createExit();
    }
  })
  
  plane.append(cockpit, ...elements);
  choisesSeat.append(plane);

  return choisesSeat;
};

const airplane = (main, data) => {
  const title = 'Выберите места';
  const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];

  main.append(createAirplane(title, scheme));
}

export default airplane;