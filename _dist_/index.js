console.log('Happy hacking :)')

// variables de consulta con fetch
const URLBASE = 'http://localhost:8081/api';
const URLPRODUCTS ='http://localhost:8081/api/products';
const URLCATEGORY = 'http://localhost:8081/api/category';

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
        nameCategory.className = 'itemCategory text-gray-800 text-lg font-medium mb-2 text-center';
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




        // nodo principal donde renderizara todas las cards
const appNodeProducts = document.getElementById('containerApp');
// peticion API de data PRODUCTS
const fetchRenderProductsApi = async () =>{
    const response = await fetch(URLPRODUCTS);
    const data = await response.json();
    // const validandoConConsola = await console.log(data.results);

    // para no hacer multiples append aqui hare 1 solo con todos los productos
    const allItems = [];

    
    const renderAll = data.results.map(item => {
                // creo, estilizo y agrego contenido a los nodos
        // id
        // console.log(`observando los id: ${item.id}`);
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

        // category
        const category = document.createElement('div');
        category.className = '';
        category.textContent = item.category;

                // uno nodos por partes
        // name - price - discount - categoy  
        const DescriptionTitle = document.createElement('figcaption');
        DescriptionTitle.className = "p-4";
        DescriptionTitle.append(nameProduct, price, discount, category);
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

    // append all
    appNodeProducts.append(...allItems);
}
fetchRenderProductsApi();



// const item1 = document.getElementById('item1');
// item1.addEventListener('click',handleOnlyvodka);
// const handleOnlyvodka = async () =>{
//     const response = await fetch(URLPRODUCTS);
//     const data = await response.json();
//     // const validandoConConsola = await console.log(data.results);

//     // para no hacer multiples append aqui hare 1 solo con todos los productos
//     const allItems = [];

//     // filtrare por categorias para activar con el click
//     const renderAll = data.results.filter(item => {
//         // filtro
//         item.category === 1
//         // name
//         const nameProduct = document.createElement('h2');   // crear nodo
//         nameProduct.textContent = item.name;                // agrego contenido
//         nameProduct.className = 'text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300'                  // estilizar

//         // url image
//         const image = document.createElement('img');
//         image.src = `${item.url_image}`;
//         // image.src = 'https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg'
//         image.className = 'rounded-t h-72 w-full object-cover';

//         // price
//         const price = document.createElement('div');
//         price.textContent = `$ ${item.price}`;
//         price.className = 'text-2xl text-black dark:text-white font-bold';

//         // discount
//         const discount = document.createElement('div');
//         discount.className = 'px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50 text-center';
//         discount.textContent = `${item.discount}% de descuento`;

//         // category
//         const category = document.createElement('div');
//         category.className = '';
//         category.textContent = item.category;

//                 // uno nodos por partes
//         // name - price - discount - categoy  
//         const DescriptionTitle = document.createElement('figcaption');
//         DescriptionTitle.className = "p-4";
//         DescriptionTitle.append(nameProduct, price, discount, category);
//         // lo anterior con img
//         const figure = document.createElement('figure');
//         figure.append(image, DescriptionTitle);
//         // pongo todo dentro de un contenedor a
//         const containerFigure = document.createElement('a');
//         containerFigure.className = "cursor-pointer";
//         containerFigure.append(figure);
//         // y esto dentro de otro contenedor card
//         const cards = document.createElement('div');
//         cards.className= "rounded-xl my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1";
//         cards.append(containerFigure)

//                 // push de card a allItems
//         allItems.push(cards);
        
//     });

//     // append all
//     appNodeProducts.append(...allItems);
// }


// const otroitemporaqui = document.getElementById('otroitemporaqui');
// otroitemporaqui.addEventListener('click',handleOnlyEnergy);
// async function handleOnlyEnergy(){
//     console.log('solo mostrara la categoria bebida energetica');
// }


