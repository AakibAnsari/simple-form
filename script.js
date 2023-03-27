const btn = document.querySelector(".btn");

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click');
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    // localStorage.setItem('fname', fname);
    // localStorage.setItem('lname', lname);
    // console.log(localStorage.getItem('fname'));
    // console.log(localStorage.getItem('lname'));
    let myobj={
        firstName: fname,
        lastName: lname,
        Email: email
    };
    let myobjserializeed= JSON.stringify(myobj);
    localStorage.setItem('myobj', myobjserializeed);
    console.log(myobjserializeed);
});

const btn1 = document.querySelector(".btn");

btn1.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hover Hello</h1>';
});

const btn2 = document.querySelector(".btn");

btn2.addEventListener('mouseout', (e) =>{
    e.preventDefault();
    document.querySelector('.items').firstElementChild.innerHTML='<h1>MouseOut Hello</h1>';
});