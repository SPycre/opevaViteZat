import "../style/Form.css"

function Form() {

    const inputs = [
        (<div className="input"><input className="input-inner" type="text" name="first"></input></div>),
        (<div className="input"><input className="input-inner" type="text" name="last"></input></div>),
        (<div className="input"><input className="input-inner" type="text" name="company"></input></div>),
        (<div className="input"><input className="input-inner" type="number" name="employees"></input></div>),
        (<div className="input"><input className="input-inner" type="mail" name="email"></input></div>),
    ]

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <div className="form-container">
            <span className="form-text">Sign up to harness the power of Crosswire.</span>
            <form className="form-signup">
                {inputs[0]}
                <input type="submit" onClick={handleSubmit}></input>
            </form>
        </div>
    )

}

export default Form