import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red, lightBlue} from '@material-ui/core/colors/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: 50,
      width: 650,
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    listItem: {
        width: 650, 
    },
    updateIcon: { color: lightBlue.A400, },
    deleteIcon: { color: red.A400, },
  }),
);

export default useStyles;