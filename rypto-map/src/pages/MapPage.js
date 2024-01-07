import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MarkersContext } from './MarkersContext';

const MapPage = () => {
  const markersContext = useContext(MarkersContext);
  console.log("MarkersContext:", markersContext);
  const { markers } = markersContext;
  
  const defaultPosition = [33.77005, -118.19374]; // Long Beach, CA

  return (
    <MapContainer center={defaultPosition} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPage; 