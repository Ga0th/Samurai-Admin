import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0.5, 0.5, 0),
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
    textField: {
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'column',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        margin: theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(0.5),
        },
        '& .MuiInput-underline:before': {
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
    }
}));
