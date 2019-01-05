// Javascript for Timesheet Application

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCIFxptqsAxM4-0TZPc2-5gjUbTpn8xA-A",
    authDomain: "test-project-1-c763b.firebaseapp.com",
    databaseURL: "https://test-project-1-c763b.firebaseio.com",
    projectId: "test-project-1-c763b",
    storageBucket: "test-project-1-c763b.appspot.com",
    messagingSenderId: "597513869158"
};

firebase.initializeApp(config);

database = firebase.database();

// Initialize New Employee Variables
var employee = "";
var role = "";
var startDate = "";
var montlyRate = "";

console.log("values initialized")

// Add New Employee
$("#add-employee-btn").on("click", function(event) {

    event.preventDefault();

    console.log("button clicked");

    // Values from Add Employee Inputs
    employee = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();

    console.log(employee);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);

})
