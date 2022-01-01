import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../../components/Login';
import SignUp from '../../components/SingUp'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const SignInOutContainer=()=>{
    const [value, setValue] = React.useState(2);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {width: 340, margin: '20px auto'}

    return (
        <Paper elevation={20} style={paperStyle}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp />
            </TabPanel>
        </Paper>
    )
}

export default SignInOutContainer;