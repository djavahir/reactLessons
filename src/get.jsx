import React from "react";
import { students } from "./components/crud";
class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      data: students,
    };
  }
  render() {
    const onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    const onSearch = (event) => {
      let search = students.filter((value) =>value.name.includes(event.target.value));
      this.setState({
        data:search,
      })
    };

    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Surname:{this.state.surname}</h1>
        <hr />
        <input onChange={onChange} type="text" name="name" placeholder="name" />
        <br />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="surname"
          placeholder="surname"
        />
        <hr />
        <br />
        <input onChange={onSearch} type="text" placeholder="search" />
        {this.state.data.map(({ id, name, job }) => {
          return (
            <h1 key={id}>
              {id}
              {name}
              {job}
            </h1>
          );
        })}
      </div>
    );
  }
}
export default GetName;
