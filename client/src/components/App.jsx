import React from 'react';
import axios from 'axios';
import EntryForm from './EntryForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      str: '',
      cutStr: ''
    }
  }

  handleChange(e) {
    this.setState({
      str: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.submitString(this.state.str);
  }

  submitString(str) {
    axios.post('/test', {
      string_to_cut: this.state.str
    })
      .then((response) => {
        this.setState({
          cutStr: response.data['return_string'],
          str: ''
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <EntryForm 
        change={this.handleChange.bind(this)}
        submit={this.handleSubmit.bind(this)}
        value={this.state.str}
      />
    )
  }
}

export default App;