import { Accordion, FormHelperText, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { apiConfig } from '../../utils/api';
import { FormControl } from './index';

const MuiGroupCheckBox = (props) => {
  const { name, label, value, url, required, fullWidth, helperText, disabled, getOptionLabel, getOptionValue, getChildOptionLabel, getChildOptionValue } = props;

  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);


  const getData = async () => {
    await apiConfig.get(url).then((response) => {
      if (response.status === 200) {
        setOptions(response.data);
      }
    });
  };

  const handleChange = (e) => {
    const index = value.indexOf(e);
    let selected = value || [];
    if (index > -1) {
      selected.splice(index, 1);
    } else {
      selected.push(e);
    }
    props.onChange(selected);
  };

  const getLabel = (element) => {
    return element[getOptionLabel];
  };

  const getValue = (element) => {
    return element[getOptionValue];
  };

  const getChildLabel = (element) => {
    return element[getChildOptionLabel];
  };

  const getChildValue = (element) => {
    return element[getChildOptionValue];
  };

  const handleCheckAll = (e, selected) => {
    e.persist();
    const selectedItems = value;

    if (e.target.checked) {
      if (selected.children) {
        selected.children.forEach((element) => {
          const index = selectedItems.indexOf(getChildValue(element));
          if (index >= 0) {
            selectedItems.splice(index, 1);
          }
          selectedItems.push(getChildValue(element));
        });
      }
    } else {
      if (selected.children) {
        selected.children.forEach((element) => {
          const index = selectedItems.indexOf(getChildValue(element));
          if (index >= 0) {
            selectedItems.splice(index, 1);
          }
        });
      }
    }

    props.onChange(selectedItems);
  };

  return (
    <FormControl
      key={`key${name}`}
      error={helperText ? true : false}
      fullWidth={fullWidth}
    >

      <FormLabel style={{ marginBottom: 10 }} component='legend'>{label}</FormLabel>

      {options && options.map((option) => {

        const mainLabel = getLabel(option);
        let parentChecked = false;

        const childrenIds = option && option.children && option.children.map((childrenOption) => childrenOption[getChildOptionValue]);

        if (childrenIds) {
          childrenIds.forEach((element) => {
            if (value.includes(element)) {
              parentChecked = true;
            }
          });
        }

        return (
          <Accordion key={`${options.name}Accordion${mainLabel}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={mainLabel}
              id={getValue(option)}
            >
              <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                  <Checkbox
                    checked={parentChecked}
                    onChange={(e) => handleCheckAll(e, option)}
                  />
                }
                label={mainLabel}
              />
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <Grid container>
                  {option.children && option.children.map((childrenOption) => {
                    let checked = false;
                    const label = getChildLabel(childrenOption);
                    if (value) {
                      checked = value.includes(
                        getChildValue(childrenOption)
                      );
                    }
                    return (
                      <Grid
                        container
                        item
                        sm={12}
                        md={6}
                        lg={6}
                        key={`${options.name}FormControlLabel${label}`}
                      >
                        <FormControlLabel
                          checked={checked}
                          disabled={disabled}
                          control={<Checkbox color="primary" required={required} />}
                          label={label}
                          labelPlacement="end"
                          onChange={() => handleChange(getChildValue(childrenOption))}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </FormGroup>
            </AccordionDetails>
          </Accordion>

        );
      })}

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );


};

export default MuiGroupCheckBox;