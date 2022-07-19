function Example() {

    const title = "My Blog";
    const body = " This is my blog post"
    const comments = [
        {id:1,text:'comment 1'},
        {id:2,text:'comment 2'},
        {id:3,text:'comment 3'}
    ]
    const loading = false
    const showComment = false

    if(loading) return <h1>Loading .....</h1>
    return (
        <>
            <h1>{title}</h1>
            <p>{body}</p>
            <h1>Comments ({comments.length})</h1>
            {showComment ? ( <ul>
                {comments.map((comment,index) => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>) : ''}
        </>
    )
}

export default Example