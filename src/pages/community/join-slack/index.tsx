import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Main } from '../../../components';

const cncfSlackLink = 'https://slack.cncf.io/';
const channelLinks: {[channel: string]: string} = {
    'argo-workflows': 'https://cloud-native.slack.com/archives/C01QW9QSSSK',
    'argo-cd': 'https://cloud-native.slack.com/archives/C01TSERG0KZ',
    'argo-rollouts': 'https://cloud-native.slack.com/archives/C01U781DW2E',
    'argo-events': 'https://cloud-native.slack.com/archives/C01TNKD6KL6',
    'argo-cd-notifications': 'https://cloud-native.slack.com/archives/C01UKS2NKK3',
    'argo-cd-appset': 'https://cloud-native.slack.com/archives/C01U45M2SVB',
    'argo-sig-ui': 'https://cloud-native.slack.com/archives/C01TR44A8NB',
    'argo-cd-autopilot': 'https://cloud-native.slack.com/archives/C0207C47D0X',
};

export default () => (
    <Main>
        <div className='project kubecon'>
            <Helmet>
                <title>Slack | Argo</title>
            </Helmet>
            <div className='project__header'>
                <div className='main__container'>
                    <div className='row'>
                        <div className='columns small-8 project__headline-container'>
                            <div className='project__headline'>
                                <h1>Slack</h1>
                                <h2>Talk with us on the CNCF Slack</h2>
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
                    <h2>CNCF Slack</h2>
                    <div>
                        <p>If you have any questions you are always welcome in Argoproj channels on the CNCF Slack:</p>
                        <ul>
                            <li>Navigate to <a href={cncfSlackLink}>{cncfSlackLink}</a> and create your Slack account.</li>
                            <li>Find us in one of the following channels and ask your question: {Object.keys(channelLinks).map((channel, i) => (
                                <span key={channel}>
                                    {i != 0 && <span>,</span>} <a href={channelLinks[channel]}>#{channel}</a>
                                </span>
                            ))} </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Main>
);
