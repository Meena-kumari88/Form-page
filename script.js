const form = document.getElementById('userForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;
    
   

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const conformpassword = document.getElementById('conformpassword').value;

    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validation
    if (!namePattern.test(fname)) {
        document.getElementById('fnameError').textContent = 'First name must contain only alphabets';
        valid = false;
    }
    if (!namePattern.test(lname)) {
        document.getElementById('lnameError').textContent = 'Last name must contain only alphabets';
        valid = false;
    }
    if (isNaN(age) || age <= 0) {
        document.getElementById('ageError').textContent = 'Invalid age';
        valid = false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email is not valid';
        valid = false;
    }
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must contain at least one letter, one number, and one special character';
        valid = false;
    }
    if (password !== conformpassword) {
        document.getElementById('conformpasswordError').textContent = 'Passwords do not match';
        valid = false;
    }
    if (phone.length < 10 || phone.length > 12 || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be between 10 and 12 digits';
        valid = false;
    }

    if (valid) {
        alert('Form Submitted Successfully');
        form.reset();
    }
});
