import createElement from "./createElement";

const createFormPerson = (n) => {
  const form = createElement('form', {
    className: 'person',
  });

  const title = createElement('h2', {
    className: 'person__title',
    textContent: `Пассажир #${n + 1}`,
  });

  const fieldName = createElement('div', {
    className: 'field',
  });

  const labelName = createElement("label", {
    className: "field__label",
    htmlFor: `name${n}`,
    textContent: "ФИО",
  });
  
  const inputName = createElement("input", {
    className: "field__input",
    id: `name${n}`,
    name: "name",
    type: "text",
    placeholder: "Введите ваше ФИО",
    required: true,
    value: `ФИО ${n}`, // default value
  });
  
  const fieldTicket = createElement("div", {
    className: "field",
  });
  
  const labelTicket = createElement("label", {
    className: "field__label",
    htmlFor: `ticket${n}`,
    textContent: "Номер билета (10 цифр)",
  });
  
  const inputTicket = createElement("input", {
    className: "field__input",
    id: `ticket${n}`,
    name: "ticket",
    type: "text",
    placeholder: "Номер билета",
    required: true,
    minLength: 1, // не будем тратить время на ввод символов
    maxlength: 10,
    value: `Билет пассажира ${n}`, // default value
  });

  fieldName.append(labelName, inputName);
  fieldTicket.append(labelTicket, inputTicket);

  const button = createElement('button', {
    className: 'btn-confirm',
    type: 'submit',
    textContent: 'Подтвердить',
  });

  form.append(title, fieldName, fieldTicket, button);

  return form;
}

const getFormPerson = (count) => {
  const forms = [];
  if (count > 6) count = 6;

  for (let i = 0; i < count; i++) {
    forms.push(createFormPerson(i));
  }
  return forms;
}

export default getFormPerson;