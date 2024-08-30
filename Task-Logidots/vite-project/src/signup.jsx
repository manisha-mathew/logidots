
function SignUp(){
    return(
        <div>
            <div className="outerdiv">
                <div className="leftdiv"></div>
                <div className="rightdiv">
                    <div className="innerrightdiv">
                    {/* <img src={} */}
                   
                    <h2>
                        InteliGaze AI
                    </h2>
                    <p>Create Account</p>
                    <input type="text" placeholder="Email*" className="text"></input>
                    <input type="number" placeholder="Phone number*" className="text"></input>
                    <div className="check">
                    <div>
                    <input type="checkbox" value="Keep"></input>
                    <label>By using InteliGaze AI software, you agree to the Terms of use, Privacy policy and End-user license agreement</label>
                    </div>
                    <div>
                    <input type="checkbox"></input>
                    <label>Keep me updated on news and insights</label>
                    </div>
                    </div>
                    <button>Create </button>
                    <p>Already have an account?<a href="https://www.google.com/search?q=login&sca_esv=8e99831eb58f4f25&sca_upv=1&sxsrf=ADLYWIJ8OOwlUPuFuVtFLT9elc2MuKsF8g%3A1725013683995&ei=s57RZvO1PIud4-EPnqPcsQo&ved=0ahUKEwiz2_fewJyIAxWLzjgGHZ4RN6YQ4dUDCBA&uact=5&oq=login&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWxvZ2luMgoQIxiABBgnGIoFMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyEBAAGIAEGLEDGEMYgwEYigUyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyDRAAGIAEGLEDGEMYigUyCxAAGIAEGLEDGIMBMhAQABiABBixAxhDGIMBGIoFSJE1UNEJWJgrcAJ4AZABAJgBzgGgAbgFqgEFMC4zLjG4AQPIAQD4AQGYAgagAvMFqAIUwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhMQABiABBhDGLQCGIoFGOoC2AEBwgIZEC4YgAQY0QMYQxi0AhjHARiKBRjqAtgBAcICEBAuGIAEGNEDGMcBGCcYigXCAgQQIxgnwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICHRAuGIAEGNEDGMcBGIoFGJcFGNwEGN4EGOAE2AECwgIIEAAYgAQYsQPCAgUQABiABMICCxAuGIAEGMcBGK8BmAMUugYGCAEQARgBugYGCAIQARgUkgcFMi4zLjGgB5wk&sclient=gws-wiz-serp">Login</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp