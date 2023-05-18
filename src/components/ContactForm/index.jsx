import React, { useState } from 'react';
import {
  FormContainer,
  InputContainer,
  InputField,
  SelectField,
  MessageField,
} from './styles';

// import { InputLabel, MenuItem, Button } from '@mui/material';
import { MenuItem, Button } from '@mui/material';


const options = [
  { value: 'option1', label: 'День народження' },
  { value: 'option2', label: 'Весілля' },
  { value: 'option3', label: 'Захід' },
  { value: 'option4', label: 'Зустріч' },
  { value: 'option5', label: 'Немає' },
];

const Form = () => {
  // const labelId = 'select-label';
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submit logic
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputField label="Name" variant="outlined" />
        <InputField label="Email" variant="outlined" type="email" />
      </InputContainer>
      <InputContainer>
        <InputField
          label="Phone number"
          variant="outlined"
          type="tel"
          className="custom-input"
        />
        <SelectField
          variant="outlined"
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Виберіть подію
          </MenuItem>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectField>
      </InputContainer>
      <MessageField placeholder="Введіть своє повідомлення" />
      <Button type="submit" variant="contained">
        Надіслати
      </Button>
    </FormContainer>
  );
};

export default Form;
