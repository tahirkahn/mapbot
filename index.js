import React, { Component } from "react";
import { render } from "react-dom";
import ReactMapGL, { Source, Layer } from "react-map-gl";
//import { DeckGL } from "deck.gl";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 24.408106,
        longitude: 54.468756,
        zoom: 6.8,
        bearing: 0,
        pitch: 0,
        dragPan: true,
        width: 600,
        height: 600
      }
    };
  }

  render() {
    const { viewport } = this.state;
    const MAPBOX_TOKEN =
      "pk.eyJ1IjoidGFoaXJraGFuMSIsImEiOiJjbDYxc3dzMDUyMGJ2M2pucWZvNXMxampwIn0._xEsGs8Z_kzzbZjRWPtOrg";

    
    const dataOne = {
      type: "Feature",
      properties: {},
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
    };
    return (
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(newViewport) => {
          this.setState({ viewport: newViewport });
        }}
      >
        <Source id="polylineLayer" type="geojson" data={dataOne}>
          <Layer
            id="lineLayer"
            type="line"
            source="my-data"
            layout={{
              "line-join": "round",
              "line-cap": "round"
            }}
            paint={{
              "line-color": "rgba(3, 170, 238, 0.5)",
              "line-width": 5
            }}
          />
        </Source>
      </ReactMapGL>
    );
  }
}

render(<App />, document.getElementById("root"));
