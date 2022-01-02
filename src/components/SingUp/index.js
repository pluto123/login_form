import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Checkbox, Button, FormHelperText } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUp = () => {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 300,
        margin: '0px auto'
    }
    const avatarStyle = {
        backgroundColor: 'green'
    }
    const marginTop = {
        marginTop: '5px'
    }
    const styleButton = {
        margin: '8px auto'
    }
    const styleHeader = {
        margin: 0
    }
    const initialValues ={
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Required"),
        password: Yup.string().min(8, "Password minimue length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required")
    })
    const onSubmit = (values, props) => (
        console.log(values)
    )
    return (
        <Grid>
            <Paper
                style={paperStyle}
            >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2 style={styleHeader}>Sign up</h2>
                    <Typography variant='caption'>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} name='name' label='Name' 
                                placeholder='Enter your name' fullWidth required />
                            <ErrorMessage name='name'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            <Field as={TextField} name='email' label='Email' placeholder='Enter your e-mail' fullWidth required />
                            <ErrorMessage name='email'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name='gender' style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText>
                                <ErrorMessage name='gender'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            </FormHelperText>
                            <Field as={TextField} name='phoneNumber' label='Phone Number' placeholder='Enter phone number' fullWidth required />
                            <ErrorMessage name='phoneNumber'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            <Field as={TextField} name='password' label='Password' type="password" placeholder='Enter password' fullWidth required />
                            <ErrorMessage name='password'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            <Field as={TextField} name='confirmPassword' label='Confirm Password' type="password" placeholder='Comfirm password' fullWidth required />
                            <ErrorMessage name='confirmPassword'>{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>
                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        name="termsAndConditions"
                                        color="primary"
                                    />
                                }
                                label="I accept the terms and conditions."
                            />
                            <Button type='submit' color='primary' variant='contained' style={styleButton}>Sign up</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default SignUp;