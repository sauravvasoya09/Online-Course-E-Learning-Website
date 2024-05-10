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




// signup & login page slider

const slides = document.querySelectorAll('.slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        showSlide(currentIndex);