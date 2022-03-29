import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { apiConfig } from '../../utils/api';
import { FormControl } from './index';
import { find, debounce } from 'lodash';
import { CircularProgress, FormHelperText } from '@mui/material';

const MuiAutocomplete = (props) => {
  const { name, label, forceLoading, value, url, required, fullWidth, helperText, getOptionLabel, getOptionValue, filter } = props;

  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getData();
  }, [value]);

  React.useEffect(() => {
    if (value) {
      const defaultValue = find(options, { 'value': value });
      if (defaultValue) {
        setSearch(defaultValue.label);
      }
    }
  }, [value, options]);

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

  const getData = async (search = null) => {
    setLoading(true);

    const params = {
      search: search,
      page: 1,
      pageSize: 50,
      defaultValue: value,
    };

    if (filter) {
      filter.forEach(element => {
        params[element.field] = element.value;
      });
    }

    let options = [];

    await apiConfig.get(url, { params }).then((response) => {
      if (response.status === 200) {
        if (response.data.data) {
          response.data.data.forEach(element => {
            options.push({
              label: getLabel(element),
              value: getValue(element)
            });
          });
          setOptions(options);
        }
      }
      setLoading(false);
    }).catch((error) => {
      const { response } = error;
      console.log('error', response.data.message);
      setLoading(false);
    });
  };

  React.useEffect(() => {
    if (forceLoading === true) {
      getData();
    }
  }, [forceLoading]);

  React.useEffect(() => {
    if (filter) {
      getData();
      setSearch('');
    }
  }, [filter]);

  const delayedQuery = React.useCallback(debounce(getData, 1000), []);

  const handleOnChange = (value) => {
    setSearch(value);
    delayedQuery(value);
  };

  const setValue = (option) => {
    if (option) {
      props.onChange(option.value);
    } else {
      props.onChange(null);
    }
  };

  const defaultValue = find(options, { 'value': value });

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
      required={required}
    >
      <Autocomplete
        options={options}
        defaultValue={defaultValue}
        autoHighlight
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
            if (newValue == null) {
              setSearch('');
            }
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