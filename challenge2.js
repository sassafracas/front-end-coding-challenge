document.addEventListener("DOMContentLoaded", function (){

  let productName = document.querySelector("div.product-name").innerText
  let productPrice = document.querySelector("span.price-standard").innerText
  let mainDiv = document.getElementById("main")
  let rightDiv = document.querySelector("div.product-detail-outer")
  let swatchLinks = document.querySelectorAll("a.swatchanchor")
  let modalDiv = document.getElementById("discountModal")
  let closeSpan = document.querySelector(".close")

  let discountedPrice = "$" + parseInt(productPrice.substring(1)) * 0.85

  function getAllSizeLinks (){
    rightDiv.addEventListener("click", (event) => {
      if (event.target.title.includes("Size") && event.target.parentNode.className.includes("selectable")) {
        if (!event.target.parentNode.className.includes("selected")) {
          event.preventDefault()
          unselect()
          event.target.parentNode.className += " selected"

          closeSpan.addEventListener("click", (event) => {
            modalDiv.style.display = "none"
          })
          modalDiv.style.display = "block"
        }
      console.log(event)
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

  function createModal () {
    let modal =
      `<div id="discountModal" class="modal" style="display:none; position:fixed; z-index:1; left:0; top: 0; width:100%; height:100%; overflow:auto; background-color:rgb(0,0,0); background-color: rgba(0,0,0,0.4);">
        <div class="modal-content" style="background-color:#fefefe; margin: 15% auto; padding: 20px; border: 1px solid #888; width: 80%;">
          <span class="close" style="color:#aaa; float:right; font-size:28px; font-weight:bold;">&times;</span>
          <p>"Get this ${productName} for ${discountedPrice} with a 15% discount"</p>
        </div>
       </div>`

    mainDiv.innerHTML += modal
      getAllSizeLinks()
  }

  createModal()


})
