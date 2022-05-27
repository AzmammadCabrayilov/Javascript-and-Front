"use strict"

let tbody = document.querySelector("table tbody");
let removeAll = document.querySelector(".remove-all");
let favourites = JSON.parse(localStorage.getItem("favourites"));
let removeitem = ""
let totalPriceElement = ""
let totalPriceElementTr = ""
let total = 0;

if (localStorage.getItem("favourites") === null || JSON.parse(localStorage.getItem("favourites")).length === 0) {
    let tr = "<tr><td colspan='4' class='text-center text-danger fw-bold'>No items</td></tr>"
    removeAll.classList.add("d-none")
    tbody.innerHTML += tr;
}
else {
    addProductToTable(favourites)

}
removeAll.addEventListener("click", function () {
    localStorage.removeItem("favourites");
    location.reload();
})


function addProductToTable(favItems) {
    tbody.innerHTML = ""
    for (const product of favItems) {
        let tr = `
        <tr>
            <td><img src='${product.image}'></td>
            <td>${product.name}</td>
            <td>${product.desc}</td>
            <td class='price'>${product.price} * ${product.count}</td>
            <td><button type='button' class='remove-item bi bi-trash' data-id=${product.id}></button></td>
        </tr>
        `
        tbody.innerHTML += tr;

        let amount = product.price.replace("$", "");
        amount = parseInt(amount);
        total += amount * product.count;
    }

    let subtotalTr = `
    <tr class="total-price">
        <td colspan='3' class='text-end'>Subtotal:</td>
        <td class='price'>$${total}</td>
    </tr>
    `
    tbody.innerHTML += subtotalTr;
    removeitem = document.querySelectorAll(".remove-item")
    totalPriceElement = document.querySelector(".price")
    totalPriceElementTr = document.querySelector(".total-price")
}

if (removeitem.length > 0)
    removeitem.forEach(e => {
        e.addEventListener("click", function (event) {
            let id = event.target.getAttribute("data-id");
            let deletedItem = favourites.find(item => item.id == id);
            favourites = favourites.filter(item => item.id != id)
            let amount = Number(deletedItem.price.replace("$", ""));
            total -= amount * deletedItem.count;
            event.target.parentNode.parentNode.parentNode.lastElementChild.remove()
            const node = document.createElement("tr");
            node.innerHTML = `<td colspan='3' class='text-end'>Subtotal:</td>
    <td class='price'>$${total}</td>`
            event.target.parentNode.parentNode.parentNode.appendChild(node);
            event.target.parentNode.parentNode.remove()
            localStorage.setItem("favourites", JSON.stringify(favourites))
            if (favourites.length == 0) {
                removeAll.click()
            }

        })
    })







