import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
         display: 'flex',
        },
        title: {
          paddingLeft: theme.spacing(2)
        },
        toolbar: {
         paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'flex-end',
         padding: '0 8px',
         ...theme.mixins.toolbar,
        },
        appBar: {
         zIndex: theme.zIndex.drawer + 1,
         transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
        },
        appBarShift: {
         marginLeft: drawerWidth,
         width: `calc(100% - ${drawerWidth}px)`,
         transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
         }),
        },
        menuButton: {
         marginRight: 36,
        },
        menuButtonHidden: {
         display: 'none',
        },
        itemLink: {
         textDecoration: 'none',
         color: 'black'
        },
        drawerPaper: {
         position: 'relative',
         whiteSpace: 'nowrap',
         width: drawerWidth,
         transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
         }),
        },
        drawerPaperClose: {
         overflowX: 'hidden',
         transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        },    
    }),
);

export default useStyles;