import Link from 'gatsby-link';
import * as React from 'react';

import { PROJECTS } from '../projects';

const argoWheelImg = require('../../assets/images/argo-wheel.png');
const logos = ['intuit.png', 'blackrock.png', 'google.png', 'nvidia.png', 'datadog.png', 'cyrus.png', 'gladly.png', 'corefilling.png', 'adoby.png', 'interline.png', 'pfn.png'].map(
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
                        <h2>Open source Kubernetes native workflows, events, CI and CD</h2>
                    </div>
                    <div className='columns small-4'>
                        <img src={argoWheelImg} alt='Argo'/>
                    </div>
                </div>
                <div className='home__boxes'>
                    {Object.keys(PROJECTS).map((proj) => PROJECTS[proj]).map((item) => (
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
