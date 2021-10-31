let dropdown = document.querySelectorAll(".dropdown");
let expandIcon = document.querySelectorAll(".expand-icon");
let con = document.querySelectorAll(".con");
let con2 = document.querySelectorAll(".con2");
let con3 = document.querySelectorAll(".con3");
let con4 = document.querySelectorAll(".con4");

let expandDiv = document.querySelectorAll(".expand-div");
let enquiryNav = document.querySelectorAll(".enquiry-nav");

for (let i = 0; i < enquiryNav.length; i++) {
  enquiryNav[i].addEventListener("click", () => {
    for (let j = 0; j < enquiryNav.length; j++) {
      enquiryNav[j].classList.remove("enquiry-form-nav-active");
    }
    enquiryNav[i].classList.add("enquiry-form-nav-active");
    if (i == 0) {
      document.querySelector(".enquiry-form-div").style.display = "block";
      document.querySelector(".order-sample").style.display = "none";
    } else {
      document.querySelector(".enquiry-form-div").style.display = "none";
      document.querySelector(".order-sample").style.display = "block";
    }
  });
}
for (let i = 0; i < con.length; i++) {
  con[i].addEventListener("click", function () {
    for (let j = 0; j < con.length; j++) {
      if (con[j].classList.contains("active")) {
        con[j].classList.remove("active");
      }
    }
    con[i].classList.add("active");
  });
}
for (let i = 0; i < con2.length; i++) {
  con2[i].addEventListener("click", function () {
    for (let j = 0; j < con2.length; j++) {
      if (con2[j].classList.contains("active")) {
        con2[j].classList.remove("active");
      }
    }
    con2[i].classList.add("active");
  });
}
for (let i = 0; i < con3.length; i++) {
  con3[i].addEventListener("click", function () {
    for (let j = 0; j < con.length; j++) {
      if (con3[j].classList.contains("active")) {
        con3[j].classList.remove("active");
      }
    }
    con3[i].classList.add("active");
  });
}
for (let i = 0; i < con4.length; i++) {
  con4[i].addEventListener("click", function () {
    for (let j = 0; j < con.length; j++) {
      if (con4[j].classList.contains("active")) {
        con4[j].classList.remove("active");
      }
    }
    con4[i].classList.add("active");
  });
}

