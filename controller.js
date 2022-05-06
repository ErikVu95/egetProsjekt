function logIntoSite() {
  let user = findUser(model.inputs.signIn.username);

  if (user == null) {
    alert("User does not exist");
    changeView("logIn");
  } else if (model.inputs.signIn.password == user.password) {
    model.currentUser = model.inputs.signIn.username;
    alert("Logged in as " + model.currentUser);
    changeView("homePage");
  } else {
    alert("Wrong password, try again");
    changeView("logIn");
  }
  updateView();
}

function findUser(username) {
  for (let i = 0; i < model.users.length; i++) {
    if (model.users[i].username === username) {
      return model.users[i];
    }
  }
  return null;
}

function retrieve() {
  if (model.inputs.reset.username == '') return;
  let html = /*html*/ `
<button onclick="logInView()">Back</button> <hr>
<div>Reset information has been sent to ${model.inputs.reset.username}. Follow the instructions in the email.</div>`;
  model.inputs.reset.username = '';
  model.view = html;
  show();
}

function createAccountFunction() {
  model.users.push({
    username: model.inputs.signUp.username,
    email: model.inputs.signUp.email,
    password: model.inputs.signUp.password,
  });

  model.view += /*html*/ `<h2>User has been created successfully. Go back to the login page and log into your new account.</h2>`;
  show();
}
