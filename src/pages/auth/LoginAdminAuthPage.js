import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';
// sections
import { LoginFormAdmin } from '../../sections/auth/login';

// ----------------------------------------------------------------------

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
// -----------------------------Login-----------------------------------------
export const handleLoginAdmin = () => {};
// ---------------------------------------------------------------------
export default function LoginPageAdmin() {
  const mdUp = useResponsive('up', 'md');

  return (
    <div>
      <Helmet>
        <title> Login Admin </title>
      </Helmet>

      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            {mdUp && (
              <Image>
                <img src="/assets/logo.jpg" alt="login" />
              </Image>
            )}
            <Typography variant="h4" gutterBottom>
              Sign in to Admin
            </Typography>

            <LoginFormAdmin />
          </StyledContent>
        </Container>
      </StyledRoot>
    </div>
  );
}
