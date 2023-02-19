const inputForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";

initForm();

inputForm.addEventListener('input', onFormInput);
inputForm.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
    event.preventDefault();

    let filledFields = localStorage.getItem(LOCALSTORAGE_KEY);
    filledFields = filledFields ? JSON.parse(filledFields) : {};
    filledFields[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filledFields));
};

function onFormSubmit(event) {
    event.preventDefault();
    
    let filledFields = localStorage.getItem(LOCALSTORAGE_KEY);
    console.log(filledFields = JSON.parse(filledFields));

    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function initForm() {
    let filledFields = localStorage.getItem(LOCALSTORAGE_KEY);
    if (filledFields) {
        filledFields = JSON.parse(filledFields);
        Object.entries(filledFields).forEach(([name, value]) => {
            inputForm.elements[name].value = value;
        });
    }
};

/*
1. Track the input event on the form, and each time write to local storage an object with the email and message fields, 
in which you save the current values of the form fields. 
Let the key for the storage be the "feedback-form-state" string.
2. When loading the page, check the state of the storage, and if it stores some data, 
use it to fill in the form fields. Otherwise, the fields must be empty.
3. When submitting the form, clear the storage and form fields, 
and also display the object with the email and message fields and their current values in the console.
4. Make sure that the storage is updated no more than once every 500 milliseconds. 
To do this, add to the project and use the lodash.throttle library.
*/
