import { Icon, IconButton, Toolbar, Tooltip, Typography, Switch, Button } from '@mui/material';
import { CustomSelectBox, StyledOption } from 'component/form/customselect';
import PropTypes from 'prop-types';
import SearchBox from './searchBox';

const DatatabeToolbar = (props) => {
  return (
    <Toolbar sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
      <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
        {props.titles}
      </Typography>
      {props.searchBar && <SearchBox {...props} />}
      <CustomSelectBox value={props.valueOptions} onChange={(e) => props.onChangeOptions(e)}>
        {props.optionsValue && props.optionsValue.map((c) => (
          <StyledOption key={c.name} value={c.name}>
            {c.name}
          </StyledOption>
        ))}
      </CustomSelectBox>
      {props.addRow && <Tooltip title="Add">
        <Button variant='contained' onClick={props.addRow}>
          {props.addbutton}
        </Button>
      </Tooltip>}
      {props.refresh && <Tooltip title="Refresh">
        <IconButton onClick={props.refreshData}>
          <Icon>refresh</Icon>
        </IconButton>
      </Tooltip>}
      {props.selectionModel && props.selectionModel.length > 0 && props.deleteMultiple && <Tooltip title="Delete Selected">
        <IconButton onClick={props.deleteSelected}>
          <Icon>delete</Icon>
        </IconButton>
      </Tooltip>}
      {props.filterActive &&
        <Tooltip title="Active Filter">
          <Switch
            checked={props.isActive ? true : false}
            onChange={e => props.filterActiveData(e.target.checked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Tooltip>
      }
      {props.customActions && props.customActions.map((action, index) => {
        return (
          <Tooltip key={`custom-action-${index}`} title={action.title}>
            <IconButton onClick={action.onClick}>
              <Icon>{action.icon}</Icon>
            </IconButton>
          </Tooltip>
        );
      })}
    </Toolbar>
  );
};

DatatabeToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  customActions: PropTypes.array,
};

DatatabeToolbar.defaultProps = {
  title: '',
  refresh: false,
  deleteMultiple: false,
  selectionModel: [],
  addRow: () => { },
  refreshData: () => { },
  deleteSelected: () => { },
  customActions: []
};

export default DatatabeToolbar;