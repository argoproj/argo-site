import Link from 'gatsby-link';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Animations, AnimationType } from '../animations/animations';
import { Markdown } from '../markdown/markdown';
import { PROJECTS } from '../projects';

require('./project.scss');

const argoWheelImg = require('../../assets/images/argo-wheel.png');

export const Project = (props: { proj: string, markdownHtml: string, animationType: AnimationType } & React.Props<any> ) => {
    const markdownHtml = props.markdownHtml.replace(/<a href="((?!http)[^"]+)"/g, (_, group) => {
        return `<a href="docs/${props.proj}/${group}"`;
    });
    const project = PROJECTS[props.proj];
    return (
        <div className='project'>
            <Helmet>
                <title>{project.title} | Argo</title>
                <meta name='description' content={project.description} />
            </Helmet>
            <div className='project__header'>
                <div className='main__container'>
                    <div className='row'>
                        <div className='columns small-8 project__headline-container'>
                            <div className='project__animation'>
                                <Animations type={props.animationType} width='800px' height='500px'/>
                            </div>
                            <div className='project__headline'>
                                <h1>{project.title}</h1>
                                <h2>{project.description}</h2>
                            </div>
                        </div>
                        <div className='columns small-4'>
                            <img src={argoWheelImg} alt='Argo'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main__container'>
                <div style={{ textAlign: 'right' }}>
                    <Link className='project__doc-link' to={`/docs/${props.proj}/readme.html`}>Docs</Link>
                </div>
                <Markdown markdownHtml={markdownHtml}/>
            </div>
        </div>
    );
};
