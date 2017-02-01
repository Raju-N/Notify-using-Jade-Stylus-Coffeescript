window.onload = function() {
  var button, carousel, email, myIndex, name, phone;
  myIndex = 0;
  carousel = function() {
    i;
    var i, j, ref, slides;
    slides = document.getElementsByClassName('animate-fading');
    for (i = j = 0, ref = slides.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      slides[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > slides.length) {
      myIndex = 1;
    }
    slides[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
  };
  carousel();
  name = (document.getElementsByName('user'))[0];
  email = (document.getElementsByName('email'))[0];
  phone = (document.getElementsByName('phone'))[0];
  button = (document.getElementsByClassName('mybtn'))[0];
  button.addEventListener('click', function(event) {
    var emailValue, emailpattern, nameValue, namepattern, phoneValue, phonepattern;
    event.preventDefault();
    nameValue = name.value.trim();
    emailValue = email.value;
    phoneValue = phone.value;
    namepattern = /^[a-zA-Z\s]+$/;
    phonepattern = /^[7-9]{1}[0-9]{9}$/;
    emailpattern = /^\w{3,}@\w{2,5}\.\w{3}$/;
    if (!namepattern.test(nameValue)) {
      name.style.border = '1px solid red';
    } else {
      name.style.border = 'initial';
    }
    if (!emailpattern.test(emailValue)) {
      email.style.border = '1px solid red';
    } else {
      email.style.border = 'initial';
    }
    if (!phonepattern.test(phoneValue)) {
      phone.style.border = '1px solid red';
    } else {
      phone.style.border = 'initial';
    }
  });
};