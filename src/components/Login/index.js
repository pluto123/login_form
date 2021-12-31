import { Grid, Paper } from '@material-ui/core'

const Login=()=>{
    return (
        <Grid>
            <Paper 
                elevation={10} // 讓此組件隆起，產生陰影效果
            >
                Sign in
            </Paper>
        </Grid>
    )
}

export default Login;