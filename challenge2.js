document.addEventListener("DOMContentLoaded", function (){

  let productName = ""
  let productPrice = ""
  let discount = "15%"

  let swatchLinks = document.querySelectorAll("a.swatchanchor");
  let sizeLinks = [];

  let rightDiv = document.querySelector("div.product-detail-outer")

  function getAllSizeLinks (){

    rightDiv.addEventListener("click", (event) => {
      if (event.target.title.includes("Size") && event.target.parentNode.className.includes("selectable")) {
        if (!event.target.parentNode.className.includes("selected")) {
          unselect(event)
          event.target.parentNode.className += " selected"
        }
      console.log(event)
      }
    })

    function unselect (event) {
      swatchLinks.forEach((link) => {
        if (link.title.includes("Size") && link.parentNode.className.includes("selectable") && link.parentNode.className.includes("selected")) {
          link.parentNode.className = "selectable"
        }
      })
    }
  }

  getAllSizeLinks()

})
