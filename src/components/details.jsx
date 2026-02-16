import { useState } from "react";    
function Details(props)
{

const{build_year, time_period, location}=props.informations;
const [showDetails, setShowDetails] = useState(false);
return(
<>
<button className="btn btn-primary" onClick={() => setShowDetails(!showDetails)}>
{showDetails?"Hide Details" : "Show Details"}
</button>
{showDetails ?  <ul className="list-group">
	<li className="list-group-item"><strong>build year : {build_year}</strong></li>
	<li className="list-group-item"><strong>time period : {time_period}</strong></li>
	<li className="list-group-item"><strong>location :{location}</strong></li>
  </ul>

:null
}

</>
)
}
export default Details;