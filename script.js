

let rough = "";

let productData = [
    {
        id: "1",
        title: "Durvesh",
        Description: "Grapefruit, Lemon, Bergamot",
        image: "https://saeedghani.pk/cdn/shop/files/durvesh_1024x1024.jpg?v=1756815246",
        price: "4,990"
    },

    {
        id: "2",
        title: "Mir",
        Description: "Lavender, Birch",
        image: "https://saeedghani.pk/cdn/shop/files/MIR-100ml_1024x1024.webp?v=1759673223",
        price: "4,490"
    },

    {
        id: "3",
        title: "Khan",
        Description: "Lemon, Mint, Pink Pepper, Grapefruit",
        image: "https://saeedghani.pk/cdn/shop/files/KHAN100ml_1024x1024.webp?v=1759673121",
        price: "4,490"
    },

    {
        id: "4",
        title: "Murshid",
        Description: "Bergamot, Blackcurrant, Pineapple",
        image: "https://saeedghani.pk/cdn/shop/files/murshid12ml_1024x1024.webp?v=1759668874",
        price: "1,890"
    },

    {
        id: "5",
        title: "Jalal",
        Description: "Orange, Mandarin Orange, Bergamot, Orange Blossom",
        image: "https://saeedghani.pk/cdn/shop/files/Fate_1024x1024.webp?v=1759664914",
        price: "1,690"
    },

    {
        id: "6",
        title: "Sultan",
        Description: "Cardamom and Amber",
        image: "https://saeedghani.pk/cdn/shop/files/Sultan_1024x1024.webp?v=1759673367",
        price: "3,990"
    },

    {
        id: "7",
        title: "Desire",
        Description: "Apple, Lemon, Neroli And Bergamot",
        image: "https://saeedghani.pk/cdn/shop/files/Desire_1024x1024.jpg?v=1758541178",
        price: "3,990"
    },

    {
        id: "8",
        title: "Haider Sports",
        Description: "Fresh citrus, aquatic",
        image: "https://saeedghani.pk/cdn/shop/files/HS_1024x1024.webp?v=1764273648",
        price: "4,990"
    }
];


function showProducts() {
    productData.forEach(element => {
        
        rough += `

            <div class="card m-3" style="width: 18rem;">
                <img src=${element.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.Description}.</p>
                    <h5 class="card-title">Rs. <span>${element.price}</span></h5>
                    <a href="#" class="btn btn-warning">Add To Cart</a>
                </div>
            </div>

        `

        document.getElementById("show-all-product").innerHTML = rough;

    });
}

showProducts();