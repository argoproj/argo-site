import * as React from 'react';
import { Helmet } from 'react-helmet';

const argoWheelImg = require('../../assets/images/argo-wheel.png');
const logos = ['appD.png', 'Heron.png', 'Rockset.png', 'Shibumi.png', 'Hyperpilot.png', 'Pulsar.png', 'Plus3.png', 'ApacheBookkeeper.png'].map(
    (name) => ({ name, src: require(`../../assets/images/logos/${name}`)}));

require('./home.scss');

const DESCRIPTION = 'Argo is an open source container-native workflow engine for developers working with Kubernetes to orchestrate pipelines and jobs' +
' for continuous integration, deployment, and microservices.';

export const Home = () => (
    <div className='home'>
        <Helmet>
            <meta name='description' content={DESCRIPTION}/>
        </Helmet>
        <div className='home__intro'>
            <div id='stars'/>
            <div id='stars2'/>
            <div id='stars3'/>
            <div className='main__container'>
                <div className='row'>
                    <div className='columns small-8'>
                        <h1>The workflow engine<br/> for Kubernetes</h1>
                        <h2>Get stuff done with Kubernetes using container-native workflows</h2>
                        <div className='home__btns'>
                            <a className='home__btn home__btn--filled' href='get-started'>Get Started</a>
                            <a className='home__btn home__btn--border' href='https://github.com/argoproj/argo' target='_blank'>
                                <i className='fa fa-github'/> GitHub
                            </a>
                        </div>
                    </div>
                    <div className='columns small-4'>
                        <img src={argoWheelImg} alt='Argo'/>
                    </div>
                </div>
                <div className='home__boxes'>
                    <a className='home__box'>
                        <h3>Continuous Integration</h3>
                        <p>Run a container-native CI pipeline on Kubernetes doing build and multiple tests in parallel.</p>
                    </a>
                    <a className='home__box'>
                        <h3>Continuous Delivery</h3>
                        <p>Deploy and manage microservices based application on Kubernetes.
                        </p>
                    </a>
                    <a className='home__box'>
                        <h3>Docker in Docker</h3>
                        <p>Run docker commands in container-native, CI pipeline on Kubernetes.</p>
                    </a>
                    <a className='home__box'>
                        <h3>Machine Learning</h3>
                        <p>Run a compute intensive Machine Learning Pipeline on Kubernetes.</p>
                    </a>
                    <a className='home__box'>
                        <h3>Data Processing</h3>
                        <p>Run complex, data processing workflows on Kubernetes. Coming soon...</p>
                    </a>
                    <a className='home__box' href='https://github.com/argoproj/argo/tree/master/examples' target='_blank'>
                        <h3>Contribute example workflows</h3>
                        <p>Please contribute interesting example workflows.</p>
                    </a>
                </div>
            </div>
        </div>
        <div className='main__container'>
            <div className='home__bar'>
                <a className='pull-right home__bar-additional' href='https://github.com/argoproj/argo/blob/master/demo.md' target='_blank'>
                    <i className='fa fa-github'/> GET ARGO
                </a>
                <div className='home__bar-content'>
                    Argo as Kubernetes Custom Resource Definition is available now.
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
