import * as React from 'react';
import { SolarSystem } from './solar-system';

const connections = require('./connections');
const neuralNetwork = require('./neural-network');
const particles = require('./3d-particles');
const three = require('three');

const jqWrapper = (ctx: HTMLElement | string, container: HTMLElement) => {
    let el: HTMLElement;
    if (typeof ctx === 'string') {
        if (ctx === 'body') {
            el = container;
        } else {
            el = container.querySelector(ctx);
        }
    } else {
        el = ctx as HTMLElement;
    }
    return {
        height() {
            return el.offsetHeight;
        },
        width() {
            return el.offsetWidth;
        },
        append(child: HTMLElement) {
            el.appendChild(child);
        },
    };
};

export type AnimationType = 'connections' | 'neural-network' | 'solar-system' | '3d-particles';

export class Animations extends React.PureComponent<{type: AnimationType, width: string, height: string}> {
    private disposable: any;

    public render() {
        if (this.props.type === 'solar-system') {
            return (
                <div className='animations'>
                    <SolarSystem width={this.props.width} height={this.props.height}/>
                </div>
            );
        }
        return (
        <div className='animations' style={{width: this.props.width, height: this.props.height, margin: '0 auto'}} ref={(c) => {
            if (this.disposable) {
                this.disposable();
            }
            if (c) {
                const wrapper: any = (ctx: HTMLElement) => {
                    return jqWrapper(ctx, c);
                };
                wrapper.each = (input: any[], callback: any) => {
                    input.forEach((item, i) => callback(i, item));
                };
                switch (this.props.type) {
                    case 'connections':
                    this.disposable = this.renderConnections(wrapper, c);
                    break;

                    case 'neural-network':
                    this.disposable = this.renderNeuralNetwork(wrapper, c);
                    break;

                    case '3d-particles':
                    this.disposable = this.renderParticles(c);
                    break;

                    default:
                        throw Error(`Animation type ${this.props.type} is not supported`);
                }
            }
        }}/>);
    }

    private renderConnections(wrapper: any, container: any) {
        connections(window.document, container, wrapper);
    }

    private renderNeuralNetwork(wrapper: any, container: any) {
        const c = document.createElement('canvas');
        c.width = container.offsetWidth;
        c.height = container.offsetHeight;
        container.innerWidth = container.offsetWidth;
        container.innerHeight = container.offsetHeight;
        container.appendChild(c);
        const timeouts: number[] = [];
        container.setTimeout = (callback: any, timeout: any) => {
            timeouts.push(window.setTimeout(callback, timeout));
        };
        const animationFrames: number[] = [];
        container.requestAnimationFrame = (anim: any) => {
            animationFrames.push(window.requestAnimationFrame(anim));
        };
        neuralNetwork(c, container, wrapper);

        const ctx = c.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.beginPath();
        ctx.rect(0, 0, c.width, c.height);
        ctx.fill();
        return () => {
            timeouts.forEach((id) => window.clearTimeout(id));
            animationFrames.forEach((id) => window.cancelAnimationFrame(id));
        };
    }

    private renderParticles(container: any) {
        container.innerWidth = container.offsetWidth;
        container.innerHeight = container.offsetHeight;
        particles(container, three, container);
    }
}
