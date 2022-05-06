let appDiv = document.getElementById('app');

function show() {
  let html = "";
  html += `${model.view}`;

  appDiv.innerHTML = html;
}

function changeView(page) {
  model.currentPage = page;
  updateView();
}

updateView();
function updateView() {
  if (model.currentPage == "logIn") logInView();
  if (model.currentPage == "forgotPassword") forgotPassordView();
  if (model.currentPage == "createAccount") createAccountView();
  if (model.currentPage == "homePage") homePageView();
}

function logInView() {
  let html = "";
  html += /*html*/ ` bruker og passord er admin, ellers så kan du lage ny. <br>
    <input type="text" placeholder="Username" oninput="model.inputs.signIn.username = this.value"> <br>
    <input type="text" placeholder="Password" oninput="model.inputs.signIn.password = this.value"> <br>
    <button onclick="logIntoSite()">Log in</button>
    <button onclick="changeView('forgotPassword')">Forgot password?</button>
    <button onclick="changeView('createAccount')">Create new user</button>
     `;

  model.view = html;
  show();
}

function forgotPassordView() {
  let html = "";
  html += /*html*/ `
     <button onclick="logInView()">Back</button> <hr>
     <div>Type in your username or email to get reset information sent to your email.</div>
     <input type="text" placeholder="Type in username/email" oninput="model.inputs.reset.username = this.value"> <br>
     <button onclick="retrieve()">Send</button>
    `;
  model.view = html;
  show();
}

function createAccountView() {
  let html = '<button onclick="logInView()">Back</button> <hr>';
  html += /*html*/ `
    <input type="text" placeholder="Type your username" oninput="model.inputs.signUp.username = this.value"> <br>
    <input type="text" placeholder="Type your email" oninput="model.inputs.signUp.email = this.value"> <br>
    <input type="text" placeholder="Type your password" oninput="model.inputs.signUp.password = this.value"> <br>
    <button onclick="createAccountFunction()">Create user</button>
    `;

  model.view = html;
  show();
}

function homePageView() {
  let html = "";
  html += /*html*/ `
    <div class="page">
    
    <div class="header"> 
    <img class="topLeftLogo" src="https://thumbs.dreamstime.com/b/dumbbell-icon-logo-dumbbell-training-dark-background-white-dumbbell-icon-logo-dumbbell-training-dark-133987046.jpg" onclick="homePageView()"> 
    <h1>Erik's Gym Forum</h1>
    <div><h3>Book Personal Trainer</h3> <h3>Shop</h3> <h3>Forums</h3> <h3>About</h3> <h3>Contact</h3></div> 
    <a href="https://www.discord.com/" target="_blank">
    <img class="discord" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" title="Discord.com"
    /></a>
    <div class="userLoginText">Logged in as ${model.currentUser}</div>
    
    </div>
    
    <div class="mainContent">
    123

    </div>


    <div class="footer"> 
    <h2>© Copyright Erik Vu</h2> 

    <h3 title="Click to logout" onclick="changeView('logIn')">Log out</h3>

    <div>
  
    <a href="https://www.twitter.com/" target="_blank" title="Twitter.com">
    <img class="footerImg" src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png"
    /></a>

    <a href="https://www.facebook.com/" target="_blank" title="Facebook.com">
    <img class="footerImg" src="https://icons-for-free.com/iconfiles/png/512/facebook+high+quality+media+social+social+media+square+icon-1320192615308993674.png"
    /></a>

    <a href="https://www.instagram.com/" target="_blank" title="Instagram.com">
    <img class="footerImg" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square2-512.png"
    /></a>

    <a href="https://www.twitch.tv/" target="_blank" title="Twitch.tv">
    <img class="footerImg" src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/09/3-twitch-is-rebranding-for-the-first-time.jpg"
    /></a>

    </div>
    
    
    
    </div>
    </div>
    `;

  model.view = html;
  show();
}

//bilder med onclick og mer informasjon i arrays.
//Footer hardkodes i index? Om oss informasjon, skjema for feedback. Bestille treningstime

//Få footeren til å aligne DIVene ved siden av hverandre.
