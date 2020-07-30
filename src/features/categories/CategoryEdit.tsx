import React from 'react';
import EditModal from '../../components/EditModal';
import { CategoryModel } from './CategoryModel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import useStyles from './categoryForm.styles';
import { useStores } from '../../store/StoresProvider';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

interface CategoryEditProps {
   open: boolean;
   handleClose: () => void;
   data: CategoryModel;
}

const CategoryEntrySchema = yup.object().shape({
    name: yup.string().required('this is required'),
    description: yup.string().max(55).required('this is required'),
});

const CategoryEdit: React.FC<CategoryEditProps> = (props) => {
    const classes = useStyles();
   
    const { categoriesStore: { editCategory, fetchCategories } } = useStores();

    const { register, handleSubmit, errors } = useForm<CategoryModel>({
        resolver: yupResolver(CategoryEntrySchema)
    });
    
    const onSubmit = (data: CategoryModel): void => {
        const upCategory = {
            id: props.data.id,
            ...data
        }

        editCategory(upCategory); 
        fetchCategories();
    };

    return (
        <EditModal
         open={props.open}
         title="category edit"
         description={`edit category ${props.data.name}- ${props.data.id}`}
         onClose={props.handleClose}
         onAction={handleSubmit(onSubmit)}
        >
        <form className={classes.form} noValidate autoComplete="off">
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <TextField
                inputRef={register}
                id="name"
                name="name"
                label="name"
                defaultValue={props.data.name}
                variant="outlined"
                size="small"
                error={ errors.name ? true : false }
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                inputRef={register}
                id="description"
                name="description"
                label="description"
                defaultValue={props.data.description}
                variant="outlined"
                size="small"
                error={ errors.name ? true : false }
                />                
            </Grid>
            </Grid>
        </form>
        </EditModal>
    );
}

export default CategoryEdit;