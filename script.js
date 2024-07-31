const box = document.querySelector('.header_box');
async function getUsers() {

    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    data.forEach(info => {
        const card =document.createElement('div')
        card.classList.add('card')
let h2 = document.createElement('h2')
h2.classList.add('header-list')
  

let  p =document.createElement('p')
p.classList.add('header-category')


let h1 =document.createElement('h1')
h1.classList.add('header-price')


let img =document.createElement('img')
img.classList.add('header-img')

h2.innerHTML = `${info.title}`
p.innerHTML = ` ${info.category}`
h1.innerHTML = `$ ${info.price}`
img.src = `image : ${info.image}`
img.classList.add('header-img')
img.setAttribute('src', `${info.image}`)
card.appendChild(h2)
card.appendChild(img)
card.appendChild(h1)
card.appendChild(p)
box.appendChild(card)
    });
} 
getUsers()

 