import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const SingleMapContainer = ({ latitude, longitude }) => {
    const mapStyles = {
        height: "200px",
        width: "350px",
    };

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (mapKey){
            setLoaded(true);
        }
    });

    const defaultCenter = {
        lat: latitude, lng: longitude
    }
    const mapKey = useSelector(state => state.mapsState.key);

    const pin = {
        lat: latitude, lng: longitude
    }

    return (
        <div>
            {loaded &&
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={defaultCenter}
                apiKey={mapKey}
            >

                <Marker
                    position={pin}
                />
            </GoogleMap>
            }
        </div>
    )
}

export default SingleMapContainer;