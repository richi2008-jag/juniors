document.getElementById9('myform').addEventListener('submit', function(e){
e.preventDefault();//prevent the form from summbitingt immdeditly
const firstname=document.getElementById('firstname').value;
const lastname=document.getElementById('astname').value;
const email=document.getElementById('email').value;
alert(firstname + ',' + lastname + ' ,' + email);

});
if(firstname===''|| lastname===''||email===''){
    alert('Please enter you name')
}else{
    alert("your form has been sumbitted")
}
