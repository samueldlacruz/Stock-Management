import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 150,
      width: 650,
      padding: theme.spacing(2),
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center'
    },
  }),
);

export default useStyles;