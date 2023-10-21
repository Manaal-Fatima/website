import React, { useState } from 'react';

export default function Kfc() {

    let products = [
        {
            id: 1,
            title: "Krunch Combo ",
            desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
            price: 520,
            image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png"
        },

        {
            id: 2,
            title: "Family Festival 3 ",
            desc: " 4 Zinger + 4 piece Chicken + 2 Dinner rolls + 1.5L drink",
            price: 2450,
            image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png"
        },

        {
            id: 3,
            title: "Hot Wings Bucket",
            desc: "10 Pcs of our Signature Hot & Crispy Wings",
            price: 610,
            image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png"
        },


        {
            id: 4,
            title: "Rice & Spice",
            desc: "Spiced and buttery rice with 6 pcs of Hot Shots ",
            price: 350,
            image: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-rice-and-spice_variant_0-2023-05-31115706.png"
        },

        {
            id: 5,
            title: "Crispy Duo Box",
            desc: "Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks",
            price: 1250,
            image: "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
        },
        {
            id: 6,
            title: " Twister Combo",
            desc: "Twister + 1 Regular fries + 1 Regular drink",
            price: 670,
            image: "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png"
        }
    ];


    return (
        <>
            <div className="bg-black">
                <nav class="navbar navbar-expand-lg bg-dark ">
                    <div class="container-fluid">
                        <img
                            alt="Logo"
                            src="https://tse3.mm.bing.net/th?id=OIP.QRqH1a8rwjXss4KwzVWNOAHaHa&pid=Api&P=0&h=220" // Replace with the actual path to your logo image
                            height="30"
                            className="d-inline-block align-top" />
                        <a class="navbar-brand  fw-bolder  Danger ms-5" href="#"
                        >KFC</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0  m-auto">
                                <li class="nav-item">
                                    <a class="nav-link active  text-light  me-5" aria-current="page" href="#">DELIVERY</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link  text-light   me-5" href="#">PICKUP</a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>


                <div className='container mt-5'>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        {products.map((product) => (
                            <div className="col" key={product.id} >
                                <div class="card  bg-dark  text-light" style={{ width: "18rem;" }}>
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text"> {product.desc}</p>
                                        <a href="#" className="btn btn-primary">
                                            ADD to cart
                                        </a>
                                    </div>
                                </div>
                            </div>



                        ))

                        }
                    </div>
                </div>
            </div>
        </>





    );
}