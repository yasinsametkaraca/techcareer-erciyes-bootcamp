import React, {useEffect, useState} from 'react';
import {Box, Modal, TextField, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import { LoadingButton } from '@mui/lab';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const addProductValidation = yup.object({
    name: yup.string().required("Name is Required"),
    unitPrice: yup.string().required("Unit Price is Required"),
    quantityPerUnit: yup.string().required("Quantity Per Unit is Required"),
    unitsInStock: yup.string().required("Units In Stock is Required")
})
const AddProduct = ({openModal,setOpenModal,loadData}) => {

    let { register, handleSubmit, reset, formState:{ errors,isSubmitSuccessful}} = useForm({
        resolver: yupResolver(addProductValidation)
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }

    }, [isSubmitSuccessful]);
    const onSubmit = data => {
        setLoading(true)
        axios.post('https://northwind.vercel.app/api/products', data)
            .then(res => {
                loadData();
                setOpenModal(false);
                setLoading(false);
            })
    };
    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} >
                <Typography id="modal-modal-title" variant="h6" component="h3">
                    Add Product
                </Typography>
                <Typography variant="h5" id="modal-modal-description" sx={{ mt: 2 }}>
                    <Box onSubmit={handleSubmit(onSubmit)}
                         component='form'
                         noValidate
                         autoComplete='off'
                          >
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            type="text"
                            label="Name"
                            variant="outlined"
                            required
                            error={!!errors['name']}
                            {...register('name')}
                            helperText={errors['name'] ? errors['name'].message : ''}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            type="text"
                            label="Quantity Per Unit"
                            variant="outlined"
                            required
                            error={!!errors['quantityPerUnit']}
                            helperText={errors['quantityPerUnit'] ? errors['quantityPerUnit'].message : ''}
                            {...register("quantityPerUnit")}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            type="number"
                            label="Unit Price"
                            variant="outlined"
                            required
                            error={!!errors['unitPrice']}
                            helperText={errors['unitPrice'] ? errors['unitPrice'].message : ''}
                            {...register("unitPrice")}
                        />
                        <br />
                        <TextField
                            style={{ width: "300px", margin: "5px" }}
                            type="number"
                            label="Units In Stock"
                            variant="outlined"
                            required
                            error={!!errors['unitsInStock']}
                            helperText={errors['unitsInStock'] ? errors['unitsInStock'].message : ''}
                            {...register("unitsInStock")}
                        />
                        <br />
                        <LoadingButton
                            variant='contained'
                            fullWidth
                            type='submit'
                            loading={loading}
                            sx={{ py: '0.8rem', mt: '1rem' }}
                        >
                            Add
                        </LoadingButton>
                    </Box>
                </Typography>
            </Box>
        </Modal>
    );
}

export default AddProduct;