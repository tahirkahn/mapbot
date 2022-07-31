import * as React from "react";
import * as ReactDOM from "react-dom";
import { StaticMap } from 'react-map-gl';
import { DeckGL } from 'deck.gl';
import {ArcLayer,GeoJsonLayer,LineLayer,PathLayer} from '@deck.gl/layers';
import { line } from "d3";

const PATH_DATA = [{
  name: "random-name",
  color: [101, 147, 245],
  path:[[54.468756, 24.408106],
  [54.47512, 24.406358],
  [54.476991, 24.405801],
  [54.477749, 24.405573],
  [54.478467, 24.405379],
  [54.48351, 24.404046],
  [54.489212, 24.402458],
  [54.490213, 24.402182],
  [54.490246, 24.402173]]}
 ]

const INITIAL_VIEW_STATE = {
  latitude: 24.408106,
        longitude: 54.468756,
        zoom: 6.8,
        bearing: 0,
        pitch: 0,
        dragPan: true,
        width: 600,
        height: 600
};


function getDestination (d: any) {
    //sconsole.log("data dEeee*****************",d)
    var x = [d[4],d[5]]
    return x;
};

function getSource (d: any) {
    //console.log("data sEeee*****************",d)
    return [d[2],d[3]]
};

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": ""
        },
        geometry: {
          type: "Point",
          coordinates: [54.468756, 24.408106]
        }
      },
      
      {
        type: "Feature",
        properties: { "marker-size": "small" },
        geometry: {
          type: "MultiPoint",
          coordinates: [
            [54.468756, 24.408106],
            [54.47512, 24.406358],
            [54.476991, 24.405801],
            [54.477749, 24.405573],
            [54.478467, 24.405379],
            [54.48351, 24.404046],
            [54.489212, 24.402458],
            [54.490213, 24.402182],
            [54.490246, 24.402173]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          stroke: "#ff0000",
          "stroke-width": 10,
          "stroke-opacity": 1
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [54.468756, 24.408106],
            [54.47512, 24.406358],
            [54.476991, 24.405801],
            [54.477749, 24.405573],
            [54.478467, 24.405379],
            [54.48351, 24.404046],
            [54.489212, 24.402458],
            [54.490213, 24.402182],
            [54.490246, 24.402173]
          ]
        }
      }
    ]
  };
  

export const MapPanel: React.FC<any> = ( props ) => {
   
 
  const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGFoaXJraGFuMSIsImEiOiJjbDYxc3dzMDUyMGJ2M2pucWZvNXMxampwIn0._xEsGs8Z_kzzbZjRWPtOrg";

  // const dataOne = {
  //   type: "Feature",
  //   properties: {},
  //   geometry: {
  //     type: "LineString",
  //     coordinates: [
  //       [54.468756, 24.408106],
  //       [54.47512, 24.406358],
  //       [54.476991, 24.405801],
  //       [54.477749, 24.405573],
  //       [54.478467, 24.405379],
  //       [54.48351, 24.404046],
  //       [54.489212, 24.402458],
  //       [54.490213, 24.402182],
  //       [54.490246, 24.402173]
  //     ]
  //   }
  // };

  
  const data = [{
    name: "random-name",
    color: [245, 49, 49],//[101, 147, 245],

    path: [[54.468756, 24.408106],
    [54.47512, 24.406358],
    [54.476991, 24.405801],
    [54.477749, 24.405573],
    [54.478467, 24.405379],
    [54.48351, 24.404046],
    [54.489212, 24.402458],
    [54.490213, 24.402182],
    [54.490246, 24.402173]],
  //path: features.map(c => {return (c.coordinates)})

  }];

  return (
    <div style={{ height: '72vh', width: '100vw', position: 'relative' }}>
    
    <DeckGL
    initialViewState={{
      latitude: 24.408106,
        longitude: 54.468756,
      //latitude: 51.51,
      //longitude: -0.11,
      zoom: 6.8,
      bearing: 0,
      pitch: 0,
      dragPan: true,
      width: 600,
      height: 600
    }}
    
    controller={true}
    //layers= {linelayer} // layer here
    layers= {[
      new PathLayer({
        id: 'line',
        data,
        //data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/line/heathrow-flights.json',
        opacity: 0.8,
        //pickable: true,
        getPath: data => data.path,
                getWidth: data => 4,
                getColor: data => data.color,
                widthMinPixels: 4
        // getSourcePosition: d => d.start,
        // getTargetPosition: d => d.end,
        // //getColor: d => getColor(d),
        // getColor: d => [Math.sqrt(d.inbound + d.outbound), 140, 0],
        // getWidth: 8
      })
    ]
  }
   >
      <StaticMap
        mapStyle="mapbox://styles/mapbox/streets-v11"
       mapboxApiAccessToken={MAPBOX_TOKEN}
      />
      {/*
      <GeoJsonLayer id="geojson" data={geojson.features} /> 
    */}


    
   </DeckGL>

   
   
    </div>
  );
};

function getColor(d) {
  const z = d.start[2];
  const r = z / 10000;
  return [255 * (1 - r * 2), 128 * r, 255 * r, 255 * (1 - r)];
}
export default MapPanel;