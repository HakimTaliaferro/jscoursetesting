function submitFeedback() {
    alert('Thank you for your valuable feedback')
    const submitButton=document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    const submitButton=document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;

    document.getElementById('userInfo').style.display = 'block';
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          submitFeedback();
        }
      });
    
}

