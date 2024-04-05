// The below import defines which components come from formik
 import {  Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import Password from './password';

function FormikExample() {
  function validateName(value) {
    let error 
    if (!value) {
      error= 'Vui lòng nhập tài khoản'
      
    } else if (value.toLowerCase() !== '') {
      error = ""
    }
    return error;
  }

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
      {(props) => (
        <Form w="120px"  >
          <Field name='name' validate={validateName} >
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Tài Khoản</FormLabel>
                <Input w="250px" height='30px' {...field} placeholder='name'  />
                <FormErrorMessage color='red'>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field> 
          <Password/>       
          <Button w="258px" height='30px' bg='#63B3ED' color="#fff"
            mt={4}
            colorScheme='teal'
            // eslint-disable-next-line react/prop-types
            isLoading={props.isSubmitting}
            type='submit'
          >
            Đăng nhập
          </Button>
        </Form>
      )}
    </Formik>
  )
}
export default FormikExample;