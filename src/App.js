
import {Route,Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedBackList from './components/FeedBackList'
import FeedBackStat from "./components/FeedBackStat";
import FeedBackForm from "./components/FeedBackForm";
import About from "./pages/About";
import Post from "./components/Post";
import {FeedBackProvider} from "./context/FeedBackContext";
import AboutLinkIcon from "./components/AboutLinkIcon";

function App() {
    return (
        <FeedBackProvider>
            <Header  />
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedBackForm />
                            <FeedBackStat/>
                            <FeedBackList />
                        </>
                    }>

                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>

            </div>
            <AboutLinkIcon />

        </FeedBackProvider>
    )
}

export default App