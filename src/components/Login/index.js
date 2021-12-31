import { Grid, Paper } from '@material-ui/core'

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
                Sign in
            </Paper>
        </Grid>
    )
}

export default Login;