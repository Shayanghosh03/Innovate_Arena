let text01 = "<b>🎯 Our Mission</b><br>Our mission is to create a thriving hub where gamers and developers come together to celebrate gaming culture. We aim to provide engaging content, organize thrilling competitions, and foster a collaborative environment where ideas turn into reality."

let text02 = "<br><br><b>🕹️ What We Offer</b><br>🏆 Competitive Tournaments – Compete in exciting tournaments and showcase your skills.<br>🧠 Workshops & Game Dev Sessions – Learn game development, design, and AI-driven techniques.<br>🎥 Gaming Reviews & Insights – Stay updated with the latest game releases and trends.<br>🤝 Community & Collaboration – Connect with like-minded individuals and collaborate on projects.<br><br><b>💡 Why GameHaven?</b><br>We’re not just about games – we’re about creating a space where creativity, strategy, and teamwork thrive. GameHaven is built by gamers, for gamers, ensuring that every experience resonates with our community.."

let Login = false;
let pendingGameUrl = null;
function alertnone () {
    window.open("error.html");
}

function loginstatus () {
    Login = !Login;
    let activeonlogin = document.getElementsByClassName("activeonlogin");
    let activeonlogout = document.getElementsByClassName("activeonlogout");

    if (Login) {
        for (let i = 0; i < activeonlogin.length; i++) {
            let element = activeonlogin[i];
            element.classList.remove("invis");
            element.classList.add("vis");
        }
        for (let i = 0; i < activeonlogout.length; i++) {
            let element = activeonlogout[i];
            element.classList.remove("vis");
            element.classList.add("invis");
        }
        alert("You have successfully logged in.");
    }
    else {
        for (let i = 0; i < activeonlogin.length; i++) {
            let element = activeonlogin[i];
            element.classList.remove("vis");
            element.classList.add("invis");
        }
        for (let i = 0; i < activeonlogout.length; i++) {
            let element = activeonlogout[i];
            element.classList.remove("invis");
            element.classList.add("vis");
        }
        alert("You have successfully logged out.");
    }
}

function playnow(gameUrl) {
    // First check login
    if (Login !== true) {
        pendingGameUrl = gameUrl || "";
        alert("Please login first to play this game.");
        loginside(); // Open login form
        return;
    }

    // After login, check if game URL exists
    if (!gameUrl) {
        alertnone(); // No game available
        return;
    }

    // Open game if logged in and URL exists
    window.open(gameUrl, "_blank");
}

function submit () {
    var field01 = document.getElementById("field01").value
    var field02 = document.getElementById("field02").value
    var field03 = document.getElementById("field03").value

    var element01 = document.getElementById("contactwarning01");
    var element02 = document.getElementById("contactwarning02");
    var element03 = document.getElementById("contactwarning03");
    
    element01.style.visibility = "hidden";
    element02.style.visibility = "hidden";
    element03.style.visibility = "hidden";

    if ((field01 == "") || (field02 == "") || (field03 == "")) {
        if (field01 == "")
            element01.style.visibility = "visible";
        if (field02 == "")
            element02.style.visibility = "visible";
        if (field03 == "")
            element03.style.visibility = "visible";
    }
    else {
        document.getElementById("field01").value = "";
        document.getElementById("field02").value = "";
        document.getElementById("field03").value = "";
        alert("Your message has been sent successfully.");
    }
}

function readmore () {
    let image = document.getElementById("aboutimg");
    let paragraph = document.getElementById("aboutparagraph");
    let readmore = document.getElementById("readmore");
    let readless = document.getElementById("readless");

    image.style.display = "none";
    readmore.style.display = "none"
    readless.style.display = "block";
    paragraph.innerHTML = text01 + text02;
}

function readless () {
    let image = document.getElementById("aboutimg");
    let paragraph = document.getElementById("aboutparagraph");
    let readmore = document.getElementById("readmore");
    let readless = document.getElementById("readless");

    image.style.display = "block";
    readmore.style.display = "block"
    readless.style.display = "none";
    paragraph.innerHTML = text01;
}

function loginside () {
    let signup = document.getElementById("signupside");
    let login = document.getElementById("loginside");
    let page = document.getElementById("absolute");

    signup.style.display = "none";
    login.style.display = "block";
    page.style.display = "flex";

    var mess = document.getElementById("message");
    mess.style.visibility = "hidden";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function signupside () {
    let signup = document.getElementById("signupside");
    let login = document.getElementById("loginside");
    let page = document.getElementById("absolute");

    signup.style.display = "block";
    login.style.display = "none";
    page.style.display = "flex";

    var mess01 = document.getElementById("mess01");
    var mess02 = document.getElementById("mess02");
    var mess03 = document.getElementById("mess03");
    var mess04 = document.getElementById("mess04");

    mess01.style.visibility = "hidden";
    mess02.style.visibility = "hidden";
    mess03.style.visibility = "hidden";
    mess04.style.visibility = "hidden";

    document.getElementById("sf01").value = "";
    document.getElementById("sf02").value = "";
    document.getElementById("sf03").value = "";
    document.getElementById("sf04").value = "";
}

function closepage () {
    var element = document.getElementById("absolute");
    element.style.display = "none";
}

function login () {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if ((user === "gamehaven") && (pass === "123456")) {
        closepage();
        loginstatus();

        if (pendingGameUrl) {
            window.open(pendingGameUrl, "_blank");
            pendingGameUrl = null;
        }
    }
    else {
        var element = document.getElementById("message");
        element.innerHTML = "Incorrect Username or Password!";
        element.style.visibility = "visible";
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function signup () {
    var valid = true;
    var sf01 = document.getElementById("sf01").value;
    var sf02 = document.getElementById("sf02").value;
    var sf03 = document.getElementById("sf03").value;
    var sf04 = document.getElementById("sf04").value;

    var mess01 = document.getElementById("mess01");
    var mess02 = document.getElementById("mess02");
    var mess03 = document.getElementById("mess03");
    var mess04 = document.getElementById("mess04");

    mess01.style.visibility = "hidden";
    mess02.style.visibility = "hidden";
    mess03.style.visibility = "hidden";
    mess04.style.visibility = "hidden";

    if (sf03.length < 8) {
        mess03.innerHTML = "Password must be at least 8 characters."
        mess03.style.visibility = "visible";
        valid = false;
    }

    if (sf03 != sf04) {
        mess04.innerHTML = "Confirm Password doesn't match."
        mess04.style.visibility = "visible";
        valid = false;
    }

    if ((sf01 == "") || (sf02 == "") || (sf03 == "") || (sf04 == "")) {
        valid = false;
        if (sf01 == "") 
            mess01.style.visibility = "visible";
        if (sf02 == "")
            mess02.style.visibility = "visible";
        if (sf03 == "") {
            mess03.innerHTML = "This field is required."
            mess03.style.visibility = "visible";
        }
        if (sf04 == "") {
            mess04.innerHTML = "This field is required."
            mess04.style.visibility = "visible";
        }
    }

    if (valid) {
        closepage();
        alert("You have signed up successfully. Please login.");
    }
}

function revealpass () {
    var element = document.getElementById("message");
    element.innerHTML = "Username: gamehaven | Password: 123456";
    element.style.visibility = "visible";
}
