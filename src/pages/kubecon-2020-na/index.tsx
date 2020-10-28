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
                                <h2>Grab your swag and found information about Argo talks here!</h2>
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
                            <img src='//user-images.githubusercontent.com/426437/97396387-35b9bc00-18a4-11eb-87cc-a0639d1a4574.png'/>
                        </div>
                        <div className='columns small-6'>
                            <img src='//user-images.githubusercontent.com/426437/97397752-3c95fe00-18a7-11eb-98e8-0254a4f71cc8.png'/>
                        </div>
                    </div>

                    <a className='btn btn--filled' href='https://github.com/argoproj/argo-site/files/5454289/backgrounds.zip'>One click downloads all backgrounds</a>

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
                        Use the following link to learn more: <a href='https://talenteq.intuit.com/Kubecon2020'>https://talenteq.intuit.com/Kubecon2020</a>
                    </p>
                </div>
            </div>
        </div>
    </Main>
);
