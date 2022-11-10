import React from "react";

class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
    };
  }
  render() {
    const onChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
    }

    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Surname:{this.state.surname}</h1>
        <hr />
        <br />
        <input onChange={onChange} type="text" name="name" placeholder="name" />
        <br /><br />
        <br /><br />
        <input onChange={onChange} type="text" name="surname" placeholder="surname"/>
      </div>
    );
  }
}
export default GetName;
