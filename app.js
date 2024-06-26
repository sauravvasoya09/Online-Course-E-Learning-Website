function handleLogin(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let isSuccess = true;
  let emailvalidation = /^[a-z0-9]+/;
  let passvalidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]+$/;

  if (!email) {
    isSuccess = false;
    document.getElementById("erroremail").innerText = "Please Enter Your Email";
  } else if (!emailvalidation.test(email)) {
    isSuccess = false;
    document.getElementById("erroremail").innerText =
      "Please Enter Valid Email ";
  } else {
    isSuccess = true;
    document.getElementById("erroremail").innerText = "";
  }

  if (!pass) {
    isSuccess = false;
    document.getElementById("errorpass").innerText =
      "Please Enter Your Password";
  } else if (!passvalidation.test(pass)) {
    isSuccess = false;
    document.getElementById("errorpass").innerText =
      "Please Enter One Uppercase Char. , Lowercase Char. , Digit , Special Char. ";
  } else {
    isSuccess = true;
    document.getElementById("errorpass").innerText = "";
  }

  if (isSuccess) {
    document.getElementById("login_Form").reset();
  }
}

function handleSignup(event) {
  event.preventDefault();
  let fname = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let emailvalidation = /^[a-z0-9]+/;
  let passvalidation =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%^&*])[A-Za-z\d@!#$%^&*]+$/;
  let fnamevalidation = /^[A-Za-z ]+$/;
  let isSuccess = true;

  if (!fname) {
    isSuccess = false;
    document.getElementById("errorfname").innerText =
      "Please Enter Your First Name";
  } else if (!fnamevalidation.test(fname)) {
    isSuccess = false;
    document.getElementById("errorfname").innerText =
      "Please Enter Only Char. , First Char Uppercase";
  } else {
    isSuccess = true;
    document.getElementById("errorfname").innerText = "";
  }

  if (!email) {
    isSuccess = false;
    document.getElementById("erroremail").innerText = "Please Enter Your Email";
  } else if (!emailvalidation.test(email)) {
    isSuccess = false;
    document.getElementById("erroremail").innerText =
      "Please Enter Valid Email ";
  } else {
    isSuccess = true;
    document.getElementById("erroremail").innerText = "";
  }

  if (!pass) {
    isSuccess = false;
    document.getElementById("errorpass").innerText =
      "Please Enter Your Password";
  } else if (!passvalidation.test(pass)) {
    isSuccess = false;
    document.getElementById("errorpass").innerText =
      "Please Enter One Uppercase Char. , Lowercase Char. , Digit , Special Char. ";
  } else {
    isSuccess = true;
    document.getElementById("errorpass").innerText = "";
  }

  if (!document.getElementById("checkbox").checked) {
    document.getElementById("errorcheckbox").innerText =
      "Please Agree With Terms & Condition";
  } else {
    document.getElementById("errorcheckbox").innerText = "";
  }

  if (isSuccess) {
    document.getElementById("signup_Form").reset();
    
    window.location.href = "Login_Page.html";
    // Create a new HTML document
    var newDoc = document.implementation.createHTMLDocument();

    // Create and append elements to the new document
    var html = newDoc.createElement("html");
    var body = newDoc.createElement("body");
    body.innerHTML = "";
    html.appendChild(body);
    newDoc.documentElement.appendChild(html);

    // Inject the new document into the current page
    document.body.innerHTML = newDoc.documentElement.innerHTML;
  }
}

// explore course button logic

function handle_Explore_Course(){
  window.location.href = "Courses_Page.html";
    // Create a new HTML document
    var newDoc = document.implementation.createHTMLDocument();

    // Create and append elements to the new document
    var html = newDoc.createElement("html");
    var body = newDoc.createElement("body");
    body.innerHTML = "";
    html.appendChild(body);
    newDoc.documentElement.appendChild(html);

    // Inject the new document into the current page
    document.body.innerHTML = newDoc.documentElement.innerHTML;
}


// home-page pricing button logic

function handlePricing(){
  window.location.href = "Pricing_Page.html";
    // Create a new HTML document
    var newDoc = document.implementation.createHTMLDocument();

    // Create and append elements to the new document
    var html = newDoc.createElement("html");
    var body = newDoc.createElement("body");
    body.innerHTML = "";
    html.appendChild(body);
    newDoc.documentElement.appendChild(html);

    // Inject the new document into the current page
    document.body.innerHTML = newDoc.documentElement.innerHTML;
}

// pricing page in yearly plan button logic

let monthly = document.getElementById('monthly');
let yearly = document.getElementById('yearly');
let monthly_Plan = document.getElementById('monthly_Plan');
let yearly_Plan = document.getElementById('yearly_Plan');
document.getElementById('yearly_Plan').style.display = 'none';
document.getElementById('monthly').style.backgroundColor = '#f97316';
document.getElementById('monthly').style.color = 'white';
monthly.addEventListener('click',()=>{
  monthly_Plan.style.display = 'flex';
  yearly_Plan.style.display = 'none';
  monthly.style.backgroundColor = '#f97316';
  yearly.style.backgroundColor = '';
  monthly.style.color = 'white';
  yearly.style.color = '';

})

yearly.addEventListener('click',()=>{
  yearly_Plan.style.display = 'flex';
  monthly_Plan.style.display = 'none';
  yearly.style.backgroundColor = '#f97316';
  monthly.style.backgroundColor = '';
  yearly.style.color = 'white';
  monthly.style.color = '';

})


// signup and sign in button functionality in navigation

let sign_Up = document.getElementById('sign_Up');
let sign_In = document.getElementById('sign_In');
document.getElementById('sign_In').style.backgroundColor = '#f97316';
document.getElementById('sign_In').style.color = 'white'

sign_Up.addEventListener('click', () => {
  sign_Up.style.backgroundColor = '#f97316';
  sign_In.style.backgroundColor = '';
  sign_Up.style.color = 'white';
  sign_In.style.color = '';
})

sign_In.addEventListener('click', () => {
  sign_In.style.backgroundColor = '#f97316';
  sign_Up.style.backgroundColor = '';
  sign_In.style.color = 'white';
  sign_Up.style.color = '';
})


