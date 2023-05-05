
const iceCream = [
  {
    name: 'Cookie Dough',
    price: 5,
    quantity: 0
    
}, {
    name: 'Vanilla',
    price: 3,
    quantity: 0
}, {
    name: 'Strawberry',
    price: 4,
    quantity: 0
}];

const toppings = [{
    name: 'Sprinkles',
   price: 0.5,
   quantity: 0
}, {
    name: 'Chocolate Chips',
    price: 0.75,
    quantity: 0
}];

const containers = [{
    name: 'Waffle Cone',
    price: 1,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    price: 2,
    quantity: 0
}
]

function buyCookieDough(){
console.log('Buying Cookie Dough')
let foundIceCream = iceCream [0]
foundIceCream.price++
drawCart()
console.log(foundIceCream)

}


function buyIceCream(){
console.log('Vanilla')
let foundIceCream = iceCream [1]
foundIceCream.price++
drawCart()
console.log(foundIceCream)

}

function buyIceCream(){
console.log('Strawberry', iceCream)
let foundIceCream = iceCream [2]
foundIceCream.price++
drawCart()
console.log(foundIceCream)

}


function buyToppings(){
console.log('Sprinkles', toppings)
let foundToppings = toppings [0]
  foundToppings.price++
  drawCart()

}

function buyToppings(){
console.log('ChocolateChips', toppings)
let foundToppings = toppings [1]
foundToppings.price++
drawCart()
}

function buyContainers(){
  console.log('Waffle Cone',containers);
  let foundContainers = containers[0]
  foundContainers.price++
  drawCart()
}

function buyContainers(){
  console.log('Waffle Bowl', containers);
  let foundContainers = containers [1]
  foundContainers.price++
  drawCart()
}

function drawCart() {
  console.log('drawing cart');

  let template = ''
  iceCream.forEach(s => {
    if (s.price> 0) {
      template += `
      <div class="d-flex justify-content-around align-items-baseline">
                            <p>${s.name}</p>
                            <p>x${s.total}</p>
                            <p>$${s.price}</p>
                            <button onclick="removeItem('${s.price}')" class="btn text-danger"><i class="mdi mdi-delete"></i></button>
                        </div>
      `
    }
  })
  document.getElementById('total').innerHTML = template
  drawTotal()
}

function drawTotal(){
  let total = 0
  iceCream.forEach(i=> i.quantity > 0 ? total += i.quantity * i.price : total += 0)
  console.log(total, 'total');
  
  document.getElementById('total').innerText = total.toString()
}



