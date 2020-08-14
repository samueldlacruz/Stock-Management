import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    form: {
     width: '100%'
    },
    paper: {
      width: '70%',
      padding: theme.spacing(2),
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
  }),
);

export default useStyles;