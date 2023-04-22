let form = document.form,
    fname = form.name,
    email = form.email,
    addr = form.address,
    gender = form.gender;


console.log(fname);
//keyboard event
form.addEventListener("submit", function(event){
    if(fname.value.length == 0) {
        fname.nextElementSibling.innerText = "Full name is Empty.";
        event.preventDefault();
    }
    else {
        fname.nextElementSibling.innerText = "";
    }
    if(email.value.length == 0) {
        email.nextElementSibling.innerText = "Email is Empty.";
        event.preventDefault();
    }
    else {
        email.nextElementSibling.innerText = "";
    }
});

//keyboard event
email.addEventListener("keyup", function(e){
    let indexAtTheRate = this.value.indexOf("@"), 
        indexDot = this.value.indexOf(".");
    if(indexAtTheRate == -1){
        this.nextElementSibling.innerText = "One '@' symbol is required!";
    }else if(indexDot == -1){
        this.nextElementSibling.innerText = "One '.' symbol is required!";
    } else if(indexAtTheRate != this.value.lastIndexOf("@")){
        this.nextElementSibling.innerText = "'@' symbol cann't be two or more!";
    } else {
        this.nextElementSibling.innerText = " ";
    }
});