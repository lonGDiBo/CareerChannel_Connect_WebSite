import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

import { Container, Typography, styled,Button } from '@mui/material';

import useResponsive from '../../hooks/useResponsive';

import { LoginFormCandidate } from '../../sections/auth/login';

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    background: '#fff',
  },
}));
const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

const Image = styled(StyledSection)({
  backgroundColor: '#fff',
  margin: '10px 0px auto',
  height: '200px',
  objectFit: 'cover',
});
function LoginCandidatePage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title>Login Candidate</title>
      </Helmet>
    <StyledRoot>
    <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h3" gutterBottom sx={{ mb: 5,textAlign:"center",color:"#0d4275"}}>
              Sign in to Minh SoftWare
            </Typography>

            <LoginFormCandidate />
            <Typography variant="body2" sx={{ mb: 5,textAlign:"center"}}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>

          </StyledContent>
        </Container>
    </StyledRoot>  
    
    </>

  );
}

export default LoginCandidatePage;
