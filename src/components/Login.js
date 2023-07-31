import React from "react";

class Login extends React.Component {
  state = {
    title: "JavaScript",
    text: "JavaScript is awesome",
    library: "React",
    timeout: 15000,
    isAwsome: true,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        text: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "number") {
      this.setState({
        timeout: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwsome: e.target.checked,
      });
    } else {
      console.log("Nothing here...");
    }
  };

  submitHandler = (e) => {
    const { title, text, library, timeout, isAwsome } = this.state;
    e.preventDefault();

    const submitData = { title, text, library, timeout, isAwsome };
    // console.log(submitData);
    alert(
      `Title: ${title}\nMessage: ${text}\nLibrary: ${library}\nisAwsome: ${isAwsome}\nTimeout: ${timeout}`
    );
    
    localStorage.removeItem("auth");
    localStorage.setItem("auth", true);

    setTimeout(() => {
      localStorage.removeItem("auth");
    }, timeout);
  };

  render() {
    const { title, text, library, timeout, isAwsome } = this.state;

    return (
      <div className="container">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={this.submitHandler}>
          <input
            className="title"
            type="text"
            value={title}
            onChange={this.handleChange}
            placeholder="Enter title"
          />
          <textarea
            className="description"
            name="text"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <select
            className="library"
            value={library}
            onChange={this.handleChange}
          >
            <option name="React">React</option>
            <option name="Vue">Vue</option>
            <option name="Angular">Angular</option>
          </select>
          <input
            className="timeout"
            type="number"
            value={timeout}
            onChange={this.handleChange}
          />
          <p>
            <input
              className="check"
              type="checkbox"
              checked={isAwsome}
              onChange={this.handleChange}
            />
            <span>is Awesome</span>
          </p>
          <input className="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
