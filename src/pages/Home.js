import React from 'react'
import Navigation from '../components/Navigation'
const Home = () => {

    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Bharathi RAJENDRAN</h1>
                    <h2>Développeuse web fullstack(junior)</h2>
                    <p>Actuellement en reconversion professionnelle dans le domaine du développement web,
                         je recherche activement un stage conventionné de 6 mois (du 1 septembre 2021 
                         au 31décembre 2021) permettant de  mettre en pratique et de consolider les différents savoirs
acquis lors de ma formation.</p>
                   
                </div>
            </div>
        </div>
    );
};
export default Home;
