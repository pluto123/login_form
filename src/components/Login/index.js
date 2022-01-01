import React from 'react';
import { Grid, Paper, Avatar, TextField, Checkbox, FormControlLabel, Button, Link, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=({handleChange})=>{
    const paperStyle = {
        padding: 20, 
        height: '70vh',
        width: 300,
        margin: '0px auto'
    }
    const avatarStyle = {
        backgroundColor: 'green'
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
                style={paperStyle} // 設定 Paper 組件樣式
            >
                <Grid align='center'> {/* 將物件置中 */}
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2 style={styleHeader}>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' fullWidth variant='contained' style={styleButton}>Sign in</Button>
                <Typography >
                    <Link href="#">
                        Forget password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" onClick={()=>handleChange("event", 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;