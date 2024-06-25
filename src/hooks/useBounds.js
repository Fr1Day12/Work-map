import { useEffect } from "react";

const SetBounds = () => {
  const map = useMap();
  useEffect(() => {
    const southWest = L.latLng(55.5, 51.7);
    const northEast = L.latLng(55.7, 51.9);
    const bounds = L.latLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);
    map.setMinZoom(12);
    map.setMaxZoom(18);
    map.fitBounds(bounds);

    const checkBounds = () => {
      if (map.getZoom() < 12) {
        map.setZoom(12);
      }
      if (!bounds.contains(map.getCenter())) {
        map.panInsideBounds(bounds, { animate: false });
      }
    };

    map.on("zoomend", checkBounds);
    map.on("dragend", checkBounds);

    return () => {
      map.off("zoomend", checkBounds);
      map.off("dragend", checkBounds);
    };
  }, [map]);
  return null;
};

export default SetBounds;
