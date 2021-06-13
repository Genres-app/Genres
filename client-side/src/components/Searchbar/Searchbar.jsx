import React from 'react'
import useStyles from './styles';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import styled from 'styled-components';
const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 50px;
  }
`;

const Search = ({items}) => {
  
    const classes = useStyles();


    return (

        <div style={{ width: 300 }}>

        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={items}
          renderInput={(params) => (
              
             

            
            <TextFieldWrapper
              {...params}
              label="Search"
              margin = "dense"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
            
        
          )}
        />
      </div>


    )
}

export default Search
