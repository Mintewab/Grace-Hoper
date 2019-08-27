
import { Link } from "react-router-dom";
import * as React from "react";
import * as PropTypes from "prop-types";
import AutoSuggestBox from "react-uwp/AutoSuggestBox";

import ProgressRing from "react-uwp/ProgressRing";

class Search extends React.Component {
    static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
    render() {
        return(
             <div>
             <AutoSuggestBox defaultValue="" searchAction={(value: string) => alert(value)}
                />    
            <ProgressRing size={25}dotsStyle={{ background: "green" }} />
            <ProgressRing size={50}dotsStyle={{ background: "green" }} />
            <ProgressRing size={75} dotsStyle={{ background: "green" }} />
            <ProgressRing size={85} dotsStyle={{ background: "yellow" }}/>
            <ProgressRing size={100} dotsStyle={{ background: "yellow" }} />
            <ProgressRing size={100} dotsStyle={{ background: "yellow" }} />
            <ProgressRing size={100} dotsStyle={{ background: "red" }} />
            <ProgressRing size={100} dotsStyle={{ background: "red" }} />
           
          </div>
          );
        }
      }
      
export default Search;