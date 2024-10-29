import React, { useState } from "react";
import './HostCard.css';

const HostCard = ({ host }) => {

    const hostImg = host.hostAvatar[0]?.url
    ? `http://localhost:1337${host.hostAvatar[0].url}`
    : '';

    console.log(host)

    return (
        <div className="host-card">
            <h3>{host.hostName}</h3>
            <div>
                {hostImg && <img
                src={hostImg}
                onError={(e) => console.error('Image load error: ', e)}
                className="host-img"
                />}
            </div>
        </div>
    )
}

export default HostCard