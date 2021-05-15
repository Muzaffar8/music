import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>CHOOSE YOUR FAVORITE GENRES</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-4.jpg"
                            text="Explore the smooth jazz to keep you relaxed"
                            label="JAZZ"
                            path="/products"
                        />

                        <CardItem
                            src="images/img-rap.jpg"
                            text="Get energized"
                            label="RAP"
                            path="/products"
                        />


                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-pop.jpg"
                            text="Explore pop culture"
                            label="POP"
                            path="/products"
                        />

                        <CardItem
                            src="images/imgg.jpg"
                            text="Get to know K-POP"
                            label="K-POP"
                            path="/products"
                        />

                        <CardItem
                            src="images/img-2.jpg"
                            text="Dance together"
                            label="HIP HOP"
                            path="/products"
                        />


                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Cards
