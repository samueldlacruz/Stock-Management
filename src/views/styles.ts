import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    Typography: {
        marginBottom: theme.spacing(3)
    },
    titleIcon: {
      position: 'relative',
      top: theme.spacing(1)
    }
}));

export default useStyles;