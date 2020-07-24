import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

interface NotifyProps {
   title: string;
   content: string;
   type:  "success" | "info" | "warning" | "error" | undefined;
}

const Notify: React.FC<NotifyProps> = (props) => {
    return (
        <Alert severity={props.type}>
         <AlertTitle>{props.title}</AlertTitle>
         <strong>{props.content}</strong>
        </Alert>
    )
}

export default Notify;
