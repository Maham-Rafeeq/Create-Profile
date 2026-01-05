let name=document.getElementById("name");
let age=document.getElementById("age");
let edu=document.getElementById("education");
let nation=document.getElementById("nationality");
let display1=document.getElementById("display1");
let display2=document.getElementById("display2");
let display3=document.getElementById("display3");
let display4=document.getElementById("display4");
// funtion on btn on click
  function  createprofile(){
   let profile ={
    uname:name.value,
    age:age.value,
    education:edu.value,
    nationality:nation.value
   }
   localStorage.setItem('profile', JSON.stringify(profile));
   card(profile);
  }
  function card(profile){
    display1.innerHTML = profile.uname;
    display2.innerHTML = profile.age;
    display3.innerHTML = profile.education;
    display4.innerHTML = profile.nationality;
  }

// Load profile if on profile.html
if (window.location.pathname.includes('profile.html')) {
  let savedProfile = localStorage.getItem('profile');
  if (savedProfile) {
    let profile = JSON.parse(savedProfile);
    card(profile);
  }
}
  