import React from "react";

class GetName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "hello",
    };
  }

  render() {
    let count = 0;
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
    };
    const onChange = (e) => {
      this.setState({ title: e.target.value });
    };
    const onSelect = (e) => {
      this.setState({ title: e.target.value });
    };

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <hr />
        <h1>Title:{this.state.title}</h1>
        <input onChange={onChange} type="text" />
        <hr />
        <select name="" id="" onChange={onSelect}>
          <option value="uz">uzb</option>
          <option value="ru">rus</option>
          <option value="eng">eng</option>
          <option value="kor">kore</option>
        </select>
      </div>
    );
  }
}
export default GetName;
