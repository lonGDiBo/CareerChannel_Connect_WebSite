import { Grid, Stack, Typography, Box, Paper, styled,Avatar} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import * as MuiIcon from '@mui/icons-material';
import {Link, useParams} from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import ACCOUNTS from '../../../_mock/account';
import InformationContext from '../../../components/information/InfomationContext';



const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: '#F9FAFB',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'black',
  display:'flex',
  alignItems:'center'
  
}));
const AvatarDetail=styled(Avatar)({
  width:'100px',
  height:'100px',
  // marginLeft:'100px'
});
const ItemDetail=styled(Item)({
  marginLeft: '20px',
  fontSize:'20px'
});
const ItemDetailName=styled(Item)({
  marginLeft: '20px',
  fontSize:'32px',
  fontWeight: 'bold'
});
const EmailIconDetail=styled(EmailIcon)({
  marginRight:'5px',
  width: '2rem',
  height: '2rem'
});



const ManageDetail=()=>{
  const { id } = useParams();
  const account=ACCOUNTS.find((item)=>item.id===id)
  if(account===undefined)
  console.log("account",account)
  
  const {username, name, phone, role, email, avatarUrl, address, password}=account
    return(
    <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
        <Link to="/dashboard/accounts" style={{ textDecoration: 'none', color: 'black' }}>
            Quản lý tài khoản
        </Link> 
          <ArrowForwardIosIcon>arrow</ArrowForwardIosIcon>
          Thông tin chi tiết
        </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} >
              <Grid item spacing={2} xs={1}/>
              <Grid item spacing={2} xs={10} >
              <Item >
                <AvatarDetail alt={name} src={avatarUrl} />
                  <Grid  spacing={2} >
                    <Grid xs={12}>
                      <ItemDetailName>{name}</ItemDetailName>
                    </Grid>
                    <Grid xs={12}>
                      <ItemDetail >
                        <EmailIconDetail />
                        {email}
                      </ItemDetail>
                    </Grid>
                  </Grid>
              </Item>
              <Grid item spacing={2} xs={1}/> 
              </Grid>
              <InformationContext icon={MuiIcon.Phone} title={'Phone'} context= {phone} md={4} />  
              <InformationContext icon={MuiIcon.Person} title="Username" context={username} md={4} /> 
              <InformationContext icon={MuiIcon.Lock} title={'Password'} context={password} md={4} />   
              <InformationContext icon={MuiIcon.SettingsSuggestSharp} title={'Cấp bậc'} context={role} md={4} />
              <InformationContext icon={MuiIcon.Home} title={'Địa chỉ'} context={address} md={8} />
            </Grid>
          </Box>
    </>
        

    )
}
export default ManageDetail