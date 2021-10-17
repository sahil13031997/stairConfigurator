let dropdown = document.querySelectorAll('.dropdown');
let expandIcon = document.querySelectorAll('.expand-icon');
let con = document.querySelectorAll('.con');
let built = document.querySelector('.build-details');
let summary = document.querySelector('.summary');
let clear = document.querySelector('.clear-div');
let cancel = document.querySelector('.summary-cancel');
let email = document.querySelector('.email');
let print = document.querySelector('.print');
let printDiv = document.querySelector('.print-div');
let expandDiv = document.querySelectorAll('.expand-div');
let colorW1 = document.querySelectorAll('.colorW1');

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

function displayRadioValue() {
  var ele = document.querySelectorAll('.glass-front-color');
  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = 'radio')) {
      if (ele[i].checked) {
        // var col = 'Color Value: ' + ele[i].value;
        document.getElementById('result2').innerHTML = 'FINISHES | COLORS: GLASS FRONT = ' + ele[i].value;
        return 'FINISHES | COLORS: GLASS FRONT=' + ele[i].value;
      }
    }
  }
}
function displayRadioValue2() {
  for (i = 0; i < colorW1.length; i++) {
    if ((colorW1[i].type = 'radio')) {
      if (colorW1[i].checked) {
        // var col = 'Color Value: ' + ele[i].value;
        document.getElementById('result3').innerHTML = 'FINISHES | COLORS: WORKTOP = ' + colorW1[i].value;
        return 'FINISHES | COLORS: WORKTOP=' + colorW1[i].value;
      }
    }
  }
}
function displayDimenstion() {
  let dim = document.querySelector('.active p').innerHTML;
  document.getElementById('result').innerHTML = 'Configuration:' + dim;
  return 'Model: ' + dim;
}

built.addEventListener('click', function () {
  summary.classList.toggle('backdrop_dropdown-open');
  clear.classList.toggle('summary');
  displayRadioValue();
  displayRadioValue2();
  displayDimenstion();
});

cancel.addEventListener('click', function () {
  summary.classList.toggle('backdrop_dropdown-open');
  clear.classList.toggle('summary');
});

email.addEventListener('click', function () {
  let dim = displayDimenstion();
  let col2 = displayRadioValue2();
  let col = displayRadioValue();
  if (dim != 'Model: No item selected') {
    dim = dim.replace(/\s+/g, '');
  }
  if (col == undefined) {
    col = 'FINISHES | COLORS: GLASS FRONT = No color Selected';
  }
  if (col2 == undefined) {
    col2 = 'FINISHES | COLORS: WORKTOP = No color Selected';
  }
  window.open(`mailto:?subject=CONFIGURATION&body=${dim}%0D${col}%0D%0A${col2}`);
});

print.addEventListener('click', function () {
  displayRadioValue();
  displayRadioValue2();
  displayDimenstion();
  summary.classList.add('backdrop_dropdown-open');
  clear.classList.add('summary');
  window.print();
});
