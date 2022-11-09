import React from "react";

class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repassword: "",
    };
  }

  render() {
    const onChange = ({ target: { value, name } }) => {
      console.log(value, name);
      this.setState({[name]:value})
    };
    const passWord = ({ target: { value, name } }) => {
      console.log(value, name);
      this.setState({[name]:value})
    };
    const repassWord = ({ target: { value, name } }) => {
      console.log(value, name);
      this.setState({[name]:value})
    };
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h1>Email:{this.state.email}</h1>
        <h1>Password:{this.state.email}</h1>
        <h1>Re password:{this.state.email}</h1>
        <hr />
        <input
          onChange={onChange}
          type="text"
          name="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          onChange={passWord}
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
        <input
          onChange={repassWord}
          type="number"
          name="password"
          placeholder="Re password"
        />
      </div>
    );
  }
}
export default GetName;
