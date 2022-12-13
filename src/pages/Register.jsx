let Register = () => {
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chatter Box</span>
                <span className="title">Register</span>

                <form>
                    <input type="text" placeholder="Enter Name here"/>
                    <input type="email" placeholder="Enter Email here"/>
                    <input type="password" placeholder="Create Password"/>
                    <input style={{display: 'none'}} type="file" id="file"/>
                    <label htmlFor="file">
                        <svg className="imageIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Already have an account? Login here</p>
            </div>
        </div>
    )
}

export default Register;