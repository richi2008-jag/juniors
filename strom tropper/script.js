document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
 
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
 
    if(name===''||age===''||phone===''||street===''||city===''||state===''||zip===''||email===''){
        alert('Please enter you name ')
    }else{
        alert("your form has been sumbitted")
    }
 
    alert('Feedback submitted successfully!');
 });
 