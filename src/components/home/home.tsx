import Link from 'gatsby-link';
import * as React from 'react';

import { PROJECTS } from '../projects';

const argoWheelImg = require('../../assets/images/argo-wheel.png');

require('./home.scss');

const data: string = require('raw-loader!../../assets/clearbit-logos.txt');
const manuallyAddedLogos = require('../../assets/logos.json');

export const Home = () => {
    const logos = Array.from(new Set(data.split('\n').filter((url) => !!url))).map((domain) => ({
        url: `https://${domain}`,
        src: `https://logo.clearbit.com/${domain}`,
    })).concat(Object.keys(manuallyAddedLogos).filter((domain) => !!manuallyAddedLogos[domain]).map((domain) => ({
        url: `https://${domain}`,
        src: require(`../../assets/images/logos/${manuallyAddedLogos[domain]}`),
    })));

    logos.sort((first, second) => first.url.replace(/^(https:\/\/www\.)/, '').localeCompare(second.url.replace(/^(https:\/\/www\.)/, '')));

    return (
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
                            <div key={item.url} className='home__community-logos__item'>
                                <a href={item.url} target='_blank'>
                                  <img src={item.src} alt={item.url}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <p>
                    <a href='https://clearbit.com'>Logos provided by Clearbit</a>
                </p>
            </div>
        </div>
    );
};
