import PropTypes from 'prop-types'
function Header({text , bgColor,textColor}) {
    const headerStyles = {
        backgroundColor:bgColor,
        color:textColor
    }
    return (
       <header style={headerStyles}>
           <div className="container">
               <h1>{text.toUpperCase()}</h1>
           </div>
       </header>
    )
}

Header.defaultProps = {
    text:'Feedback App',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header