import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useLoadScript, GoogleMap, Marker, InfoWindow, useGoogleMap } from "@react-google-maps/api";
import './MultiMap.css'
import { useDispatch, useSelector } from 'react-redux';
import { getKey, loadApiKey } from '../../store/map';
//need to pass in an array of latlng
const MultiMapOverview = (setOfLatLng) => {


    // const dispatch = useDispatch();
    // console.log(`inside multimapoverview`)
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };
    // console.log(Object.values(setOfLatLng))
    // console.log(Object.values(setOfLatLng)[0][0])

    let allCoordinates = Object.values(setOfLatLng)[0]
    // console.log(allCoordinates);

    const mapKey = useSelector(state=>state.mapsState.key);
    // console.log(`line 21 ${mapKey}`)

    let accumLat = 0;
    let accumLng = 0;
    let minLat = Infinity;
    let maxLat = -Infinity;
    let minLng = Infinity;
    let maxLng = -Infinity;
    for (let i = 0; i < allCoordinates.length; i++) {
        //lat
        accumLat += Object.values(allCoordinates[i])[0];
        if (Object.values(allCoordinates[i])[0] > maxLat) {
            maxLat = Object.values(allCoordinates[i])[0];
        }
        if (Object.values(allCoordinates[i])[0] < minLat) {
            minLat = Object.values(allCoordinates[i])[0];
        }

        //lng
        accumLng += Object.values(allCoordinates[i])[1];
        if (Object.values(allCoordinates[i])[1] > maxLng) {
            maxLng = Object.values(allCoordinates[i])[1];
        }
        if (Object.values(allCoordinates[i])[1] < minLng) {
            minLng = Object.values(allCoordinates[i])[1];
        }
    }


    const latlngBoundaries = { north: maxLat, south: minLat, west: minLng, east: maxLat };
    // console.log(`line 25 ${accumLat}, ${accumLng}`)
    let avgLat = accumLat / allCoordinates.length;
    let avgLng = accumLng / allCoordinates.length;

    const defaultCenter = {
        lat: avgLat, lng: avgLng
    }


    // let sw = {lat: minLat, lng: minLng};
    // let ne = {lat: maxLat, lng: maxLng};

    // let mapBounds = new window.google.maps.LatLngBounds([sw, ne]);

    // let load = (map)=>{
    //     map.panToBounds(mapBounds);
    //     map.fitToBounds(mapBounds);
    // }

    // useEffect(() => {
    // }, [dispatch])


    //
    return (
        latlngBoundaries &&
        <div>
            {/* {console.log(latlngBoundaries)} */}
            <div style={{ width: "688px", height: "1px", zIndex: '-99', marginTop: '78px' }}></div>
            {latlngBoundaries.east !== 0 &&
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    center={defaultCenter}
                    zoom={7}
                    apiKey={mapKey}
                >
                    {allCoordinates.map(biz => (
                        <Marker
                            position={{ lat: Object.values(biz)[0], lng: Object.values(biz)[1] }}
                        />
                    )
                    )}
                </GoogleMap>
            }

        </div>

    )
}

export default MultiMapOverview;