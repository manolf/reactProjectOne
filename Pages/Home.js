import React from 'react';
import frontImg from "../images/front.jpg"

const Home = () => {
    return (<>
        <section className="title">
            
            <h2 >Willkommen</h2>
            <div className="underline"></div>
            
        </section>
        <section className="title-foto">
            <img src={frontImg} alt="Stadt Krems"/>
        </section>
        </>
    )
}

export default Home
