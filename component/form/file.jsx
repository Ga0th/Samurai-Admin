import { CircularProgress, FormHelperText, Icon, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { FormControl } from './index';
import { apiConfig } from '../../utils/api';
import { green } from '@mui/material/colors';

const TextBox = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');

  const { name, label, accept, icon, value, required, inputAdornmentPosition, fullWidth, helperText, disabled } = props;

  const fileUpload = async (e) => {
    setMessage('');
    setError('');
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    setLoading(true);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    await apiConfig.post(`/${props.url}`, formData, config).then((response) => {
      const { data } = response;
      if (response.status === 200) {
        setLoading(false);
        setMessage(data.message);
        props.onChange(data.url);
      } else {
        setLoading(false);
        setError(data.message);
      }
    }).catch((error) => {
      const { response } = error;
      setLoading(false);
      setError(response.data.message);
    });
  };


  return (
    <React.Fragment>
      <input
        style={{ display: 'none' }}
        id="document-file"
        type="file"
        accept={accept}
        onChange={(e) => {
          fileUpload(e);
          e.target.value = null;
        }}
      />

      <FormControl
        key={`key${name}`}
        error={helperText ? true : false}
        fullWidth={fullWidth}
        required={required}
      >
        <TextField
          error={(helperText || error) ? true : false}
          success={error ? false : true}
          name={name}
          label={label}
          type='url'
          readOnly={disabled}
          required={required}
          disabled={disabled}
          value={value}
          onChange={e => props.onChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position={inputAdornmentPosition}>
                {loading && <CircularProgress size={25} />}
                <label htmlFor="document-file">
                  {!loading && <Icon>{icon}</Icon>}
                </label>
              </InputAdornment>
            )
          }}
        />

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormHelperText>{error}</FormHelperText>}
        {message && <FormHelperText style={{ color: green[500] }}>{message}</FormHelperText>}
      </FormControl>
    </React.Fragment>
  );
};

export default TextBox;