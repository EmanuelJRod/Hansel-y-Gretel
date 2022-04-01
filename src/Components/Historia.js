import data from "./data.json";
import React from "react";
export default class Historia extends React.Component {
    render() {
        return (
            <div className="divHistoria">
                <h3>
                    {data[this.props.propIdx].historia}
                </h3>
            </div>
        );
    }
}