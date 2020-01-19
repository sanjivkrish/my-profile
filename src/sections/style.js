import { Container } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const Wrapper = styled(Container)(({ theme }) => ({
  padding: '2rem 1rem',
  [theme.breakpoints.up('md')]: {
    padding: '2rem 10rem'
  }
}));
