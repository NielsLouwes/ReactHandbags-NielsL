import React from 'react';
import './App.css';
import Buttons from "./Buttons";
import Product from "./Product";
// import bagOne from "../src/assets/bag_1.png";
// import bagOne from "src/assets/bag_1.png";


function App() {
  return (
     <>
         <nav>
             <Buttons title={"to the collection"}  />
             <Buttons title={"shop all bags"}  />
             <Buttons title={"pre-orders"}  />
         </nav>

         <main>
             <article>
                 <Product
                   tag = {"Best Seller"}
                   // image = {bagOne}
                   productName = {"The handy bag"}
                   productPrice = {"$400,-"}
                 />
             </article>

             <article>
                 <Product
                     tag = {"Best Seller"}
                     // image = {bagOne}
                     productName = {"The stylish bag"}
                     productPrice = {"$250,-"}
                 />
             </article>

             <article>
                 <Product
                     tag = {"New Collection"}
                     // image = {bagOne}
                     productName = {"The simple bag"}
                     productPrice = {"$300,-"}
                 />
             </article>

             <article>
                 <Product
                     tag = {"New Collection"}
                     // image = {bagOne}
                     productName = {"The trendy bag"}
                     productPrice = {"$150,-"}
                 />
             </article>
         </main>

         <footer>
             <img src="/src/assets/brand.png" alt=""/>
         </footer>







 </>




);
}


export default App;


// Maak een omwikkelende main-tag voor de producten. Stop daar vier article-elementen in zoals op bovenstaande afbeelding, met:
// Een span voor het rode label
// De afbeelding van de tassen
// Een p voor de naam van de tas
// Een h4 voor de prijs
