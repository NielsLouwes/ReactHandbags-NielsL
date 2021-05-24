import React from 'react';
import './App.css';
import Buttons from "./Buttons";
import Product from "./Product";
import Tiles from "./Tiles";
import bagOne from "./assets/bag_1.png"
import bagTwo from "./assets/bag_2.png"
import bagThree from "./assets/bag_3.png"
import bagFour from "./assets/bag_4.png"

import brandLogo from "./assets/brand.png"
import founder from "./assets/our_story.png"


function App() {
  return (
     <>
         <nav>
             <Buttons title={"to the collection"}  />
             <Buttons title={"shop all bags"}  />
             <Buttons title={"pre-orders"} />
         </nav>

         <main>
             <article>
                 <Product
                   tag = {"Best Seller"}
                   image = {bagOne}
                   productName = {"The handy bag"}
                   productPrice = {"$400,-"}
                 />

             </article>

             <article>
                 <Product
                     tag = {"Best Seller"}
                     image = {bagTwo}
                     productName = {"The stylish bag"}
                     productPrice = {"$250,-"}
                 />
             </article>

             <article>
                 <Product
                     tag = {"New Collection"}
                     image = {bagThree}
                     productName = {"The simple bag"}
                     productPrice = {"$300,-"}
                 />
             </article>

             <article>
                 <Product
                     tag = {"New Collection"}
                     image = {bagFour}
                     productName = {"The trendy bag"}
                     productPrice = {"$150,-"}
                 />
             </article>
         </main>

         <footer>
             <Tiles
                 heading = {"THE BRAND"}
                 story = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dignissim diam sit amet dignissim. Suspendisse potenti. Nunc eu augue est. Nunc libero dui, mattis non magna non, iaculis sollicitudin enim. Phasellus a fermentum ante. Donec luctus mi et arcu."}
                 />


             <Tiles
                 image = {brandLogo}
             />

             <Tiles
                 heading = {"OUR STORY"}
                 story = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dignissim diam sit amet dignissim. Suspendisse potenti. Nunc eu augue est. Nunc libero dui, mattis non magna non, iaculis sollicitudin enim. Phasellus a fermentum ante. Donec luctus mi et arcu."}
             />

             <Tiles
                 image = {founder}
             />

             {/*<Tiles*/}
             {/*    heading = {"THE BRAND"}*/}
             {/*    story = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dignissim diam sit amet dignissim. Suspendisse potenti. Nunc eu augue est. Nunc libero dui, mattis non magna non, iaculis sollicitudin enim. Phasellus a fermentum ante. Donec luctus mi et arcu."}*/}
             {/*/>*/}




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
