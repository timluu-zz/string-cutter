import React from 'react';
import { 
  Display, 
  Entry, 
  Form, 
  FormContainer, 
  Submit,
  Subtitle 
} from '../styles/EntryFormStyles.jsx';

const EntryForm = (props) => {
  return (
    <FormContainer>
      <Display>
          {props.display}
      </Display>
      <Form onSubmit={props.submit}>
        <Subtitle>
          Enter string below: 
        </Subtitle>
        <Entry type='text' value={props.value} onChange={props.change}></Entry>
        <Submit type='submit' value='SUBMIT'></Submit>
      </Form>
    </FormContainer>
  )
}

export default EntryForm;