for (let i = 0; i < expandDiv.length; i++) {
  expandDiv[i].addEventListener("click", function () {
    dropdown[i].classList.toggle("backdrop_dropdown-open");
    expandIcon[i].classList.toggle("animation");
  });
}
germanLang();
function germanLang() {
  dropdown[0].classList.remove("backdrop_dropdown-open");
  document.querySelector(".selected-lang").innerHTML =
    "<img class='flag-img' src='https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg' alt=''/>German";
  let concrete = document.querySelectorAll(".concrete");
  for (let i = 0; i < concrete.length; i++) {
    concrete[i].innerHTML = "Beton";
  }
  let bluesteel = document.querySelectorAll(".bluesteel");
  for (let i = 0; i < bluesteel.length; i++) {
    bluesteel[i].innerHTML = "Bluesteel";
  }
  let beech = document.querySelectorAll(".beech");
  for (let i = 0; i < beech.length; i++) {
    beech[i].innerHTML = "Buche";
  }

  let canyon = document.querySelectorAll(".canyon");
  for (let i = 0; i < canyon.length; i++) {
    canyon[i].innerHTML = "Canyon";
  }
  let cognac = document.querySelectorAll(".cognac");
  for (let i = 0; i < cognac.length; i++) {
    cognac[i].innerHTML = "Cognac";
  }
  let country = document.querySelectorAll(".country");
  for (let i = 0; i < country.length; i++) {
    country[i].innerHTML = "Country";
  }
  let oak = document.querySelectorAll(".oak");
  for (let i = 0; i < oak.length; i++) {
    oak[i].innerHTML = "Eiche";
  }
  let iceberg = document.querySelectorAll(".iceberg");
  for (let i = 0; i < iceberg.length; i++) {
    iceberg[i].innerHTML = "Iceberg";
  }
  let loft = document.querySelectorAll(".loft");
  for (let i = 0; i < loft.length; i++) {
    loft[i].innerHTML = "Loft";
  }

  let macchiato = document.querySelectorAll(".macchiato");
  for (let i = 0; i < macchiato.length; i++) {
    macchiato[i].innerHTML = "Macchiato";
  }
  let moor_oak = document.querySelectorAll(".moor-oak");
  for (let i = 0; i < moor_oak.length; i++) {
    moor_oak[i].innerHTML = "Mooreiche";
  }
  let mustang = document.querySelectorAll(".mustang");
  for (let i = 0; i < mustang.length; i++) {
    mustang[i].innerHTML = "Mustang";
  }
  let nordic = document.querySelectorAll(".nordic");
  for (let i = 0; i < nordic.length; i++) {
    nordic[i].innerHTML = "Nordic";
  }

  let terra = document.querySelectorAll(".terra");
  for (let i = 0; i < terra.length; i++) {
    terra[i].innerHTML = "Terra";
  }

  let vermont = document.querySelectorAll(".vermont");
  for (let i = 0; i < vermont.length; i++) {
    vermont[i].innerHTML = "Vermont";
  }

  let vintage = document.querySelectorAll(".vintage");
  for (let i = 0; i < vintage.length; i++) {
    vintage[i].innerHTML = "Vintage";
  }
  let wenge = document.querySelectorAll(".wenge");
  for (let i = 0; i < wenge.length; i++) {
    wenge[i].innerHTML = "Wenge";
  }

  let castle = document.querySelectorAll(".castle");
  for (let i = 0; i < castle.length; i++) {
    castle[i].innerHTML = "Castle";
  }
  let havanna = document.querySelectorAll(".havanna");
  for (let i = 0; i < havanna.length; i++) {
    havanna[i].innerHTML = "Havanna";
  }

  let toscana = document.querySelectorAll(".toscana");
  for (let i = 0; i < toscana.length; i++) {
    toscana[i].innerHTML = "Toscana";
  }
  let white = document.querySelectorAll(".white");
  for (let i = 0; i < white.length; i++) {
    white[i].innerHTML = "Weiss";
  }

  let black = document.querySelectorAll(".black");
  for (let i = 0; i < black.length; i++) {
    black[i].innerHTML = "Schwarz";
  }
  let jasmin = document.querySelectorAll(".jasmin");
  for (let i = 0; i < jasmin.length; i++) {
    jasmin[i].innerHTML = "Jasmin";
  }
  let platin = document.querySelectorAll(".platin");
  for (let i = 0; i < platin.length; i++) {
    platin[i].innerHTML = "Platin";
  }
  let aluminium = document.querySelectorAll(".aluminium-brushed");
  for (let i = 0; i < aluminium.length; i++) {
    aluminium[i].innerHTML = "Aluminium";
  }
  document.querySelector(".without-riser").innerHTML = "Ohne Stellstufen";
  document.querySelector(".step").innerHTML = "STUFE";
  document.querySelector(".riser").innerHTML = "STELLSTUFE";
  document.querySelector(".stringer").innerHTML = "WANGE";
  document.querySelector(".floor").innerHTML = "BODEN";
  document.querySelector(".enquiry").innerHTML = "ANFRAGE";
  document.querySelector(".enquiry-details").innerHTML =
    "Gerne beraten wir Sie, wenn Sie Fragen zu unseren Laminatstufen haben. Senden Sie uns einfach eine E-Mail mit Ihren Fragen an: <a href='mailto:office2@stiege.com' style='text-decoration:underline'>office2@stiege.com</a> oder rufen Sie uns unter der folgenden Nummer an: +43 677 635 242 00.";
  document.querySelector(".enqiury-now").innerHTML = "JETZT";
  document.querySelector(".order-sample-text").innerHTML =
    "Sie können bei uns im Onlineshop Stufen- und Stellstufenmuster bestellen. Klicken Sie einfach auf den unteren Button. Sie werden dann direkt in unseren Onlineshop weitergeleitet.";
  document.querySelector(".order-samples").innerHTML = "MUSTER BESTELLEN";
  document.querySelector(".order-samp").innerHTML = "MUSTER BESTELLEN";
}

