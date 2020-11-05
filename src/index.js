const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
let addToy = false;
let divCollect = document.querySelector('toy-collection')

//When the page loads, make a 'GET' request to fetch all the toy objects.
function getToys() {
  return fetch("http://localhost:3000/toys")
    .then(resp => resp.json())
}

function renderToys(toy) {
  //h2 tag with the toy's name
  let h2 = document.createElement("h2")
  h2.innerText = toy.name

  //img tag with the src of the toy's image attribute and the class name "toy-avatar"
  let img = document.createElement('img')
  img.setAttribute('src', toy.image)
  img.setAttribute('class', 'toy-avatar')

  //p tag with how many likes that toy has
  let p = document.createElement('p')
  p.innerText = `${toy.likes} likes`

//button tag with a class "like-btn"
  let btn = document.createElement("button")
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', toy.id)
  btn.innerText = "like"
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    likes(e)
  })
//With the response data, make a <div class="card"> for each toy and add it to the toy-collection div.
  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h2, img, p, btn)
  divCollect.append(divCard)
 }




document.addEventListener("DOMContentLoaded", () => {

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
