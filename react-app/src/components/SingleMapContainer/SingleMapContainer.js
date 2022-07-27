import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const SingleMapContainer = ({ latitude, longitude }) => {

    console.log(`line 6 ${latitude} ${longitude}`)
    const mapStyles = {
        height: "30vh",
        width: "50%"
    };

    const defaultCenter = {
        lat: latitude, lng: longitude
    }


    const pin = {
        lat: latitude, lng: longitude
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={defaultCenter}
            >

                <Marker
                    position={pin}
                />
            </GoogleMap>

        </div>
    )
}

export default SingleMapContainer;