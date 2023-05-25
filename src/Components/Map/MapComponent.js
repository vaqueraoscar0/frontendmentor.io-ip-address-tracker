import {MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import iconlocation from '../images/icon-location.svg'


export default function MapComponent({coordinates}){
    const markerIcon = new L.Icon({iconUrl: iconlocation})
    let state = {
        keyMAP: Math.random(),
    };

    return(
        <MapContainer
            key={state.keyMAP}
            center={[coordinates.lat, coordinates.lng]}
            zoom={18}
            style={{width: '100%', height: '100%', zIndex: '0'}}
        >
            <TileLayer
                attribution="Google Maps"
                url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
            />
            <Marker position={[coordinates.lat, coordinates.lng]} icon={markerIcon}>

            </Marker>

        </MapContainer>
    )
}