import { Grid, Paper, Avatar } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login=()=>{
    const paperStyle = {
        padding: 20, 
        height: '70vh',
        width: 200,
        margin: '20px auto'
    }
    return (
        <Grid>
            <Paper 
                elevation={10} // 讓此組件隆起，產生陰影效果
                style={paperStyle} // 設定 Paper 組件樣式
            >
                <Avatar><LockOutlinedIcon /></Avatar>
                <h2>Sign in</h2>
            </Paper>
        </Grid>
    )
}

export default Login;