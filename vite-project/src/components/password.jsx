// The below import defines which components come from formik
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';


function Password() {
  function validateName(value) {

    let error 
    if (!value) {
      error= 'Vui lòng nhập mật khẩu'
      
    } else if (value.toLowerCase() !== '') {
      error = ""
    }
    return error;
    
  }
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = React.useState(false)
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {() => (
        <Form>
          <Field name='name' validate={validateName} >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Mật khẩu</FormLabel>
                <Input w="250px" {...field} placeholder='password' type={show ? 'text' : 'password'} />
                <FormErrorMessage color='red'>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>        
         
        </Form>
        
      )}
    </Formik>
  )
}
export default  Password
    