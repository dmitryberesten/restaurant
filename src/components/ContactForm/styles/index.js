import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const FormContainer = styled('form')({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '55%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '2px 2px 10px #636e72',
  fontFamily: 'Poppins, sans-serif !important',
  '@media (min-width: 320px)': {
    width: '90%',
  },
  '@media (min-width: 720px)': {
    width: '55%',
  },
});

export const MessageContainer = styled('p')({
  display: 'block',
  margin: 'auto',
  marginBottom: '0',
  padding: '3rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '2px 2px 10px #636e72',
  fontFamily: 'Poppins, sans-serif !important',
  '@media (min-width: 320px)': {
    width: '90%',
  },
  '@media (min-width: 720px)': {
    width: '55%',
  },
});


export const InputContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  width: '100%',
});

export const InputField = styled(TextField)({
  width: '100%',
  fontFamily: 'Poppins, sans-serif !important',
});

export const SelectField = styled(Select)({
  width: '100%',
  color: 'black !important',
});

export const MessageField = styled(TextareaAutosize)({
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  minHeight: '150px',
  fontFamily: 'Poppins, sans-serif !important',
  fontSize: '18px',
  resize: 'none',
  '&:focus': {
    outline: 'none',
    border: '2px solid #1976d2',
  },
  '&::placeholder': {
    color: '#a9a9a9',
  },
});
