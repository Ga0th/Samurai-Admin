import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { apiConfig } from '../../utils/api';
import { FormControl } from './index';
import { find, debounce } from 'lodash';
import { CircularProgress, FormHelperText } from '@mui/material';

const MuiAutocomplete = (props) => {
  const { name, label, value, url, required, fullWidth, helperText, getOptionLabel, getOptionValue, filter } = props;

  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getLabel = (element) => {
    if (element && element[getOptionLabel]) {
      return element[getOptionLabel];
    } else {
      return '';
    }
  };

  const getValue = (element) => {
    return element[getOptionValue];
  };

  const getData = async () => {
    setLoading(true);
    const defaultValues = value ? value.map(option => option.value) : [];
    const params = {
      search: search,
      page: 1,
      pageSize: 10,
      defaultValues: defaultValues,
    };

    if (filter) {
      filter.forEach(element => {
        params[element.field] = element.value
      });
    }
    await apiConfig.get(url, { params }).then((response) => {
      if (response.status === 200) {
        setOptions(response.data.data);
      }
      setLoading(false);
    }).catch((error) => {
      setLoading(false);
    });
  };

  const delayedQuery = React.useCallback(
    debounce(() => getData(), 500),
    []
  );

  const handleOnChange = (value) => {
    setSearch(value);
    delayedQuery();
  };

  const setValue = (value) => {
    if (value) {
      props.onChange(value);
    } else {
      props.onChange([]);
    }
    setSearch('');
  };

  const defaultValue = value ? value.map(option => option.label) : [];
  let finalOptions = []

  if (options && options.length > 0) {
    options.forEach(element => {
      const object = {
        label: getLabel(element),
        value: getValue(element),
      }
      if (!find(value, object)) {
        finalOptions.push(object)
      }
    });
  }

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      required={required}
    >
      <Autocomplete
        multiple
        filterSelectedOptions
        options={finalOptions}
        defaultValue={defaultValue}
        value={value}
        loading={loading}
        inputValue={search}
        onInputChange={(event, newInputValue) => {
          if (event?.type === 'change') {
            handleOnChange(newInputValue);
          }
        }}
        onChange={(event, newValue) => {
          if (event?.type === 'click') {
            setValue(newValue);
          }
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            error={helperText ? true : false}
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
              autoComplete: 'off', // disable autocomplete and autofill
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      {helperText &&
        <FormHelperText>
          {helperText}
        </FormHelperText>}
    </FormControl>
  );
};

export default MuiAutocomplete;