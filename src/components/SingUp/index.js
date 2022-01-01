import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Checkbox, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';
import { Formik, Field, Form } from 'formik'

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
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} name='name' label='Name' placeholder='Enter your name' fullWidth required />
                            <Field as={TextField} name='email' label='Email' placeholder='Enter your e-mail' fullWidth required />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name='gender' style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <Field as={TextField} name='phoneNumber' label='Phone Number' placeholder='Enter phone number' fullWidth required />
                            <Field as={TextField} name='password' label='Password' placeholder='Enter password' fullWidth required />
                            <Field as={TextField} name='confirmPassword' label='Confirm Password' placeholder='Comfirm password' fullWidth required />
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