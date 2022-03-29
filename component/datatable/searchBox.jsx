import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './stylesheet';

const SearchBox = (props) => {
    const classes = useStyles();
    return (
        <TextField
            variant="standard"
            value={props.value}
            onChange={props.onChange}
            placeholder="Search…"
            className={classes.textField}            
            InputProps={{
                startAdornment: <SearchIcon fontSize="small" />,
                endAdornment: (
                    <IconButton
                        title="Clear"
                        aria-label="Clear"
                        size="small"
                        style={{ visibility: props.value ? 'visible' : 'hidden' }}
                        onClick={props.clearSearch}
                    >
                        <ClearIcon fontSize="small" />
                    </IconButton>
                ),
            }}
        />
    )
}

export default SearchBox