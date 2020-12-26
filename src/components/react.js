import React, { useState, useEffect } from "react";
import '../css/style.css'
import { GoogleMap, LoadScript, Marker,InfoWindow } from "@react-google-maps/api";
import places from '../places.json'
require('dotenv').config();
export default function Map() {
const [selected,setSelected ] = useState({});

   const defaultCenter = {
    lat: -1.2845056,
   lng: 36.817786
  }
  
  
   var icon = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
  };
  const mapStyles = {
    height: "100vh",
    width: "100%"
  };

 const [currentPosition, setCurrentPosition] = useState({});

  
  const onSelect = place => {
    setSelected(place);
   
  }

  const success = (position) => {
    let currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(success)
  });

  
    return (

<div>
         


  
      <div  style={{ height: '10vh', width: '100%' }}  className="card-img p-2  mt-5" >
  {/* maps goes here */}

     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_GoogleMapsApiKey}
       
        >
      <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
         
          center={defaultCenter}
         
          >
         {
            places.map((place,i )=> {
              return (
                <div key={i} >
                    <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"SOMA"}
                icon={icon}
                position={currentPosition}
               
                
              />
               <Marker key={place.name} position={{lat:place.lat,lng:place.long}}
                 onClick={() => onSelect(place)}
               />
            
                </div>
             
              )
            }
            
            )
         }
           {
            selected.id && 
            (
              <InfoWindow
             position={{lat:selected.lat,lng:selected.long}}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <h6 className="text-dark">{selected.restaurantName}</h6>
            </InfoWindow>
            )
         }
         
     </GoogleMap>
     </LoadScript>
  </div>
 
      </div>  
    )
  
}


