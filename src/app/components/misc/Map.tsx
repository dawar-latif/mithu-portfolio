// app/components/Map.tsx
"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
  restaurants: {
    id: number;
    name: string;
    location: { lat: number; lng: number };
  }[]; // Array of restaurant objects with location
  mapContainerStyle?: React.CSSProperties; // Style for the map container div
  mapOptions?: google.maps.MapOptions; // Options for the Google Map instance
}

export default function Map({
  apiKey,
  center,
  zoom,
  restaurants,
  mapContainerStyle = { width: "100%", height: "100%" }, // Default style to fill parent
  mapOptions = { disableDefaultUI: true, zoomControl: true }, // Default options
}: MapProps) {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {/* Map Markers */}
        {restaurants.map((res) =>
          res.location?.lat && res.location?.lng ? (
            <Marker
              key={`marker-${res.id}`}
              position={{ lat: res.location.lat, lng: res.location.lng }}
              title={res.name} // Use restaurant name for marker title
            />
          ) : null
        )}
      </GoogleMap>
    </LoadScript>
  );
}
