import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";
import SearchField from "../SearchField/SearchField";
import style from "./style.module.css";
import Image from "../Image/Image";
import { selectIsAuth } from "../../redux/slices/auth";
import { useSelector } from "react-redux";

const MapComponent = () => {
  const isAuth = useSelector(selectIsAuth);
  const [center, setCenter] = useState([55.6366, 51.8245]);
  const [showInitialMarker, setShowInitialMarker] = useState(false);
  const mapRef = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={center}
        zoom={14}
        className={style.map}
        ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {}
        {showInitialMarker &&
          center &&
          center[0] !== undefined &&
          center[1] !== undefined && <Marker position={center}></Marker>}
        <SearchField
          setCenter={(newCenter) => {
            setCenter(newCenter);
            setShowInitialMarker(true);
          }}
        />
        {!isAuth && <Image />}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
