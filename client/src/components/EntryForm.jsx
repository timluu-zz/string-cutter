import React from 'react';

const EntryForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <label>
        Enter string here:
        <input type='text' value={props.value} onChange={props.change}/>
      </label>
      <input type='submit' name='Submit' />
    </form>
  )
}

export default EntryForm;