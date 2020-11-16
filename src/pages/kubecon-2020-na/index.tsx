import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Main } from '../../components';

require('./kubecon.scss');

const talks: {title: string, link: string}[] = [{
    title: 'Manage Session How to Multiply the Power of Argo Projects By Using Them Together - Hong Wang & Alexander Matyushentsev, Intuit',
    link: 'https://sched.co/ekGL',
}, {
    title: 'Eating Your Vegetables: How to Manage 2.5 Million Lines of YAML - Daniel Thomson & Jesse Suen, Intuit',
    link: 'https://sched.co/ekAg',
}, {
    title: 'Constructing Chaos Workflows with Argo and LitmusChaos - Umasankar Mukkara, MayaData & Sumit Nagal, Intuit',
    link: 'https://sched.co/ekDC',
}];

const demos = [
    'https://www.youtube.com/embed/TZgLkCFQ2tk',
    'https://www.youtube.com/embed/Aqi1zyTpM44',
    'https://www.youtube.com/embed/U4tCYcCK20w',
    'https://www.youtube.com/embed/hIL0E2gLkf8',
];

export default () => (
    <Main>
        <div className='project kubecon'>
            <Helmet>
                <title>Kubecon | Argo</title>
            </Helmet>
            <div className='project__header'>
                <div className='main__container'>
                    <div className='row'>
                        <div className='columns small-8 project__headline-container'>
                            <div className='project__headline'>
                                <h1>Kubecon 2020 NA</h1>
                                <h2>Grab your swag and find information about Argo talks here!</h2>
                            </div>
                        </div>
                        <div className='columns small-4'>
                            <img className='kubecon__logo' src={require('./logo.svg')}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__container'>
                <div className='kubecon__content'>
                    <h2>Argo Virtual Backgrounds</h2>
                    <div className='row'>
                        <div className='columns small-6'>
                            <a href='https://user-images.githubusercontent.com/426437/97396387-35b9bc00-18a4-11eb-87cc-a0639d1a4574.png'>
                                <img src={require('./1.png')}/>
                            </a>
                        </div>
                        <div className='columns small-6'>
                            <a href='//user-images.githubusercontent.com/426437/98578873-bd270800-2272-11eb-8ca3-8e4370bf8fb3.png'>
                                <img src={require('./2.png')}/>
                            </a>
                        </div>
                    </div>
                    <br/>

                    <a className='btn btn--filled' href='https://github.com/argoproj/argo-site/files/5512444/backgrounds.zip'>One click downloads all backgrounds</a>

                    <h2>Demos</h2>
                    <div className='row'>
                        {demos.map((url) => (
                            <div key={url} className='columns small-6'>
                                <iframe
                                    width='350'
                                    height='170'
                                    src={url}
                                    frameBorder='0'
                                    allowFullScreen={true}
                                    />
                            </div>
                        ))}
                    </div>
                    <br/>

                    <h2>Argo Talks</h2>
                    <ul>
                        {talks.map((talk, i) => (
                            <li key={i}>
                                <a  href={talk.link}>{talk.title}</a>
                            </li>
                        ))}
                    </ul>

                    <h2>Argo Needs Your Help!</h2>
                    <p>
                        📢 Intuit is hiring great engineers to work on open-source projects in the Kubernetes ecosystem. <br/>
                        Use the following link to apply: <a href='https://talenteq.intuit.com/Kubecon2020'>https://talenteq.intuit.com/Kubecon2020</a>
                    </p>
                </div>
            </div>
        </div>
    </Main>
);
