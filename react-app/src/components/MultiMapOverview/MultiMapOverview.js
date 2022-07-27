import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//need to pass in an array of latlng
const MultiMapOverview = (setOfLatLng) => {

    console.log(`inside multimapoverview`)
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };
    console.log(Object.values(setOfLatLng))
    console.log(Object.values(setOfLatLng)[0][0])
    
    let allCoordinates = Object.values(setOfLatLng)[0]
    console.log (allCoordinates);


    let accumLat=0;
    let accumLng=0;
    for (let i = 0; i < allCoordinates.length; i++){
        accumLat += Object.values(allCoordinates[i])[0];
        accumLng += Object.values(allCoordinates[i])[1];
    }
    console.log(`line 25 ${accumLat}, ${accumLng}`)
    let avgLat = accumLat/allCoordinates.length;
    let avgLng = accumLng/allCoordinates.length;

    const defaultCenter = {
        lat: avgLat, lng: avgLng
    }


    console.log(defaultCenter);


    return (
        <div>
            Map is here!ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh Placeholder cuz the space ain't good for now 
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
                {allCoordinates.map(biz=> (
                    <Marker
                        position={{lat:Object.values(biz)[0], lng: Object.values(biz)[1]}}
                    />
                )
                )}
            </GoogleMap>

        </div>
    )
}

export default MultiMapOverview;