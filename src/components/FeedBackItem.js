import {useContext} from "react";
import FeedBackContext from "../context/FeedBackContext";
import {FaTimes,FaEdit} from "react-icons/fa";
import Card from "../shared/Card";
function FeedBackItem(item) {
    const {deleteFeedBack,editFeedBack} = useContext(FeedBackContext)
    return (
         <Card>
            <div className="num-display">
                {item.rating}
            </div>
             <button className="close" onClick={() => deleteFeedBack(item.id)}>
                 <FaTimes color="purple" />
             </button>
             <button className="edit" onClick={() => editFeedBack(item)}>
                 <FaEdit color="purple" />
              </button>
             <div className="text-display">
                 {item.text}
             </div>
         </Card>
    )
}

FeedBackItem.defaultProps = {

}




export default FeedBackItem