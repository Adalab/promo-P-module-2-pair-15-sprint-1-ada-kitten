"use strict";

//const sectionElement = document.querySelector (".js-new-form")
//sectionElement.classList.remove("collapsed")

const list = document.querySelector(".js-list");

const kittenImageOne = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kitteNameOne = "Anastacio";
const kittenDescOne = "cariñoso, Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!";
const kittenRaceOne = "British Shorthair";

const kittenImageTwo = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenNameTwo = "Fiona";
const kittenDescTwo = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!";
const kittenRaceTwo = "British Shorthair";

const kittenImageThree = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenNameThree = "Cielo";
const kittenDescThree = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!";
const kittenRaceThree = "British Shorthair";


const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src=${kittenImageOne}
                alt="gatito"
              />
              <h3 class="card_title">${kitteNameOne}</h3>
              <h4 class="card_race">${kittenRaceOne}</h4>
              <p class="card_description">
                ${kittenDescOne}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src=${kittenImageTwo}
              alt="gatito"
            />
            <h3 class="card_title">${kittenNameTwo}</h3>
            <h4 class="card_race">${kittenRaceTwo}</h4>
            <p class="card_description">
              ${kittenDescTwo}
            </p>
          </li>`;

const kittenThree = `<li class="card">
            <img
              class="card_img"
              src="${kittenImageThree}"
              alt="gatito"
            />
            <h3 class="card_title">${kittenNameThree}</h3>
            <h4 class="card_race">${kittenRaceThree}</h4>
            <p class="card_description">
            ${kittenDescThree}
            </p>
          </li>`;

list.innerHTML += kittenOne;
list.innerHTML += kittenTwo;
list.innerHTML += kittenThree;



const input_search_desc = document.querySelector('.js_in_search_desc');
(input_search_desc.value = 'cariñoso');
const descrSearchText = input_search_desc.value;
if( kittenDescOne.includes(descrSearchText) ) {console.log()

}


// EVENTO CLICK PARA EL +

 const find = document.querySelector('.js-plus');
 const form = document.querySelector(".new-form");

 find.addEventListener('click', () => {
   form.classList.toggle("collapsed");
 });


// EVENTO AÑADIR

const add = document.querySelector('.js-btn-add');

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const labelMesageError = document.querySelector(".js-label-error");

add.addEventListener('click', () => {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === "" && valuePhoto === "" && valueName === "" && valueRace === "") {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    labelMesageError.innerHTML = "Ahora mismo te añado el nuevo gatito";
  }
});


// MOSTRAR FORMULARIO NUEVO GATITO

const find1 = document.querySelector('.js-plus');
const form1 = document.querySelector(".new-form");

function showMeCatForm () {
  find.classList.remove('collapsed');
}

form.addEventListener('click',() => {
  if(form.classList.contains('collapsed')) {
    showMeCatForm()
  }else {
  hideNewCatForm()
  }
});


function hideNewCatForm () {
find.classList.add('collapsed');
}

//OBJETOS


const kittenDataOne = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
  race: "British Shorthair",
};
const kittenDataTwo = {
image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
name: "Fiona",
desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!",
race: "British Shorthair",
}
const kittenDataThree = {
  image:"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Cielo",
  desc: "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!",
  race: "British Shorthair",
}

function renderKitten(cualquierKittenData) {
  const kittenGlobal = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${cualquierKittenData.image}
      alt="gatito"
    />
    <h3 class="card_title">${cualquierKittenData.name}</h3>
    <h4 class="card_race">${cualquierKittenData.race}</h4>
    <p class="card_description">
      ${cualquierKittenData.desc}
    </p>
  </article>
</li>`;
list.innerHTML += kittenGlobal;
}
renderKitten(kittenDataOne);
//renderKitten( {name:"sldkfjñsa", desc:"sldkfjs", race:"sdlkfsj", image: "sdlfkjs"} );

/*
  const kittenGlobal = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenDataOne.image}
      alt="gatito"
    />
    <h3 class="card_title">${kittenDataOne.name}</h3>
    <h4 class="card_race">${kittenDataOne.race}</h4>
    <p class="card_description">
      ${kittenDataOne.desc}
    </p>
  </article>
</li>`;
list.innerHTML += kittenGlobal;
*/
renderKitten(kittenDataTwo);
/*

  const kittenGlobal = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenDataTwo.image}
      alt="gatito"
    />
    <h3 class="card_title">${kittenDataTwo.name}</h3>
    <h4 class="card_race">${kittenDataTwo.race}</h4>
    <p class="card_description">
      ${kittenDataTwo.desc}
    </p>
  </article>
</li>`;
list.innerHTML += kittenGlobal;
*/
renderKitten(kittenDataThree);

function renderRace (){

}
