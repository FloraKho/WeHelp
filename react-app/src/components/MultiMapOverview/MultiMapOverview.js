import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useLoadScript, GoogleMap, Marker,InfoWindow, useGoogleMap } from "@react-google-maps/api";
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
    let minLat = Infinity;
    let maxLat = -Infinity;
    let minLng = Infinity;
    let maxLng = -Infinity;
    for (let i = 0; i < allCoordinates.length; i++){
        //lat
        accumLat += Object.values(allCoordinates[i])[0];
        if (Object.values(allCoordinates[i])[0]>maxLat){
            maxLat = Object.values(allCoordinates[i])[0];
        }
        if (Object.values(allCoordinates[i])[0]<minLat){
            minLat = Object.values(allCoordinates[i])[0];
        }

        //lng
        accumLng += Object.values(allCoordinates[i])[1];
        if (Object.values(allCoordinates[i])[1]>maxLng){
            maxLng = Object.values(allCoordinates[i])[1];
        }
        if (Object.values(allCoordinates[i])[1]<minLng){
            minLng=Object.values(allCoordinates[i])[1];
        }
    }


    const latlngBoundaries={north:maxLat, south:minLat, west:minLng, east:maxLat};
    // console.log(`line 25 ${accumLat}, ${accumLng}`)
    let avgLat = accumLat/allCoordinates.length;
    let avgLng = accumLng/allCoordinates.length;

    const defaultCenter = {
        lat: avgLat, lng: avgLng
    }

    // let load = (bound)=>{
    //     google.maps.map.fitBounds(bound);
    // }
    // function getBoundsZoomLevel(boundLiteral, mapDim) {
    //     var WORLD_DIM = { height: 256, width: 256 };
    //     var ZOOM_MAX = 21;

    //     function latRad(lat) {
    //         var sin = Math.sin(lat * Math.PI / 180);
    //         var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    //         return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    //     }

    //     function zoom(mapPx, worldPx, fraction) {
    //         return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
    //     }

    //     var ne = { lat: boundLiteral.maxLat, lng: boundLiteral.minLng} ;
    //     var sw = { lat: boundLiteral.minLat, lng: boundLiteral.maxLng};

    //     var latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;

    //     var lngDiff = ne.lng() - sw.lng();
    //     var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

    //     var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    //     var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);

    //     return Math.min(latZoom, lngZoom, ZOOM_MAX);
    // }

    return (
        latlngBoundaries&&
        <div>
            {console.log (latlngBoundaries)}
            <div style={{width: "688px", height:"1px"}}></div>
            {latlngBoundaries.east!==0 &&
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                // panToBounds={latlngBoundaries}
                zoom={7}
            >
            {allCoordinates.map(biz=> (
                <Marker
                    position={{lat:Object.values(biz)[0], lng: Object.values(biz)[1]}}
                />
            )
            )}
            </GoogleMap>
            }

        </div>
        
    )
}

export default MultiMapOverview;