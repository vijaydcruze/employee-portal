// ============================================================================
// EMPLOYEE MANAGEMENT CONSOLE SYSTEM (JavaScript)
// ============================================================================

// ==============================
// TASK 1: Employee Registration
// ==============================
console.log("=================== TASK 1: Employee Registration ===================");

let employeeName = "naveen";
const employeeID = "EMP101";
const department = "Development";
let salary = 50000;
const isPermanent = true;

console.log("Employee Details");
console.log("----------------");
console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeID}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ${salary}`);
console.log(`Permanent  : ${isPermanent}`);

// ==============================
// TASK 2: Employee Skills
// ==============================
console.log("\n=================== TASK 2: Employee Skills ===================");

const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log(`First Skill  : ${skills[0]}`);
console.log(`Third Skill  : ${skills[2]}`);
console.log(`Last Skill   : ${skills[skills.length - 1]}`);
console.log(`Total Skills: ${skills.length}`);

// ==============================
// TASK 3: Company Object
// ==============================
console.log("\n=================== TASK 3: Company Object ===================");

const company = {
    companyName: "Stackly IT",
    location: "Coimbatore",
    employees: 150,
    technologies: ["Python", "JavaScript", "React", "Node.js", "AWS", "Docker"]
};

console.log(`Company Name       : ${company.companyName}`);
console.log(`Location           : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies: ${company.technologies.length}`);

// ==============================
// TASK 4: Salary Calculator
// ==============================
console.log("\n=================== TASK 4: Salary Calculator ===================");

let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log(`Basic Salary : ${basicSalary}`);
console.log(`Bonus        : ${bonus}`);
console.log(`Total Salary: ${totalSalary}`);
console.log(`Tax (10%)    : ${tax}`);
console.log(`Final Salary: ${finalSalary}`);

// ==============================
// TASK 5: Attendance Checker
// ==============================
console.log("\n=================== TASK 5: Attendance Checker ===================");

let attendance = 92;

let examStatus = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log(`Attendance : ${attendance}%`);
console.log(`Exam Status: ${examStatus}`);

// ==============================
// TASK 6: Login Verification
// ==============================
console.log("\n=================== TASK 6: Login Verification ===================");

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// ==============================
// TASK 7: Product Billing
// ==============================
console.log("\n=================== TASK 7: Product Billing ===================");

const productName = "Laptop";
const productPrice = 45000;
const quantity = 2;
const totalBill = productPrice * quantity;

console.log(`Product   : ${productName}`);
console.log(`Price     : ${productPrice}`);
console.log(`Quantity  : ${quantity}`);
console.log(`Total     : ${totalBill}`);

// ==============================
// TASK 8: Increment & Decrement
// ==============================
console.log("\n=================== TASK 8: Increment & Decrement ===================");

let visitors = 100;

console.log("Initial Value: " + visitors);

// Pre Increment (++variablename): Increments first, then returns the new value
console.log("\n--- Pre Increment (++visitors) ---");
console.log("Before: " + visitors);
let preIncResult = ++visitors;
console.log("Result: " + preIncResult);
console.log("After: " + visitors);
// Explanation: ++visitors first increments visitors from 100 to 101, then assigns to preIncResult

// Post Increment (variablename++): Returns current value first, then increments
console.log("\n--- Post Increment (visitors++) ---");
console.log("Before: " + visitors);
let postIncResult = visitors++;
console.log("Result: " + postIncResult);
console.log("After: " + visitors);
// Explanation: visitors++ returns 101 (current value), then increments to 102

// Pre Decrement (--variablename): Decrements first, then returns the new value
console.log("\n--- Pre Decrement (--visitors) ---");
console.log("Before: " + visitors);
let preDecResult = --visitors;
console.log("Result: " + preDecResult);
console.log("After: " + visitors);
// Explanation: --visitors first decrements visitors from 102 to 101, then assigns to preDecResult

// Post Decrement (variablename--): Returns current value first, then decrements
console.log("\n--- Post Decrement (visitors--) ---");
console.log("Before: " + visitors);
let postDecResult = visitors--;
console.log("Result: " + postDecResult);
console.log("After: " + visitors);
// Explanation: visitors-- returns 101 (current value), then decrements to 100

// ==============================
// TASK 9: Comparison Checker
// ==============================
console.log("\n=================== TASK 9: Comparison Checker ===================");

console.log("\n--- Loose Equality (==) ---");
console.log('10 == "10"  --> ' + (10 == "10")); 
// true - converts string "10" to number 10, then compares

console.log("\n--- Strict Equality (===) ---");
console.log('10 === "10" --> ' + (10 === "10")); 
// false - compares number 10 with string "10" without type conversion

console.log("\n--- Loose Inequality (!=) ---");
console.log('20 != "20"  --> ' + (20 != "20")); 
// false - converts string "20" to number 20, then compares (both are equal)

console.log("\n--- Strict Inequality (!==) ---");
console.log('20 !== "20" --> ' + (20 !== "20")); 
// true - compares number 20 with string "20", they are different types

console.log("\n--- Less Than (<) ---");
console.log('5 < 10      --> ' + (5 < 10)); 
// true - 5 is less than 10

console.log("\n--- Greater Than or Equal (>=) ---");
console.log('15 >= 20    --> ' + (15 >= 20)); 
// false - 15 is not greater than or equal to 20

console.log("\n--- Less Than or Equal (<=) ---");
console.log('100 <= 100  --> ' + (100 <= 100)); 
// true - 100 is equal to 100

// ==============================
// TASK 10: User Interaction
// ==============================
console.log("\n=================== TASK 10: User Interaction ===================");



const simulatedName = "naveen";
const simulatedAge = "25";
const simulatedConfirm = true;

console.log("Simulated User Interaction (for Node.js):");
console.log("Step 1: Ask Employee Name");
console.log(`Input: ${simulatedName}`);

console.log("\nStep 2: Ask Employee Age");
console.log(`Input: ${simulatedAge}`);

console.log("\nStep 3: Ask 'Do you want to join our company?'");
console.log(`User clicked: ${simulatedConfirm ? "OK" : "Cancel"}`);

if (simulatedConfirm) {
    console.log(`\nWelcome ${simulatedName}!`);
} else {
    console.log("\nThank You");
}



// ==============================
// FINAL CHALLENGE: Mini Employee Portal
// ==============================
console.log("\n");
console.log("================================================================");
console.log("                    EMPLOYEE PORTAL");
console.log("================================================================");

// Employee Object
const employee = {
    name: "naveen",
    id: "EMP101",
    department: "Development",
    experience: 3,
    salary: 50000,
    attendance: 92,
    loginStatus: "Success"
};

// Skills Array
const employeeSkills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

// Salary Calculation
let empBasicSalary = employee.salary;
let empBonus = 5000;
let empTotalSalary = empBasicSalary + empBonus;
let empFinalSalary = empTotalSalary; // No tax for final display

// Attendance Check (Ternary Operator)
let isEligible = employee.attendance >= 75 ? "Eligible" : "Not Eligible";

// Login Verification (Using &&)
let loginUsername = "admin";
let loginPassword = "12345";
let loginStatus = (loginUsername === "admin" && loginPassword === "12345") ? "Success" : "Failed";

// Experience Check (Using Ternary)
let experienceLevel = employee.experience >= 3 ? "Experienced" : "Fresher";

// Bonus Calculation
let bonusAmount = employee.experience >= 3 ? 5000 : 2000;

// Company Object for Final
const companyInfo = {
    name: "Stackly IT",
    location: "Coimbatore"
};

// Final Console Output using Template Strings
console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID   : ${employee.id}`);
console.log(`Department    : ${employee.department}`);
console.log(`Experience    : ${employee.experience} Years`);
console.log(`Salary        : ₹${employee.salary}`);
console.log(`Bonus         : ₹${bonusAmount}`);
console.log(`Final Salary  : ₹${empFinalSalary}`);
console.log(`Skills        : ${employeeSkills.join(", ")}`);
console.log(`Attendance    : ${employee.attendance}%`);
console.log(`Exam Status   : ${isEligible}`);
console.log(`Login Status  : ${loginStatus}`);
console.log(`Company       : ${companyInfo.name}`);
console.log(`Location      : ${companyInfo.location}`);

console.log("================================================================");
console.log("                    PORTAL COMPLETE");
console.log("================================================================");


console.log("\n✅ All Tasks Completed Successfully!");