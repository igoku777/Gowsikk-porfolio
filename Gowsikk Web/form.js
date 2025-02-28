
let url='https://script.google.com/macros/s/AKfycbzOTp4VUKMfWXuw7wQBNV5U6nMEuflIkUoDb6Y2J0k3P88-4clzJ558t7NlXf6CgS08PQ/exec';
let form=document.querySelector('.contact-form');
form.addEventListener("submit",(e)=>{
    e.target.btn1.innerHTML="Submitting....";
    let d=new FormData(form);
    fetch(url,{
    method: "POST",
    body:d
}).then((res)=>res.text())
.then((finalRes)=>{
    e.target.btn1.innerHTML="Submit";
    document.getElementById("res").innerHTML=finalRes;
    form.reset();
    setTimeout(()=>{
        document.getElementById("res").innerHTML='';
    },4000)
})
e.preventDefault();
})