document.getElementById("student-login-btn").addEventListener("click", function() {
    document.getElementById("student-login-btn").classList.add("selected");
    document.getElementById("teacher-login-btn").classList.remove("selected");
    // Code to switch to student login (if needed)
});

document.getElementById("teacher-login-btn").addEventListener("click", function() {
    document.getElementById("teacher-login-btn").classList.add("selected");
    document.getElementById("student-login-btn").classList.remove("selected");
    // Code to switch to teacher login (if needed)
});

document.getElementById("register-btn").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
});

document.getElementById("back-to-login-btn").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("register-container").style.display = "none";
});


var firebaseConfig = {
    apiKey: "AIzaSyCXAx1S2Wk0CjMoSNyDHBZvn3WiMhRmKKs",
    authDomain: "enigmatica-8be40.firebaseapp.com",
    projectId: "enigmatica-8be40",
    storageBucket: "enigmatica-8be40.appspot.com",
    messagingSenderId: "1049620114809",
    appId: "1:1049620114809:web:bc9c9d2ff32033655b53a8",
    measurementId: "G-XZ0TRN76T4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase authentication event listener
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in, redirect to another site or perform other actions here
        console.log("User is signed in:", user.email);
        window.location.href = "dash.html"; // Replace with the URL you want to redirect to
    } else {
        // User is signed out
        console.log("User is signed out");
    }
});

// Clear authentication state when the page is loaded
window.onload = function () {
    firebase.auth().signOut().then(function () {
        console.log("User signed out on page load");
    }).catch(function (error) {
        console.error("Error signing out on page load:", error.message);
    });
};

// Event listener for login form
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            // Successful login, the onAuthStateChanged event will handle the redirection
            console.log("Login successful:", userCredential.user.email);
        })
        .catch(function (error) {
            // Handle login error
            console.error("Login error:", error.message);
        });
});

// Event listener for registration form
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const regEmail = document.getElementById("reg-email").value;
    const regPassword = document.getElementById("reg-password").value;

    firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
        .then(function (userCredential) {
            // Successful registration, the onAuthStateChanged event will handle the redirection
            console.log("Registration successful:", userCredential.user.email);
        })
        .catch(function (error) {
            // Handle registration error
            console.error("Registration error:", error.message);
        });
});

// Your existing code...
