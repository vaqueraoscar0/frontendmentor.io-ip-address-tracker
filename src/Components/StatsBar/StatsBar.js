import React from 'react';
import './StatsBar.css'

function StatsBar({ISP, location, ipAddress, timeZone}) {
    return (
        <div className={'statsBar'}>
            <div className={'stats-box-text'}>
                <h6>IP ADDRESS</h6>
                <p>{ipAddress}</p>
            </div>

            <div className={"vl"}/>

            <div className={'stats-box-text1'}>
                <h6>LOCATION</h6>
                <p>{location}</p>

            </div>

            <div className={"vl"}/>

            <div className={'stats-box-text1'}>
                <h6>TIMEZONE</h6>
                <p>UTC{timeZone}</p>

            </div>

            <div className={"vl"}/>

            <div className={'stats-box-text1'}>
                <h6>ISP</h6>
                <p>{ISP}</p>
            </div>

        </div>
    );
}

export default StatsBar;