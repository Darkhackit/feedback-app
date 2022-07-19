import {createContext,useState,useEffect} from 'react'
import {v4 as uuidv4} from "uuid";
import FeedbackData from "../data/FeedBackData";

const FeedBackContext = createContext()

export const FeedBackProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(true)
    const [feedBacks,setFeedBack] = useState([])
    const [FeedBackEdit,setFeedBackEdit] = useState({
        item:{},
        edit:false
    })
    useEffect(() => {
        fetchFeedBack()
    },[])
    const fetchFeedBack = async () => {
        const response = await fetch(`/feedback`)
        const data = await response.json()
        setFeedBack(data)
        setIsLoading(false)
    }
    const deleteFeedBack = async (id) => {
        if(window.confirm('Are you sure you want to delete')) {
            await fetch(`/feedback/${id}`,{method:"DELETE"})
            setFeedBack(feedBacks.filter((item) => item.id !== id))
        }
    }
    const addFeedBack = async (newFeedBack) => {
        const response = await fetch('/feedback',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newFeedBack)
        })
        const data = await response.json()
        setFeedBack([data, ...feedBacks])
    }
    const editFeedBack = async (item) => {
        const response = await fetch(`feedback/${item.id}`)
        const data = await response.json();
        setFeedBackEdit({
            item:data,
            edit:true
        })
    }

    const updateFeedBack = async (id,updateItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updateItem)
        })
        const data = await response.json()
        setFeedBack(feedBacks.map((item) => item.id === id ? {...item,...data} : item))
        setFeedBackEdit({
            item: {},
            edit: false
        })
    }
    return <FeedBackContext.Provider value={{
            feedBacks,
            FeedBackEdit,
            isLoading,
            deleteFeedBack,
            addFeedBack,
            editFeedBack,
            updateFeedBack

           }}>
            {children}
            </FeedBackContext.Provider>

}

export default FeedBackContext