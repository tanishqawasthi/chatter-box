let Login = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatter Box</span>
                <span className="title">Login</span>

                <form>
                    <input type="email" placeholder="Enter Email here"/>
                    <input type="password" placeholder="Create Password"/>
                    <button>Login</button>
                </form>
                <p>Don't have an account? Signup here</p>
            </div>
        </div>
    )
}

export default Login;