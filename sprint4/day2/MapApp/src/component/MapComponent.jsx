import { useEffect } from "react";
import { useState } from "react";
import { MapContainer, Marker } from "react-leaflet";

export const MapComponent = () => {
  const [userLocation, setUserLocation] = useState([0, 0]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("error getting location", error);
      }
    );
  }, []);

  return (
    <MapContainer
      center={userLocation}
      zoom={10}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={userLocation}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
};
