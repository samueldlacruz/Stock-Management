import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red, lightBlue} from '@material-ui/core/colors/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: 150,
      width: 700,
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    listItem: {
        width: 650, 
    },
    block: {
      display:'block'
    },
    updateIcon: { color: lightBlue.A400, },
    deleteIcon: { color: red.A400, },
  }),
);

export default useStyles;