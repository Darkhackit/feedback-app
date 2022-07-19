
import {useState,useContext,useEffect} from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../context/FeedBackContext";
function FeedBackForm() {
    const {addFeedBack,FeedBackEdit , updateFeedBack} = useContext(FeedBackContext)
    const [text , setText] = useState('')
    const [btnDisabled , setBtnDisabled] = useState(true)
    const [rating,setRating] = useState('')
    const [message , setMessage] = useState('')

    const handleText = (e) => {
        if(text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== "" && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    useEffect(() => {
        if(FeedBackEdit.edit === true) {
            setBtnDisabled(false)
            setText(FeedBackEdit.item.text)
            setRating(FeedBackEdit.item.rating)
        }
    },[FeedBackEdit])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating
            }
            if(FeedBackEdit.edit) {
                updateFeedBack(FeedBackEdit.item.id,newFeedBack)
            } else {
                addFeedBack(newFeedBack)
            }


            setText("")
        }

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h4>How will you rate your service with us</h4>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleText} type="text" value={text} placeholder="Write a review" />
                    <Button type="submit" isDisable={btnDisabled} >{FeedBackEdit.edit ? 'update' : 'send'}</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>

        </Card>
    )
}

export default FeedBackForm