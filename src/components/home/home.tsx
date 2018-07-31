import Link from 'gatsby-link';
import * as React from 'react';

const BOXES = [{
    title: 'Workflow Engine',
    description: 'Argo is an open source container-native workflow engine for getting work done on Kubernetes. ',
    link: '/docs/argo/demo',
},
{
    title: 'Continuous Delivery',
    description: 'Declarative continuous delivery for Kubernetes.',
    link: '/docs/argo/demo',
},
{
    title: 'Argo Events',
    description: 'Event-based dependency manager for Kubernetes.',
    link: '/docs/argo/demo',
},
{
    title: 'Continuous Integration',
    description: 'Continuous integration and deployment system powered by Argo workflow engine.',
    link: '/docs/argo/demo',
}];

const argoWheelImg = require('../../assets/images/argo-wheel.png');
const logos = ['appD.png', 'Heron.png', 'Rockset.png', 'Shibumi.png', 'Hyperpilot.png', 'Pulsar.png', 'Plus3.png', 'ApacheBookkeeper.png'].map(
    (name) => ({ name, src: require(`../../assets/images/logos/${name}`)}));

require('./home.scss');

export const Home = () => (
    <div className='home'>
        <div className='home__intro'>
            <div id='stars'/>
            <div id='stars2'/>
            <div id='stars3'/>
            <div className='main__container'>
                <div className='row'>
                    <div className='columns small-8'>
                        <h1>Get stuff done<br/> with Kubernetes</h1>
                        <h2>Kubernetes native workflows, deployments, CI, events</h2>
                    </div>
                    <div className='columns small-4'>
                        <img src={argoWheelImg} alt='Argo'/>
                    </div>
                </div>
                <div className='home__boxes'>
                    {BOXES.map((item) => (
                        <Link key={item.description} to={item.link} className='home__box'>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className='main__container'>
            <div className='home__community'>
                <div className='title'>Join the growing community</div>
                <div className='home__community-logos'>
                    {logos.map((item) => (
                        <div key={item.name} className='home__community-logos__item'>
                            <img src={item.src} alt={item.name}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