function frenchLang() {
  dropdown[0].classList.remove("backdrop_dropdown-open");
  document.querySelector(".selected-lang").innerHTML =
    "<img class='flag-img' src='https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg' alt=''/>French";
  let concrete = document.querySelectorAll(".concrete");
  for (let i = 0; i < concrete.length; i++) {
    concrete[i].innerHTML = "Béton";
  }
  let bluesteel = document.querySelectorAll(".bluesteel");
  for (let i = 0; i < bluesteel.length; i++) {
    bluesteel[i].innerHTML = "Bluesteel";
  }
  let beech = document.querySelectorAll(".beech");
  for (let i = 0; i < beech.length; i++) {
    beech[i].innerHTML = "Hêtre";
  }

  let canyon = document.querySelectorAll(".canyon");
  for (let i = 0; i < canyon.length; i++) {
    canyon[i].innerHTML = "Canyon";
  }
  let cognac = document.querySelectorAll(".cognac");
  for (let i = 0; i < cognac.length; i++) {
    cognac[i].innerHTML = "Cognac";
  }
  let country = document.querySelectorAll(".country");
  for (let i = 0; i < country.length; i++) {
    country[i].innerHTML = "Country";
  }
  let oak = document.querySelectorAll(".oak");
  for (let i = 0; i < oak.length; i++) {
    oak[i].innerHTML = "Chêne";
  }
  let iceberg = document.querySelectorAll(".iceberg");
  for (let i = 0; i < iceberg.length; i++) {
    iceberg[i].innerHTML = "Iceberg";
  }
  let loft = document.querySelectorAll(".loft");
  for (let i = 0; i < loft.length; i++) {
    loft[i].innerHTML = "Loft";
  }

  let macchiato = document.querySelectorAll(".macchiato");
  for (let i = 0; i < macchiato.length; i++) {
    macchiato[i].innerHTML = "Macchiato";
  }
  let moor_oak = document.querySelectorAll(".moor-oak");
  for (let i = 0; i < moor_oak.length; i++) {
    moor_oak[i].innerHTML = "Chêne Bog";
  }
  let mustang = document.querySelectorAll(".mustang");
  for (let i = 0; i < mustang.length; i++) {
    mustang[i].innerHTML = "Mustang";
  }
  let nordic = document.querySelectorAll(".nordic");
  for (let i = 0; i < nordic.length; i++) {
    nordic[i].innerHTML = "Nordic";
  }

  let terra = document.querySelectorAll(".terra");
  for (let i = 0; i < terra.length; i++) {
    terra[i].innerHTML = "Terra";
  }

  let vermont = document.querySelectorAll(".vermont");
  for (let i = 0; i < vermont.length; i++) {
    vermont[i].innerHTML = "Vermont";
  }

  let vintage = document.querySelectorAll(".vintage");
  for (let i = 0; i < vintage.length; i++) {
    vintage[i].innerHTML = "Vintage";
  }
  let wenge = document.querySelectorAll(".wenge");
  for (let i = 0; i < wenge.length; i++) {
    wenge[i].innerHTML = "Wengé";
  }

  let castle = document.querySelectorAll(".castle");
  for (let i = 0; i < castle.length; i++) {
    castle[i].innerHTML = "Castle";
  }
  let havanna = document.querySelectorAll(".havanna");
  for (let i = 0; i < havanna.length; i++) {
    havanna[i].innerHTML = "Havane";
  }

  let toscana = document.querySelectorAll(".toscana");
  for (let i = 0; i < toscana.length; i++) {
    toscana[i].innerHTML = "Toscane";
  }
  let white = document.querySelectorAll(".white");
  for (let i = 0; i < white.length; i++) {
    white[i].innerHTML = "Blanc";
  }

  let black = document.querySelectorAll(".black");
  for (let i = 0; i < black.length; i++) {
    black[i].innerHTML = "Noir";
  }
  let jasmin = document.querySelectorAll(".jasmin");
  for (let i = 0; i < jasmin.length; i++) {
    jasmin[i].innerHTML = "Jasmin";
  }
  let platin = document.querySelectorAll(".platin");
  for (let i = 0; i < platin.length; i++) {
    platin[i].innerHTML = "Platin";
  }
  let aluminium = document.querySelectorAll(".aluminium-brushed");
  for (let i = 0; i < aluminium.length; i++) {
    aluminium[i].innerHTML = "Aluminium";
  }
  document.querySelector(".without-riser").innerHTML = "Sans Contremarche";
  document.querySelector(".step").innerHTML = "MARCHE";
  document.querySelector(".riser").innerHTML = "CONTREMARCHE";
  document.querySelector(".stringer").innerHTML = "LIMON";
  document.querySelector(".floor").innerHTML = "SOL";
  document.querySelector(".enquiry").innerHTML = "DEMANDE";
  document.querySelector(".enqiury-now").innerHTML = "DEMANDE";
  document.querySelector(".enquiry-details").innerHTML =
    "Nous nous ferons un plaisir de vous conseiller si vous avez des questions sur nos marches en stratifié. Il suffit de nous envoyer un e-mail avec toutes vos questions à: <a href='mailto:office2@stiege.com' style='text-decoration:underline'>office2@stiege.com.</a>";
  document.querySelector(".order-sample-text").innerHTML =
    "Vous pouvez commander les étapes échantillons dans notre boutique en ligne. Cliquez simplement sur le bouton ci-dessous. Vous serez redirigé directement vers notre boutique en ligne.";
  document.querySelector(".order-samples").innerHTML =
    "Demander des échantillons";
  document.querySelector(".order-samp").innerHTML = "Demander des échantillons";
}

