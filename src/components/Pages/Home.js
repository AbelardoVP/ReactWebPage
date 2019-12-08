import React, { Component } from 'react';
import Header from '../Common/Header'
import image from '../assets/img/header-bg.jpg'

//Re-usables components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Team from '../Common/Team'
import Clients from '../Common/Clients'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header
                title="Welcome To Our Studio!"
                subtitle="It's Nice To Meet You"
                buttonText="Tell me more"
                link="/about"
                showButton={true}
                image={image}
                />
                <Services/>
                <Portfolio/>
                <Team/>
                <Clients/>
            </div>
        );
    }
}

export default Home;