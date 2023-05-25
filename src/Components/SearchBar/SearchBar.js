import React, {useState} from 'react';
import './SearchBar.css'
import iconArrow from '../images/icon-arrow.svg'

function SearchBar({setIpAddress, getAddress}) {
    const [newIPAddress, setNewIPAddress] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIpAddress(newIPAddress)
        getAddress()
    }

    return (
        <div className={'searchBar'}>
            <label htmlFor={'site-search'}>IP Address Tracker</label>
            <div className={'searchBarLayout'}>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type={"search"} id={'site-search'} placeholder={'Search for any IP address or domain'} onChange={(e) => setNewIPAddress(e.target.value)}/>
                    <button type={"submit"}><img src={iconArrow} alt={'arrow'}/></button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;