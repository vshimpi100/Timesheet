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

var database = firebase.database();

// Initialize New Employee Variables
var employee = "";
var role = "";
var startDate = "";
var monthlyRate = "";

console.log("values initialized")

// Add New Employee
$("#add-employee-btn").on("click", function(event) {

    event.preventDefault();

    console.log("button clicked");

    // Values from Add Employee Inputs
    employee = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = moment($("#start-input").val().trim(),"MM/DD/YYYY").format("MM/DD/YYYY");
    monthlyRate = $("#rate-input").val().trim();

    console.log(employee);
    console.log(role);
    console.log(startDate);
    console.log(monthlyRate);

    $("#employee-name-input").val('');
    $("#role-input").val('');
    $("#start-input").val('');
    $("#rate-input").val('');

    database.ref().push({
        employee: employee,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    });

})

database.ref().on("child_added",function(childSnapshot){
    var newRow = $("<tr>");
    newRow.append("<td>"+childSnapshot.val().employee+"</td>");
    newRow.append("<td>"+childSnapshot.val().role+"</td>");
    newRow.append("<td>"+childSnapshot.val().startDate+"</td>");

    var monthsWorked = 0;

    newRow.append("<td>"+monthsWorked+"</td>");
    newRow.append("<td>"+childSnapshot.val().monthlyRate+"</td>");

    var totalBilled = monthsWorked*monthlyRate;

    newRow.append("<td>"+totalBilled+"</td>")

    $("#employee-table").append(newRow)
})
