import * as React from "react";
import { MapPanel } from "./MapPanel";
import powerbiVisualsApi from "powerbi-visuals-api";
export interface State {
  data: powerbiVisualsApi.DataViewTableRow[];
}

export const initialState: State = {
  data: []
};

export class MainComponent extends React.Component<{}> {
  private static updateCallback: (data: object) => void = null;

  public static update(newState: State) {
    if (typeof MainComponent.updateCallback === "function") {
      console.log(" update in circle", newState);
      MainComponent.updateCallback(newState);
    }
  }

  public state: State = initialState;

  public componentWillMount() {
    console.log("mounting comp");
    MainComponent.updateCallback = (newState: State): void => {
      console.log("VSetting state +++++++", newState);
      this.setState(newState);
    };
  }

  public componentWillUnmount() {
    MainComponent.updateCallback = null;
  }
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      
        <div className="circleCard">
                <MapPanel data={this.state} />
            </div>
      
    );
  }
}

export default MainComponent;
