import {
  
    Stack,
    Container,
    Typography,
    Grid
    ,Box,
    Paper,
    styled 
    
  } from '@mui/material';
 
  import * as MuiIcon from '@mui/icons-material'
  import { shadows } from '@mui/system';
  // color
  import palette from '../../theme/palette';

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'black',
    display:'flex',
    alignItems:'center',
    
    
  }));

  const UseStyles = styled(Box) ({
    
       boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
       borderRadius:10
  });

export default function InformationContext({ icon: Icon = MuiIcon.Email, title, context, md ,colorIcon}) {
  
  return (
    <>
      <Grid item xs={12} md={md}  >
      <UseStyles>
        <Item >
          <Icon style={{ width: '2rem', height: '2rem',color:`${palette.maincolor.primary}` }} />
          <Box style={{ fontSize: 20, fontWeight: 'bold' ,marginLeft:10}}>{title}</Box>
        </Item>
        <Item>
          <Box style={{ fontSize: 20, fontStyle: 'regular' }}>{context}</Box>
        </Item>
      </UseStyles>
      </Grid>
    </>
  );
}