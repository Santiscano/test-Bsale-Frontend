console.log('Happy hacking :)')

// variables de consulta con fetch
const URLBASEPRODUCTS = 'https://bsale-backend-ydx3.onrender.com/api';
const URLCATEGORY = 'https://bsale-backend-ydx3.onrender.com/api/category';
const URLENERGY ='https://bsale-backend-ydx3.onrender.com/api/products/energy';
const URLPISCO ='https://bsale-backend-ydx3.onrender.com/api/products/pisco';
const URLRON ='https://bsale-backend-ydx3.onrender.com/api/products/ron';
const URLBEVERAGE ='https://bsale-backend-ydx3.onrender.com/api/products/beverage';
const URLSNACK ='https://bsale-backend-ydx3.onrender.com/api/products/snack';
const URLBEER ='https://bsale-backend-ydx3.onrender.com/api/products/beer';
const URLVODKA ='https://bsale-backend-ydx3.onrender.com/api/products/vodka';


// nodo principal donde renderizare todas las categorias   MENU PRINCIPAL
const appNodeCategory = document.getElementById('containerCategory');

// peticion API data CATEGORY
const fetchRenderCategoryApi = async () => {
                // peticion fetch
    const response = await fetch(URLCATEGORY);
    const data = await response.json();
    // const validandoConConsola = await console.log(data.results);
    // 1 solo render en el Dom
    const allCategories = [];

        // metodo map para renderizar
    const rendercategory = data.results.map( item => {
            // creo estilizo y agrego contenido a cada nodo
        // id
        // name
        const nameCategory = document.createElement('h3');
        nameCategory.textContent = item.name;
        nameCategory.className = 'itemCategory text-gray-800 text-lg font-medium mb-2 text-center flex-row';
        nameCategory.addEventListener('click', console.log);


            // push de categorias
        allCategories.push(nameCategory)
    });
    // append nodos
    appNodeCategory.append(...allCategories);
}
fetchRenderCategoryApi();



const conexionConstants = async () => {
  const response = await fetch(URLCATEGORY);
  const data = await response.json();
  // const validate = await console.log(data.results.name);
  console.log('conexion estable con DB')
}
// peticion constante para no perder conexion
setInterval(conexionConstants, 1000);



        // nodo principal 
  const appNodeProducts = document.getElementById('containerApp');

      // funcion para renderizar
function renderProductFetch (data, allItems){
  // limpio antes de buscar
  appNodeProducts.innerHTML = "";
  
  data.results.map(item => {
          // creo, estilizo y agrego contenido a los nodos
    // name
    const nameProduct = document.createElement('h2');   // crear nodo
    nameProduct.textContent = item.name;                // agrego contenido
    nameProduct.className = 'text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300'                  // estilizar
    
    // url image
    const image = document.createElement('img');
    image.src = `${item.url_image}`;
    // image.src = 'https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg'
    image.className = 'rounded-t h-72 w-full object-cover';

    // price
    const price = document.createElement('div');
    price.textContent = `$ ${item.price}`;
    price.className = 'text-2xl text-black dark:text-white font-bold';

    // discount
    const discount = document.createElement('div');
    discount.className = 'px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50 text-center';
    discount.textContent = `${item.discount}% de descuento`;

          // uno nodos por partes
    // name - price - discount   
    const DescriptionTitle = document.createElement('figcaption');
    DescriptionTitle.className = "p-4";
    DescriptionTitle.append(nameProduct, price, discount);

    // lo anterior con img
    const figure = document.createElement('figure');
    figure.append(image, DescriptionTitle);
    // pongo todo dentro de un contenedor a
    const containerFigure = document.createElement('a');
    containerFigure.className = "cursor-pointer";
    containerFigure.append(figure);
    // y esto dentro de otro contenedor card
    const cards = document.createElement('div');
    cards.className= "rounded-xl my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1";
    cards.append(containerFigure)

          // push de card a allItems
    allItems.push(cards);
  });
  appNodeProducts.append(...allItems);
}



// funcion api energy
const handleOnlyEnergy = async () => {
  console.log('peticion handleOnlyEnergy')
  const response = await fetch(URLENERGY);
  const data = await response.json();
  const allEnergy = [];
  renderProductFetch(data, allEnergy);
}
// Boton haciendo peticion renderizar ENERGY
const productsEnergy = document.getElementById('productsEnergy');
productsEnergy.addEventListener('click',handleOnlyEnergy);



// funcion api pisco
const handleOnlyPisco = async () => {
  console.log('peticion handleOnlyPisco')
  const response = await fetch(URLPISCO);
  const data = await response.json();
  const allPisco = [];
  renderProductFetch(data, allPisco);
}
// Boton haciendo peticion renderizar ENERGY
const productsPisco = document.getElementById('productsPisco');
productsPisco.addEventListener('click',handleOnlyPisco);



// funcion api Ron
const handleOnlyRon = async () => {
  console.log('peticion handleOnlyRon')
  const response = await fetch(URLRON);
  const data = await response.json();
  const allRon = [];
  renderProductFetch(data, allRon);
}
// Boton haciendo peticion renderizar ENERGY
const productsRon = document.getElementById('productsRon');
productsRon.addEventListener('click',handleOnlyRon);



// funcion api Beverage
const handleOnlyBeverage = async () => {
  console.log('peticion handleOnlyBeverage')
  const response = await fetch(URLBEVERAGE);
  const data = await response.json();
  const allBeverage = [];
  renderProductFetch(data, allBeverage);
}
// Boton haciendo peticion renderizar ENERGY
const productsBeverage = document.getElementById('productsBeverage');
productsBeverage.addEventListener('click',handleOnlyBeverage);



// funcion api Snack
const handleOnlySnack = async () => {
  console.log('peticion handleOnlySnack')
  const response = await fetch(URLSNACK);
  const data = await response.json();
  const allSnack = [];
  renderProductFetch(data, allSnack);
}
// Boton haciendo peticion renderizar ENERGY
const productsSnack = document.getElementById('productsSnack');
productsSnack.addEventListener('click',handleOnlySnack);



// funcion api Beer
const handleOnlyBeer = async () => {
  console.log('peticion handleOnlyBeer')
  const response = await fetch(URLBEER);
  const data = await response.json();
  const allBeer = [];
  renderProductFetch(data, allBeer);
}
// Boton haciendo peticion renderizar ENERGY
const productsBeer = document.getElementById('productsBeer');
productsBeer.addEventListener('click',handleOnlyBeer);



// funcion api Vodka
const handleOnlyVodka = async () => {
  console.log('peticion handleOnlyVodka')
  const response = await fetch(URLVODKA);
  const data = await response.json();
  const allVodka = [];
  renderProductFetch(data, allVodka);
}
// Boton haciendo peticion renderizar ENERGY
const productsVodka = document.getElementById('productsVodka');
productsVodka.addEventListener('click',handleOnlyVodka);
