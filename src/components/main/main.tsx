import * as classNames from 'classnames';
import Link from 'gatsby-link';
import { push } from 'gatsby-link';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { PROJECTS  } from '../projects';

require('./main.scss');

const logoSvg = require('../../assets/images/logo.svg');
// tslint:disable:max-line-length
const logoTextSvg = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 969.97 386.5'>
        <g id='Layer_2' data-name='Layer 2'>
            <g id='Layer_1-2' data-name='Layer 1'>
                <path className='cls-1' d='M254.5,132.5v98c0,14.5-10.5,25-25,25-10,0-24-10.5-24-25-21.5,18-45.5,25-74,25C61,255.5,5,203,5,132.5S61,6,131.5,6,254.5,62,254.5,132.5Zm-49,0c0-42-32-77.5-74-77.5S54,90.5,54,132.5s35.5,74,77.5,74S205.5,174.5,205.5,132.5Z'/>
                <path className='cls-1' d='M435,30a25.07,25.07,0,0,1-25,25,76,76,0,0,0-76,76V231.5c0,13.5-11,25-24.5,25a25.07,25.07,0,0,1-25-25V131A125.58,125.58,0,0,1,410,5.5,24.65,24.65,0,0,1,435,30Z'/>
                <path className='cls-1' d='M684.48,256c0,69-56.5,125.5-125.5,125.5-48.5,0-91.5-27-113-70.5a24.44,24.44,0,0,1,11.5-33,24.82,24.82,0,0,1,33,11c13,26.5,39,43,68.5,43,41.5,0,75-33.5,76-74.5V230c-21.5,16-47.5,26-76,26a125.5,125.5,0,1,1,125.5-125.5ZM635,130.5c0-42-34.5-76-76-76a76,76,0,0,0-76,76c0,41.5,34,76,76,76C600.48,206.5,635,172,635,130.5Z'/>
                <path className='cls-1' d='M714,130.5A125.5,125.5,0,1,1,839.47,256C770.47,256,714,199.5,714,130.5Zm49.5,0c0,41.5,34,76,76,76s76-34.5,76-76a76,76,0,0,0-152,0Z'/>
            </g>
        </g>
    </svg>
);
// tslint:enable:max-line-length

export class Main extends React.Component<{transparentHeader?: boolean}, {showNav: boolean, scrolled: boolean}> {

    private onScrollHandler: () => any;

    constructor(props: {})  {
        super(props);
        this.state = { showNav: false, scrolled: false };
        this.onScrollHandler = this.onScroll.bind(this);
    }

    public componentDidMount() {
        if (this.props.transparentHeader) {
            window.addEventListener('scroll', this.onScrollHandler);
        }
    }

    public componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollHandler);
    }

    public render() {
        return (
            <div className='main'>
                <Helmet title='Argo'>
                    <link rel='icon' type='image/png' href='/favicon/favicon-32x32.png' sizes='32x32'/>
                    <link rel='icon' type='image/png' href='/favicon/favicon-16x16.png' sizes='16x16'/>
                    <script async={true} defer={true} src='https://buttons.github.io/buttons.js'/>
                </Helmet>
                <div className={classNames('main__header', {solid: !this.props.transparentHeader || this.state.scrolled})}>
                    <div className='main__container'>
                        <div className='main__logo' onClick={() => push('/')}>
                            <div className='main__logo-text'>{logoTextSvg}</div>
                        </div>
                        <div className={classNames('main__header-nav', {show: this.state.showNav})}>
                            {Object.keys(PROJECTS).map((proj) => ({proj, info: PROJECTS[proj]})).map(({proj, info}) => (
                                <Link key={`main_${proj}`} to={`${info.link}`}>{info.name}</Link>
                            ))}
                            <a href='https://blog.argoproj.io/' target='_blank'>Blog</a>
                            <a href='http://github.com/argoproj/' target='_blank'>
                                <i className='fa fa-github' /> <span className='github-text'>GitHub Project</span>
                            </a>
                            <a href='https://argoproj.slack.com' target='_blank'>
                                <i className='fa fa-slack' /> <span className='github-text'>GitHub Project</span>
                            </a>
                            <div className='main__header-nav-close' onClick={() => this.setState({ showNav: false })}>
                                <i className='fa fa-times'/>
                            </div>
                        </div>
                        <div className='main__header-nav-toggle' onClick={() => this.setState({ showNav: !this.state.showNav })}>
                            <i className='fa fa-bars'/>
                        </div>
                    </div>
                </div>
                <div className='main__content'>
                    {this.props.children}
                </div>
                <div className='main__footer'>
                    <div className='main__container'>
                        <div className='main__footer-logo'>
                            <img src={logoSvg} alt=''/>
                            <p>We are a <a href='https://www.cncf.io'>Cloud Native Computing Foundation</a> incubating project.</p>
                        </div>
                    </div>
                    <div className='main__trademark'>
                        <div className='main__container'>
                            2020 © Argo Project Authors. All rights reserved. The Linux Foundation has registered trademarks and uses trademarks.
                            For a list of trademarks of The Linux Foundation, please see our Trademark Usage page: <a href='https://www.linuxfoundation.org/trademark-usage'>
                                https://www.linuxfoundation.org/trademark-usage</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private onScroll() {
        this.setState({ scrolled: window.scrollY > 50 });
    }
}
