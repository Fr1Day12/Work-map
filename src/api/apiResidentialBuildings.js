import osmtogeojson from "osmtogeojson";

const fetchResidentialBuildings = async () => {
  const query = `
    [out:json];
    (
      way["building"="residential"](55.58, 51.78, 55.685, 51.9);
    );
    out body;
    >;
    out skel qt;
  `;

  const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
    query
  )}`;

  const response = await fetch(url);
  const data = await response.json();

  const geoData = osmtogeojson(data);

  return geoData;
};

export default fetchResidentialBuildings;
