import Link from 'gatsby-link';
import * as React from 'react';

import { PROJECTS } from '../projects';

const argoWheelImg = require('../../assets/images/argo-wheel.png');
const communities = {
  'intuit.png': 'https://www.intuit.com/',
  'blackrock.png': 'https://www.blackrock.com/',
  'google.png': 'https://www.google.com/intl/en/about/our-company/',
  'nvidia.png': 'https://www.nvidia.com/',
  'datadog.png': 'https://www.datadoghq.com/',
  'cyrus.png': 'https://cyrusbio.com/',
  'gladly.png': 'https://gladly.com/',
  'corefilling.png': 'https://www.corefiling.com/',
  'adoby.png': 'https://www.adobe.com/',
  'interline.png': 'https://www.interline.io/blog/scaling-openstreetmap-data-workflows/',
  'pfn.png': 'https://preferred-networks.jp/en/',
  'tesla.png': 'https://tesla.com/',
};
const logos = Object.keys(communities).map((name, index) => ({ name, src: require(`../../assets/images/logos/${name}`), href: communities[name]}));

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
                            <a href={item.href} target='_blank'>
                              <img src={item.src} alt={item.name}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);
