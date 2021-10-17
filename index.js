let dropdown = document.querySelectorAll('.dropdown');
let expandIcon = document.querySelectorAll('.expand-icon');
let con = document.querySelectorAll('.con');
let expandDiv = document.querySelectorAll('.expand-div');
let enquiryNav = document.querySelectorAll('.enquiry-nav');

for (let i = 0; i < enquiryNav.length; i++) {
  enquiryNav[i].addEventListener('click', () => {
    for (let j = 0; j < enquiryNav.length; j++) {
      enquiryNav[j].classList.remove('enquiry-form-nav-active');
    }
    enquiryNav[i].classList.add('enquiry-form-nav-active');
    if (i == 0) {
      document.querySelector('.enquiry-form-div').style.display = 'block';
      document.querySelector('.order-sample').style.display = 'none';
    } else {
      document.querySelector('.enquiry-form-div').style.display = 'none';
      document.querySelector('.order-sample').style.display = 'block';
    }
  });
}

for (let i = 0; i < con.length; i++) {
  con[i].addEventListener('click', function () {
    for (let j = 0; j < con.length; j++) {
      if (con[j].classList.contains('active')) {
        con[j].classList.remove('active');
      }
    }
    con[i].classList.add('active');
  });
}

for (let i = 0; i < expandDiv.length; i++) {
  expandDiv[i].addEventListener('click', function () {
    for (let j = 0; j < expandDiv.length; j++) {
      if (i != j) {
        dropdown[j].classList.remove('backdrop_dropdown-open');
        expandIcon[j].classList.remove('animation');
      }
    }
    dropdown[i].classList.toggle('backdrop_dropdown-open');
    expandIcon[i].classList.toggle('animation');
  });
}
