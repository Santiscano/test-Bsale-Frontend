console.log('Happy hacking :)')

// variables de consulta con fetch
const URLBASE = 'http://localhost:8081/api';
const URLPRODUCTS ='http://localhost:8081/api/products';
const URLCATEGORY = '';

// nodo principal donde renderizara todas las cards
const appNode = document.getElementById('containerApp');

// peticion API de data
const fetchRenderApi = async () =>{
    const response = await fetch(URLPRODUCTS);
    const data = await response.json();
    const respuestica = await console.log(data.results);

    // para no hacer multiples append aqui hare 1 solo con todos los productos
    const allItems = [];

    
    const renderAll = data.results.map(item => {
                // creo, estilizo y agrego contenido a los nodos
        // id
        console.log(`observando los id: ${item.name}`);
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
        price.textContent = item.price;
        price.className = '';

        // discount
        const discount = document.createElement('div');
        discount.className = '';
        discount.textContent = item.discount;

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
        cards.className= "my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1";
        cards.append(containerFigure)

                // push de card a allItems
        allItems.push(cards);
    });
    // append all
    appNode.append(...allItems);
}
fetchRenderApi();




