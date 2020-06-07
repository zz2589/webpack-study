import React from "react";
import ReactDom from "react-dom";
import logo from "./images/logo.jpeg";
import "./search.less";

class Search extends React.Component {
    render() {
        return (
            <div className="search-text">
                search text 文字
                <img src={logo} />
            </div>
        );
    }
}

ReactDom.render(<Search />, document.getElementById("root"));
