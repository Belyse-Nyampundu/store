const toggleMenu = document.getElementById('toggle-menu');
const navigationNames = document.querySelector('.navigation-names');


// Add an event listener to the checkbox to toggle the navigation names
toggleMenu.addEventListener('change', () => {
  if (toggleMenu.checked) {
    navigationNames.style.display = 'flex';
  } else {
    navigationNames.style.display = 'none';
  }
});


















const productContainer = document.getElementById('products');
const getProducts = () =>{
 return fetch('https://dummyjson.com/products?limit= 8')
    .then(response => response.json())
    // .then(console.log)
     .then(response =>response  )
    .catch(error => error )
}
getProducts();

const displayProducts = async()=>{
    const products = await getProducts();
    console.log(products)

    products.products.map(item =>{
        let div = document.createElement('div');
        let image = document.createElement('img');
        let category = document.createElement('h2');
        // let rating = document.createElement('p');
        let price = document.createElement('h1')
        // let button = document.createElement('button')
        // button = "Add to cart"

        image.src = item.thumbnail;
        category.innerHTML = `${item.category} ${item.rating}`;
        // rating.innerHTML = item.rating;
        price.innerHTML = item.price;
        // button.innerHTML = item.button;


       
        div.appendChild(image);
        div.appendChild(category);
        // div.appendChild(rating);
        div.appendChild(price)
        // div.appendChild(button);
        div.setAttribute('key' , item.id);
        div.setAttribute('class' ,'music')
        productContainer.appendChild(div);


    });
}
displayProducts();


// const userContainer = document.getElementById('users');
// const getUsers = () =>{
//  return  fetch('https://dummyjson.com/users?limit=5')
//    .then(response=>response.json())
//    .then(response=>response)
//    .catch(error =>error)
// }
// getUsers();

// const displayUsers = async()=>{
//     const users = await getUsers();
//     console.log(users)  //you can use users.users.map to access the array of 30 which is the value of our property

//     users.users.map(item => {
//         // console.log(item);
//         let div = document.createElement('div');
//         let image = document.createElement('img');
//         let name = document.createElement('h2');
//         let userName = document.createElement('p');

//         image.src = item.image;
//         name.innerHTML = `${item.firstName} ${item.lastName}`;
//         userName.innerHTML = item.username;


//         div.appendChild(image);
//         div.appendChild(name);
//         div.appendChild(userName);
//         div.setAttribute('key' , item.id);
//         div.setAttribute('class' , 'people')
//        userContainer.appendChild(div);

//     });
// }