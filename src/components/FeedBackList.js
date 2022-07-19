import {useContext} from "react";
import {motion,AnimatePresence} from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import FeedBackContext from "../context/FeedBackContext";
import Spinner from "../shared/Spinner";
function FeedBackList() {

    const {feedBacks ,isLoading} = useContext(FeedBackContext)

    if(!isLoading && (!feedBacks || feedBacks.length === 0)) {

    }

    return isLoading ? <Spinner />:  (
        <>
            <div className="feedback-list">
                <AnimatePresence>

                      {feedBacks.map((feedback,index) => {
                          return  <motion.div
                              key={feedback.id}
                              initial={{opacity: 0}}
                              animate={{opacity: 1}}
                              exit={{opacity:0}}

                          >
                           <FeedBackItem id={feedback.id} rating={feedback.rating} text={feedback.text} key={index} />
                          </motion.div >
                      })}

                </AnimatePresence>
            </div>
        </>
    )
    // return (
    //     <>
    //        <div className="feedback-list">
    //            {feedbacks.map((feedback,index) => {
    //                return <FeedBackItem handleDelete={handleDelete} id={feedback.id} rating={feedback.rating} text={feedback.text} key={index} />
    //            })}
    //        </div>
    //     </>
    // )
}

// FeedBackList.propTypes = {
//     feedbacks : PropTypes.arrayOf(
//         PropTypes.shape( {
//             text:PropTypes.string.isRequired,
//             rating:PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedBackList