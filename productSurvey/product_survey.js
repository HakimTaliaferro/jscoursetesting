function submitFeedback() {
    alert('Thank you for your valuable feedback');

    // Retrieve values from form fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperience').value;

    // Display values inside corresponding <span> elements
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperience').innerText = userExperienceText;

    // Show the user information section
    document.getElementById('userInfo').style.display = 'block';
}

// Attach event listener to the submit button 
document.getElementById('submitBtn').addEventListener('click', submitFeedback);

// Add "Enter" key event listener 
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
