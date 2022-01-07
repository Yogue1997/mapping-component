import cities from "../Data";
import City from "./City";

function Main () {


    return(
        <div>
            {cities.map((cityData) => {
                return <City cityData={cityData}/>
            }) }
        </div>
    )
}

export default Main;