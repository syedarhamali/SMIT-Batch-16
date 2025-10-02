// props are getting in object form 
function Signin(props) {
    const { text = "Default value" , number } = props

    return (
        <div>
            {text} {number}
        </div>
    )
}

export default Signin
