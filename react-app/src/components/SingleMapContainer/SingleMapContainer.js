import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const SingleMapContainer = ({ latitude, longitude }) => {
    const mapStyles = {
        height: "200px",
        width: "350px",
    };

    const defaultCenter = {
        lat: latitude, lng: longitude
    }
    const mapKey = useSelector(state => state.mapsState.key);


    const pin = {
        lat: latitude, lng: longitude
    }

    return (
        <div>
            {mapKey &&
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