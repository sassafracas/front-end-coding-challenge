// document.addEventListener("DOMContentLoaded", function (){

  let productName = document.querySelector("div.product-name").innerText
  let productPrice = document.querySelector("span.price-sales").innerText
  let detailsDiv = document.querySelector("div.product-detail-sections")
  let rightDiv = document.querySelector(".product-detail-outer")
  let swatchLinks = document.querySelectorAll("a.swatchanchor")
  let cartSVG = document.querySelector(".svg-icon-bag")


  let discountedPrice = "$" + parseInt(productPrice.replace("$", "")) * 0.85

  function createModal () {
    let modal =
      `<div id="discountModal" class="modal" style="display: none; position: fixed; z-index: 3; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);">
        <div class="modal-content" style="background-color: #fefefe; margin: 20vw auto; padding: 1em 1em 3em 1em; border: 1px solid #888; width: 60vw;">
          <span class="close" style="color: #aaa; float: right; font-size: 28px; font-weight: bold;">&times;</span>
          <p style="font-size: 2em; font-weight: 400; font-family: sans-serif; padding: 2em 2em 1em 2em">Get this ${productName} for ${discountedPrice} with a 15% discount.</p>
          </br>
          <div class="cart-div" style="text-align: center; margin:0 auto">
          <a href="https://www.marmot.com/cart"><svg width="30" height="33" viewBox="0 0 20 23">${cartSVG.innerHTML}</svg></a>
          <div>
        </div>
       </div>`

    detailsDiv.innerHTML += modal
    addSizeEventListener()
  }

  function addSizeEventListener (){
    let modalDiv = document.getElementById("discountModal")
    let closeSpan = document.querySelector(".close")

    rightDiv.addEventListener("click", (event) => {
      event.preventDefault()
      if (event.target.title.includes("Size") && event.target.parentNode.className.includes("selectable")) {
        if (!event.target.parentNode.className.includes("selected")) {
          event.preventDefault()
          unselect()
          event.target.parentNode.className += " selected"
            closeSpan.addEventListener("mouseover", (event) => {
              closeSpan.style.cursor = "pointer"
              closeSpan.style.color = "#000"
            })
            closeSpan.addEventListener("mouseout", (event) => {
              closeSpan.style.color = "#aaa"
            })
            closeSpan.addEventListener("click", (event) => {
              modalDiv.style.display = "none"
            })
          modalDiv.style.display = "block"
          window.onclick = function(event) {
            if (event.target == modalDiv) {
              modalDiv.style.display = "none";
            }
          }
        }
      }

    })

    function unselect () {
      swatchLinks.forEach((link) => {
        if (link.title.includes("Size") && link.parentNode.className.includes("selectable") && link.parentNode.className.includes("selected")) {
          link.parentNode.className = "selectable"
        }
      })
    }
  }



  createModal()

    // })