function englishLang() {
  dropdown[0].classList.remove("backdrop_dropdown-open");
  document.querySelector(".selected-lang").innerHTML =
    "<img class='flag-img' src='https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' alt=''/>English";
  let concrete = document.querySelectorAll(".concrete");
  for (let i = 0; i < concrete.length; i++) {
    concrete[i].innerHTML = "Concrete";
  }
  let bluesteel = document.querySelectorAll(".bluesteel");
  for (let i = 0; i < bluesteel.length; i++) {
    bluesteel[i].innerHTML = "Bluesteel";
  }
  let beech = document.querySelectorAll(".beech");
  for (let i = 0; i < beech.length; i++) {
    beech[i].innerHTML = "Beech";
  }

  let canyon = document.querySelectorAll(".canyon");
  for (let i = 0; i < canyon.length; i++) {
    canyon[i].innerHTML = "Canyon";
  }
  let cognac = document.querySelectorAll(".cognac");
  for (let i = 0; i < cognac.length; i++) {
    cognac[i].innerHTML = "Cognac";
  }
  let country = document.querySelectorAll(".country");
  for (let i = 0; i < country.length; i++) {
    country[i].innerHTML = "Country";
  }
  let oak = document.querySelectorAll(".oak");
  for (let i = 0; i < oak.length; i++) {
    oak[i].innerHTML = "Oak";
  }
  let iceberg = document.querySelectorAll(".iceberg");
  for (let i = 0; i < iceberg.length; i++) {
    iceberg[i].innerHTML = "Iceberg";
  }
  let loft = document.querySelectorAll(".loft");
  for (let i = 0; i < loft.length; i++) {
    loft[i].innerHTML = "Loft";
  }

  let macchiato = document.querySelectorAll(".macchiato");
  for (let i = 0; i < macchiato.length; i++) {
    macchiato[i].innerHTML = "Macchiato";
  }
  let moor_oak = document.querySelectorAll(".moor-oak");
  for (let i = 0; i < moor_oak.length; i++) {
    moor_oak[i].innerHTML = "Moor Oak";
  }
  let mustang = document.querySelectorAll(".mustang");
  for (let i = 0; i < mustang.length; i++) {
    mustang[i].innerHTML = "Mustang";
  }
  let nordic = document.querySelectorAll(".nordic");
  for (let i = 0; i < nordic.length; i++) {
    nordic[i].innerHTML = "Nordic";
  }

  let terra = document.querySelectorAll(".terra");
  for (let i = 0; i < terra.length; i++) {
    terra[i].innerHTML = "Terra";
  }

  let vermont = document.querySelectorAll(".vermont");
  for (let i = 0; i < vermont.length; i++) {
    vermont[i].innerHTML = "Vermont";
  }

  let vintage = document.querySelectorAll(".vintage");
  for (let i = 0; i < vintage.length; i++) {
    vintage[i].innerHTML = "Vintage";
  }
  let wenge = document.querySelectorAll(".wenge");
  for (let i = 0; i < wenge.length; i++) {
    wenge[i].innerHTML = "Wenge";
  }

  let castle = document.querySelectorAll(".castle");
  for (let i = 0; i < castle.length; i++) {
    castle[i].innerHTML = "Castle";
  }
  let havanna = document.querySelectorAll(".havanna");
  for (let i = 0; i < havanna.length; i++) {
    havanna[i].innerHTML = "Havana";
  }

  let toscana = document.querySelectorAll(".toscana");
  for (let i = 0; i < toscana.length; i++) {
    toscana[i].innerHTML = "Toscana";
  }
  let white = document.querySelectorAll(".white");
  for (let i = 0; i < white.length; i++) {
    white[i].innerHTML = "White";
  }

  let black = document.querySelectorAll(".black");
  for (let i = 0; i < black.length; i++) {
    black[i].innerHTML = "Black";
  }
  let jasmin = document.querySelectorAll(".jasmin");
  for (let i = 0; i < jasmin.length; i++) {
    jasmin[i].innerHTML = "Jasmin";
  }
  let platin = document.querySelectorAll(".platin");
  for (let i = 0; i < platin.length; i++) {
    platin[i].innerHTML = "Platin";
  }
  let aluminium = document.querySelectorAll(".aluminium-brushed");
  for (let i = 0; i < aluminium.length; i++) {
    aluminium[i].innerHTML = "Aluminium";
  }
  document.querySelector(".without-riser").innerHTML = "Without Riser";
  document.querySelector(".step").innerHTML = "STEP";
  document.querySelector(".riser").innerHTML = "RISER";
  document.querySelector(".stringer").innerHTML = "STRINGER";
  document.querySelector(".floor").innerHTML = "FLOOR";
  document.querySelector(".enquiry").innerHTML = "ENQUIRY";
  document.querySelector(".enqiury-now").innerHTML = "ENQUIRY";
  document.querySelector(".enquiry-details").innerHTML =
    "We will be happy to advise you if you have any questions about our laminate steps. Simply send us an e-mail with all your questions to: <a href='mailto:office2@stiege.com' style='text-decoration:underline'> office2@stiege.com.</a>";
  document.querySelector(".order-sample-text").innerHTML =
    "You can order sample steps and sample risers in our online shop. Simply click on the below button. You will be forwarded direct to our online shop.";
  document.querySelector(".order-samples").innerHTML = "ORDER SAMPLES";
  document.querySelector(".order-samp").innerHTML = "ORDER SAMPLES";
}
