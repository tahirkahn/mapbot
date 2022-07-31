// import "mapbox-gl/dist/mapbox-gl.css";
// import React, { useState } from "react";
// import DeckGL from "@deck.gl/react";
// import { InteractiveMap, StaticMap } from "react-map-gl";
// import { GeoJsonLayer, LineLayer } from "@deck.gl/layers";
// import  ViewStateProps  from "@deck.gl/core/lib/deck";

// const INITIAL_VIEW_STATE = {
//   latitude: 24.408106,
//   longitude: 54.468756,
//   zoom: 4,
//   pitch: 0,
//   bearing: 0
// };

// const lineData = [
//   {
//     sourcePosition: [24.408106,54.468756],
//     targetPosition: [24.408106, 37.781]
//   }
// ];

// const geojson = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         "marker-color": "#ff0000",
//         "marker-size": "medium",
//         "marker-symbol": ""
//       },
//       geometry: {
//         type: "Point",
//         coordinates: [-122.44477272033691, 37.79906910652822]
//       }
//     },
    
//     {
//       type: "Feature",
//       properties: { "marker-size": "small" },
//       geometry: {
//         type: "MultiPoint",
//         coordinates: [
//           [
//             [54.468756, 24.408106],
//             [54.47512, 24.406358],
//             [54.476991, 24.405801],
//             [54.477749, 24.405573],
//             [54.478467, 24.405379],
//             [54.48351, 24.404046],
//             [54.489212, 24.402458],
//             [54.490213, 24.402182],
//             [54.490246, 24.402173]
//           ]
//         ]
//       }
//     },
//     {
//       type: "Feature",
//       properties: {
//         stroke: "#ff0000",
//         "stroke-width": 10,
//         "stroke-opacity": 1
//       },
//       geometry: {
//         type: "LineString",
//         coordinates: [
//           [
//             [54.468756, 24.408106],
//             [54.47512, 24.406358],
//             [54.476991, 24.405801],
//             [54.477749, 24.405573],
//             [54.478467, 24.405379],
//             [54.48351, 24.404046],
//             [54.489212, 24.402458],
//             [54.490213, 24.402182],
//             [54.490246, 24.402173]
//           ]
//         ]
//       }
//     },
    
  
//   ]
// };

// export const App = () => {
//   const [deckGLRef, setDeckGLRef] = useState<DeckGL | null>(null);
//   const [viewportState, setViewportState] = useState<ViewStateProps>(
//     INITIAL_VIEW_STATE
//   );

//   return (
//     <DeckGL
//       ref={setDeckGLRef}
//       height="100%"
//       width="100%"
//       controller
//       viewState={viewportState}
//       onViewStateChange={(viewState) => {
//         setViewportState(viewState.viewState);
//       }}
//     >
//       <StaticMap
//         width="100%"
//         height="100%"
//         mapboxApiAccessToken="pk.eyJ1IjoidGFoaXJraGFuMSIsImEiOiJjbDYxc3dzMDUyMGJ2M2pucWZvNXMxampwIn0._xEsGs8Z_kzzbZjRWPtOrg"
//         mapOptions={{
//           antialias: true
//         }}
//       />
//       <LineLayer id="line-layer" data={lineData} />
//       <GeoJsonLayer id="geojson" data={geojson.features} />
//     </DeckGL>
//   );
// };
