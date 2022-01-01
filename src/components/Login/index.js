import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=()=>{
    const paperStyle = {
        padding: 20, 
        height: '70vh',
        width: 200,
        margin: '20px auto'
    }
    const avatarStyle = {
        backgroundColor: 'green'
    }
    return (
        <Grid>
            <Paper 
                elevation={10} // 讓此組件隆起，產生陰影效果
                style={paperStyle} // 設定 Paper 組件樣式
            >
                <Grid align='center'> {/* 將物件置中 */}
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            </Paper>
        </Grid>
    )
}

export default Login;