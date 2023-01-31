
const BaseURL = `https://swapi.dev/api/?format=json`;

const lookupCategoryURL = (categoryName) => {
    return `https://swapi.dev/api/${categoryName}/?format=json`;
  }

const lookupSubCategoryURL = (categoryName, number) => {
    return `https://swapi.dev/api/${categoryName}/${number}/?format=json`;
  }

//fetchJson funktion
function fetchJson(url) {
    return fetch(url).then(resp => resp.json());
  }

//gör om objektet till en lista
function renderCategoryData(data) {
    let index = Object.keys(data);
    return index;
    console.log(index);
}  

//Tanken här är att rendera ut varje item i listan i var sin <a>, här vill jag också ha adressen men vet je hur jag får ut mer data.
function getCategory () {
    let category = fetchJson(BaseURL)
    .then(renderCategoryData)
    .then((data) => {
      console.log(data) //Vill skicka listan till Vue? 
      return data;
    })
}
getCategory();


//Rendera ut subkatgorierna beroende på vald kategori. 
function renderSubData (chosenCategory) {
  
}
















//selector
// let subButtonSelector = document.querySelector(".sub_button");
// let categoryButtonSelector = document.querySelector(".category_button");
// let poepleSelector = document.querySelector(".people");



// poepleSelector.addEventListener('click', (event) => {
//     let categoryName = event.target.innerHTML;
//     console.log(categoryName);
//     let url = categorysLookupURL(categoryName);
//     console.log(url);
// }) 


// const categorysLookupURL = (cateogryName) => {
//    return `https://swapi.dev/api/${cateogryName}/?format=json`;
// } 

// function fetchJson(url) {
//     return fetch(url).then(resp => resp.json());
//     console.log(resp);
//   }


//   function extractPeople(data) {
//     return {
//       // name: data[0].name,
//       people1: data[0].lat,
//       people2: data[0].lon
//       people3: data[0].lon
//       people4: data[0].lon
//       people5: data[0].lon
//       people6: data[0].lon
//       people7: data[0].lon
//       people8: data[0].lon
//       people9: data[0].lon
//       people10: data[0].lon

//     }
//   }
  





