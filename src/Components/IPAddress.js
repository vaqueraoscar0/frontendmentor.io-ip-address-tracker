import React, {useState} from 'react';
import SearchBar from "./SearchBar/SearchBar";
import StatsBar from "./StatsBar/StatsBar";
import './IPAddress.css'
import MapComponent from "./Map/MapComponent";
import axios from "axios";

function IpAddress() {
    const [ipAddress, setIpAddress] = useState('192.212.174.101')
    const [location, setLocation] = useState('Brooklyn, NY 10001')
    const [timeZone, setTimeZone] = useState('-05:00')
    const [ISP, setISP] = useState('SpaceX Starlink')
    const [coordinates, setCoordinates] = useState({lat: 43.731821389690000, lng: 7.415254288017797})

    function getAddress(){
        axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_MddSY3rcjvYvllJThRz6dPCtNXh9f&ipAddress=${ipAddress}`)
            .then((res) =>{
                setLocation(res.data.location.city + ", " + res.data.location.region + " " + res.data.location.postalCode)
                setTimeZone(res.data.location.timezone)
                setISP(res.data.isp)
                setCoordinates({lat: res.data.location.lat, lng: res.data.location.lng})
        })
    }

    return (
        <div className={'ip-address'}>
            <div className={'search'}>
                <SearchBar setIpAddress={setIpAddress} getAddress={getAddress} />
            </div>
            <div className={'stats'}>
                <StatsBar
                    ipAddress={ipAddress}
                    location={location}
                    timeZone={timeZone}
                    ISP={ISP}/>
            </div>
            <div className={'map'}>
                <MapComponent coordinates={coordinates} />
            </div>
        </div>
    );
}

export default IpAddress;