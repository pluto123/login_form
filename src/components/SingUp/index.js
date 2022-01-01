import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Checkbox, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core';

const SignUp=()=>{
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
                <TextField label='Name' placeholder='Enter your name' fullWidth required/>
                <TextField label='Email' placeholder='Enter your e-mail' fullWidth required/>
                <FormControl component="fieldset" style={marginTop}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" style={{display: 'initial'}}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <TextField label='Phone Number' placeholder='Enter phone number' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' fullWidth required/>
                <TextField label='Confirm Password' placeholder='Comfirm password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="I accept the terms and conditions."
                />
                <Button type='submit' color='primary' variant='contained' style={styleButton}>Sign up</Button>
            </Paper>
        </Grid>
    )
}

export default SignUp;