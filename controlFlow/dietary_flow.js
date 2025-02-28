/*
If the person is an Employee, they are authorized to have access to "Dietary Services".

If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.

If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.

If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.
*/

let userRole = "Employee";
let accessLevel;

if (userRole === "Employee") {
    accessLevel = "Dietary Services";
} else if (userRole === "Enrolled Member") {
    accessLevel = "Dietary Services and one-on-one interaction with a dietician.";
} else if (userRole === "Subscriber") {
    accessLevel = "Partial access to facilitate Dietary Services only.";
} else if (userRole === "Non-Subscriber") {
    accessLevel = "Enroll or subscribe to access Dietary Services.";
} else {
    accessLevel = "No access granted.";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "Employee") {
        userMessage = "Welcome, Employee!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "Non-Subscriber";
let userCategory;

switch (userType) {
    case "Employee":
        userCategory = "Employee";
        break;
    case "Enrolled Member":
        userCategory = "Enrolled Member";
        break;
    case "Subscriber":
        userCategory = "Subscriber";
        break;
    case "Non-Subscriber":
        userCategory = "Non-Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus;

if (isAuthenticated) {
    authenticationStatus = "Authenticated";
} else {
    authenticationStatus = "Not authenticated";
}

console.log("Authentication Status:", authenticationStatus);
