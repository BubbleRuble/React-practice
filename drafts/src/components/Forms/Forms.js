import React from 'react';

class Form extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    name: '',
    phoneNumber: '',
    experience: 'junior',
    licence: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    e.preventDefault();

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset()
  };

  hanbleLicenceChange = e => {
    console.log(e.currentTarget.checked)

    this.setState({licence: e.currentTarget.checked})
  }

  reset = () => {
    this.setState({ name: '', phoneNumber: '' });
  };
  

  render() {
    const {experience} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Номер телефону{' '}
          <input
            type="tel"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
        </label>

        <p>Ваш рівень</p>

        <label><input type='radio' name="experience" value="junior" checked={experience === 'junior'} onChange={this.handleChange}/> Junior</label>
        <label><input type='radio' name="experience" value="middle" checked={experience === 'middle'} onChange={this.handleChange}/> Middle</label>
        <label><input type='radio' name="experience" value="senior" checked={experience === 'senior'} onChange={this.handleChange}/> Senior</label>

        <label>
          <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.hanbleLicenceChange}/> Згоден з умовами
        </label>


        <button type="submit" disabled={!this.state.licence}>Submit</button>
      </form>
    );
  }
}
export default Form;
