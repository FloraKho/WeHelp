import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

//need to pass in an array of latlng
const MultiMapOverview = (setOfLatLng) => {

    console.log(`inside multimapoverview`)
    const mapStyles = {
        height: "100vh",
        width: "30%"
    };
    console.log(Object.values(setOfLatLng))
    console.log(Object.values(setOfLatLng)[0][0])
    let meanLat = ()=>{
        let total = 0;
        for (let i = 0; i < setOfLatLng[0].length; i++){
            total += setOfLatLng[0][i].lat
        }
        return total/setOfLatLng[0].length;
    }
    let meanLng = () => {
        let total = 0;
        for (let i = 0; i < setOfLatLng[0].length; i++) {
            total += setOfLatLng[0][i].lng
        }
        return total / setOfLatLng[0].length;
    }
    // console.log(setOfLatLng[0])
    const defaultCenter = {
        lat: 35, lng: 35
    }


    console.log(defaultCenter);


    return (
        <div>
            {console.log(`hit the multimap render`)}
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={16}
                center={defaultCenter}
            >

                {/* <Marker
                    position={pin}
                /> */}
            </GoogleMap>

        </div>
    )
}

export default MultiMapOverview;