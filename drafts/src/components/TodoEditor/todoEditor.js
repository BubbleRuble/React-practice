import React from "react";
import './TodoEditor.css'

class TodoEditor extends React.Component {
state = {
  message: '',
}

handleChange = e => {
  this.setState({message: e.currentTarget.value})
}

handleSubmit = e => {
  e.preventDefault()

  this.props.onSubmit(this.state.message);

  this.setState({message: ''})
}

render() {
  return (
    <form className="TodoEditor" onSubmit={this.handleSubmit}>
      <textarea className="TodoEditor__textarea" value={this.state.message} onChange={this.handleChange}></textarea>
      <button type="submit" className="TodoEditor__button">Зберегти</button>
    </form>
  )
}
}

export default TodoEditor;