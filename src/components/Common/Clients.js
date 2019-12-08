import React, { Component } from 'react';
import image1 from '../assets/img/logos/creative-market.jpg'
import image2 from '../assets/img/logos/designmodo.jpg'
import image3 from '../assets/img/logos/envato.jpg'
import image4 from '../assets/img/logos/themeforest.jpg'
import Client from './Client'

const client = [
    {image: image1},
    {image: image2},
    {image: image3},
    {image: image4},
]

class Clients extends Component {

    render() {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {client.map((client, index)=>{
                            return <Client {...client} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Clients;