// Select the form element
const studentForm = document.getElementById("studentForm");

// Select the table body
const tableBody = document.getElementById("tableBody");
// Listen for the form submit event
studentForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get valu
    // es from all input fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const state = document.getElementById("state").value.trim();
    const country = document.getElementById("country").value.trim();

    // Get the selected gender radio button
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validate that all fields are filled
    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        address === "" ||
        pincode === "" ||
        state === "" ||
        country === "" ||
        !gender
    ) {
        alert("Please fill all the fields.");
        return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Add data into the row
    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender.value}</td>
        <td>${state}</td>
        <td>${country}</td>
    `;

    // Append the row to the table body
    tableBody.appendChild(newRow);

    // Clear all form fields after successful submission
    studentForm.reset();

});