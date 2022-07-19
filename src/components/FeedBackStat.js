import {useContext} from "react";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackStat() {
    const {feedBacks} = useContext(FeedBackContext)
    let average = feedBacks.reduce((acu , cur) => {
        return acu + cur.rating
    },0) / feedBacks.length

    average = average.toFixed(1).replace(/[.,]0$/, '')
    return (
       <div className="feedback-stats">
           <h4>{feedBacks.length} Reviews</h4>
           <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
       </div>
    )
}

export default FeedBackStat