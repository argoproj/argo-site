import * as React from 'react';
require('./solar-system.scss');

export const SolarSystem = ({width, height}: {width: string, height: string}) => (
    <div className='solar-system' style={{width, height}}>
        <div className='star-container'>
            {[...Array(300).keys()].map((i) => <div key={i} className='star'/>)}
        </div>

        <div className='container'>

        <div className='sun'/>
            <div className='mercurys-orbit'>
                <div className='mercury'/>
            </div>

            <div className='venus-orbit'>
                <div className='venus'/>
            </div>

            <div className='earths-orbit'>
                <div className='earth'/>
            </div>

            <div className='mars-orbit'>
                <div className='mars'/>
            </div>

            <div className='jupiters-orbit'>
                <div className='jupiter'/>
            </div>

            <div className='saturns-orbit'>
                <div className='saturn'/>
            </div>

            <div className='uranus-orbit'>
                <div className='uranus'/>
            </div>

            <div className='neptunes-orbit'>
                <div className='neptune'/>
            </div>

            <div className='plutos-orbit'>
               <div className='pluto'/>
            </div>
        </div>
    </div>
);
