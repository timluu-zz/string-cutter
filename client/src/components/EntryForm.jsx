import React from 'react';

const EntryForm = () => {
  return (
    <form>
      <label>
        Enter string here:
        <input type='text' name='string' />
      </label>
      <input type='submit' name='Submit' />
    </form>
  )
}

export default EntryForm;