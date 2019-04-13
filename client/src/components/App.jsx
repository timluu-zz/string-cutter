import React from 'react';
import EntryForm from './EntryForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      str: '',
      cutStr: ''
    }
  }

  render() {
    return (
      <EntryForm />
    )
  }
}

export default App;