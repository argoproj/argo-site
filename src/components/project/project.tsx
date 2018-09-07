import Link from 'gatsby-link';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Animations, AnimationType } from '../animations/animations';
import { Markdown } from '../markdown/markdown';
import { PROJECTS } from '../projects';

require('./project.scss');

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
                <meta name='keywords' content={project.keywords.join(',')}/>
            </Helmet>
            <div className='project__header'>
                <div className='main__container'>
                    <div className='row'>
                        <div className='columns small-8 project__headline-container'>
                            <div className='project__headline'>
                                <h1>{project.title}</h1>
                                <h2>{project.description}</h2>
                                <Link className='btn btn--filled' to={`/docs/${props.proj}/readme.html`}>Docs</Link>
                            </div>
                            <Animations type={props.animationType} width='800px' height='500px'/>
                        </div>
                        <div className='columns small-4'/>
                    </div>
                </div>
            </div>
            <div className='main__container'>
                <Markdown markdownHtml={markdownHtml}/>
            </div>
        </div>
    );
};
