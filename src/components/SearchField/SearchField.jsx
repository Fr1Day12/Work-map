import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";
import extractAddress from "../../helpers/extractAddress";

const SearchField = ({ setCenter }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        bounded: 1,
        viewbox: "51.7598,55.6716,51.8891,55.6016",
      },
    });

    const searchControl = new GeoSearchControl({
      provider,
      showMarker: true,
      showPopup: false,
      marker: {
        icon: new L.Icon.Default(),
        draggable: false,
      },
      popupFormat: ({ query, result }) => {
        const addressFormat = extractAddress(result.label);
        return addressFormat;
      },

      resultFormat: ({ result }) => {
        const addressForm = extractAddress(result.label);
        return addressForm;
      },
      maxMarkers: 1,
      keepResult: true,
    });

    map.addControl(searchControl);

    map.on("geosearch/showlocation", (result) => {
      if (
        result &&
        result.location &&
        result.location.lat !== undefined &&
        result.location.lng !== undefined
      ) {
        setCenter([result.location.lat, result.location.lng]);
      } else {
        console.warn("Invalid location result from geosearch:", result);
      }
    });

    return () => map.removeControl(searchControl);
  }, [map, setCenter]);

  return null;
};

export default SearchField;
