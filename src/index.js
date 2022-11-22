import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Heart from "./assets/heart.svg";
import "./styles.css";

const burger = document.querySelector(".burger");
const search = document.querySelector(".mobile-search-icon");
const headerMobile = document.querySelector(".header-mobile");
const searchContainer = document.querySelector(".input-container");
const x = document.querySelector(".x");
const sidebar = document.querySelector(".sidebar");
const sidebarBurger = document.querySelector(".sidebar-burger");
const productsContainer = document.querySelector(".products-container");
const addButton = document.querySelector(".add");
const main = document.querySelector("main");
const addForm = document.querySelector(".add-form");
const submit = document.getElementById("submit");
const name = document.getElementById("name");
const price = document.getElementById("price");

burger.addEventListener("click", () => {
    sidebar.classList.add("show");
});

search.addEventListener("click", () => {
    headerMobile.classList.add("hide");
    searchContainer.classList.add("show");
});

x.addEventListener("click", () => {
    headerMobile.classList.remove("hide");
    searchContainer.classList.remove("show");
});

sidebarBurger.addEventListener("click", () => {
    sidebar.classList.remove("show");
});

//backend

const firebaseConfig = {
    apiKey: "AIzaSyBhWjMFz8zBdkqdBT-9ijrGDKSs6rGXm3M",
    authDomain: "tumbochka-ae290.firebaseapp.com",
    projectId: "tumbochka-ae290",
    storageBucket: "tumbochka-ae290.appspot.com",
    messagingSenderId: "290129610291",
    appId: "1:290129610291:web:7ff4ad2133ad8ef476c546",
    measurementId: "G-QFHFMC0H69",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsRef = collection(db, "Products");

const products = [];

const populateProducts = () => {
    products.forEach((product) => {
        const { image, price, likes, name } = product;

        const productEl = document.createElement("div");

        productEl.classList.add("product");

        const productImg = document.createElement("img");

        productImg.src = image;
        productImg.alt = "";

        productEl.appendChild(productImg);

        const priceContainer = document.createElement("div");

        priceContainer.classList.add("price-container");

        productEl.appendChild(priceContainer);

        const productPrice = document.createElement("p");

        productPrice.textContent = `${price}грн`;
        productPrice.classList.add("price");

        priceContainer.appendChild(productPrice);

        const heartContainer = document.createElement("div");

        heartContainer.classList.add("heart-container");

        priceContainer.appendChild(heartContainer);

        const likesCount = document.createElement("p");

        likesCount.textContent = likes;

        heartContainer.appendChild(likesCount);

        const heart = document.createElement("img");

        heart.src = Heart;
        heart.alt = "heart";

        heartContainer.appendChild(heart);

        const productName = document.createElement("p");

        productName.textContent = name;

        productEl.appendChild(productName);

        productsContainer.appendChild(productEl);
    });

    addButton.addEventListener("click", () => {
        main.classList.add("hide");
        addForm.classList.remove("hide");
    });

    submit.addEventListener("click", async () => {
        await addDoc(productsRef, {
            image: img.value,
            price: price.value,
            name: name.value,
            likes: 0,
        });

        document.location.reload();
    });
};

const getDocuments = async () => {
    const snapshot = await getDocs(productsRef);

    snapshot?.forEach((doc) => {
        return products.push(doc.data());
    });

    populateProducts();
};

getDocuments();
