let buttons = document.querySelectorAll(".button")
// console.log(buttons)

let body = document.querySelector("body")

// console.log(body)

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click' , (be) => {
    console.log(be)
    console.log(be.target)

    if(be.target.id === "grey"){
      body.style.backgroundColor = be.target.id
    }
    if(be.target.id === "white"){
      body.style.backgroundColor = be.target.id
    }
    if(be.target.id === "blue"){
      body.style.backgroundColor = be.target.id
    }
    if(be.target.id === "yellow"){
      body.style.backgroundColor = be.target.id
    }
    
  })
})