import * as React from 'react';

require('./markdown.scss');

export const Markdown = (props: { markdownHtml: string }) => (
    <div className='markdown' dangerouslySetInnerHTML={{__html: props.markdownHtml}} />
);
