// const container = document.querySelector("#container");

// const h1 = document.createElement("h1");
// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// const img = document.createElement("img");
// const checkBox1 = document.createElement("input");
// const checkBox2 = document.createElement("input");
// const checkBox3 = document.createElement("input");
// const checkBox4 = document.createElement("input");

// li.innerHTML = "Bacardi, 50ml";
// li1.innerHTML = "Coca-Cola, 120ml";
// li2.innerHTML = "10 ml soka od limete";
// li3.innerHTML = "5 kockica leda";

// console.log(checkBox1);
// checkBox1.setAttribute("type", "checkbox");
// checkBox2.type = "checkbox";
// checkBox3.setAttribute("type", "checkbox");
// checkBox4.setAttribute("type", "checkbox");
// li.append(checkBox1);
// li1.append(checkBox2);
// li2.append(checkBox3);
// li3.append(checkBox4);
// container.append(h1);
// container.append(ul);
// ul.append(li);
// ul.append(li1);
// ul.append(li2);
// ul.append(li3);
// container.append(img);

// img.src =
//   "https://www.spiritstyle.rs/wp-content/uploads/2023/06/kuba-libre.jpg";

// h1.innerHTML = "Moj omiljeni koktel";

// -----------------------------------------------------------------------------------------------

// const display = document.createElement('h1')
// display.innerHTML = '0';
// console.log(display)

// container.append(display);
// const button1 = document.createElement('button')
// const button2 = document.createElement('button')

// button1.innerHTML = '+'
// button2.innerHTML = '-'

// container.append(button1)
// container.append(button2)

// button1.addEventListener('click', () => {
//     currentValue = Number(display.innerHTML, typeof display.innerHTML)

//      const newValue = addOrSub('+', currentValue)

//      display.innerHTML = newValue
//      //console.log(newValue)
// })

// button2.addEventListener('click', () => {
//     currentValue = Number(display.innerHTML, typeof display.innerHTML)

//     if(currentValue > 0){
//      const newValue = addOrSub('-', currentValue)

//      display.innerHTML = newValue
//      //console.log(newValue)
//     }
// })

// const addOrSub = (operation, currentValue) => {
//     if(operation === '+'){
//         return ++currentValue
//     } else if(operation === '-'){
//     return --currentValue
//     } else {
//         return currentValue
//     }
// }
// --------------------------------------------------------------------------------------------------

const container = document.querySelector("#container");
const h1 = document.createElement("h1");
const form = document.createElement("form");

const firstNameLabel = document.createElement("label");
const firstNameInput = document.createElement("input");

const lastNameLabel = document.createElement("label");
const lastNameInput = document.createElement("input");

const emailLabel = document.createElement("label");
const emailInput = document.createElement("input");

const phoneLabel = document.createElement("label");
const phoneInput = document.createElement("input");

const addressLabel = document.createElement("label");
const addressInput = document.createElement("input");

const cityLabel = document.createElement("label");
const cityInput = document.createElement("input");

const stateLabel = document.createElement("label");
const stateSelect = document.createElement("select");

const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
const option4 = document.createElement("option");

const zipLabel = document.createElement("label");
const zipInput = document.createElement("input");

const webSiteLabel = document.createElement("label");
const webSiteInput = document.createElement("input");

const hostingLabel = document.createElement("label");
const yesInput = document.createElement("input");
const noInput = document.createElement("input");

const descriptionLabel = document.createElement("label");
const descriptionTextArea = document.createElement("textarea");

const send = document.createElement("button");

form.className = ".form-container";

h1.innerHTML = "Contact Us Today!";

firstNameLabel.innerHTML = "First Name";
firstNameInput.type = "text";
firstNameInput.placeholder = "First Name";

lastNameLabel.innerHTML = "Last Name";
lastNameInput.type = "text";
lastNameInput.placeholder = "Last Name";

emailLabel.innerHTML = "E-Mail:";
emailInput.type = "email";
emailInput.placeholder = "E-Mail Address";

phoneLabel.innerHTML = "Phone";
phoneInput.type = "tel";
phoneInput.placeholder = "+381";

addressLabel.innerHTML = "Address";
addressInput.type = "text";
addressInput.placeholder = "Adress";

cityLabel.innerHTML = "City";
cityInput.type = "text";
cityInput.placeholder = "City";

zipLabel.innerHTML = "Zip Code";
zipInput.type = "text";
zipInput.placeholder = "Zip Code";

webSiteLabel.innerHTML = "Website or domain name";
webSiteInput.type = "text";
webSiteInput.placeholder = "Website or domain name";

stateLabel.innerHTML = "State";
option1.innerHTML = "Please select your state";
option2.innerHTML = "Serbia";
option3.innerHTML = "USA";
option4.innerHTML = "Germany";

hostingLabel.innerHTML = "Do you have hosting?";
yesInput.type = "radio";
yesInput.value = "no";

noInput.type = "radio";
noInput.value = "no";

descriptionLabel.innerHTML = "Project Description";
descriptionTextArea.name = "projectDescription";
descriptionTextArea.rows = 5;
descriptionTextArea.cols = 40;

send.type = "Send";
send.innerHTML = "Send";
send.style.width = "100px";
send.style.height = "50px";
send.style.backgroundColor = "orange";
send.style.fontSize = "20px";
send.style.color = "white";

container.append(h1);
container.append(form);

stateSelect.append(option1, option2, option3, option4);

form.append(
  firstNameLabel,
  firstNameInput,
  lastNameLabel,
  lastNameInput,
  emailLabel,
  emailInput,
  phoneLabel,
  phoneInput,
  addressLabel,
  addressInput,
  cityLabel,
  cityInput,
  stateLabel,
  stateSelect,
  zipLabel,
  zipInput,
  webSiteLabel,
  webSiteInput,
  hostingLabel,
  yesInput,
  noInput,
  descriptionLabel,
  descriptionTextArea,
  send
);
