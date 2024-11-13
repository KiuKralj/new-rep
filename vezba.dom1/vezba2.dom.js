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
const yesLabel = document.createElement("label");
const yesInput = document.createElement("input");
const noLabel = document.createElement("label");
const noInput = document.createElement("input");

const textAreaLabel = document.createElement("label");
const textArea = document.createElement("textarea");

const sendButton = document.createElement("button");

h1.innerHTML = "Contact Us Today";

firstNameLabel.innerHTML = "First Name";
firstNameInput.type = "text";
firstNameInput.placeholder = "First Name";

lastNameLabel.innerHTML = "Last Name";
lastNameInput.type = "text";
lastNameInput.placeholder = "Last Name";

emailLabel.innerHTML = "E-Mail";
emailInput.type = "text";
emailInput.placeholder = "E-Mail";

phoneLabel.innerHTML = "Phone #";
phoneInput.type = "text";
phoneInput.placeholder = "+381650000000";

addressLabel.innerHTML = "Address";
addressInput.type = "text";
addressInput.placeholder = "Address";

cityLabel.innerHTML = "City";
cityInput.type = "text";
cityInput.placeholder = "City";

stateLabel.innerHTML = "State";
option1.innerHTML = "Please select your state";
option2.innerHTML = "serbia";
option3.innerHTML = "usa";
option4.innerHTML = "romania";

zipLabel.innerHTML = "Zip Code";
zipInput.type = "text";
zipInput.placeholder = "Zip Code";

webSiteLabel.innerHTML = "Website or domain name";
webSiteInput.type = "text";
webSiteInput.placeholder = "Website or domain name";

hostingLabel.innerHTML = "Do you have hosting?";
yesLabel.textContent = "";
yesInput.type = "radio";
yesInput.value = "yes";
yesInput.name = "radio";
yesLabel.style.marginRight = "10px";

noLabel.textContent = "";
noInput.type = "radio";
noInput.value = "no";
noInput.name = "radio";
noLabel.style.marginRight = "10px";

textAreaLabel.innerHTML = "Project description";
textArea.placeholder = "Project description";
textArea.rows = 5;
textArea.cols = 40;

sendButton.innerHTML = "Send";
sendButton.type = "Send";

sendButton.onclick = (event) => {
  event.preventDefault();
  const objData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    address: addressInput.value,
    city: cityInput.value,
    state: stateSelect.value,
    zip: zipInput.value,
    projectDescription: textArea.value,
  };
  if (yesInput.checked) {
    objData.hosting = "yes";
  }
  if (noInput.checked) {
    objData.hosting = "no";
  }
  console.log(objData);
};

sendButton.style.width = "100px";
sendButton.style.height = "50px";
sendButton.style.backgroundColor = "orange";
sendButton.style.fontSize = "20px";
sendButton.style.color = "white";

container.append(h1);
container.append(form);

yesLabel.append(yesInput);
yesLabel.append(" Yes");
noLabel.append(noInput);
noLabel.append(" No");

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
  yesLabel,
  noLabel,
  textAreaLabel,
  textArea,
  sendButton
);
