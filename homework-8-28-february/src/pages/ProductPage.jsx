import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import AddProduct from "../components/AddProduct";

function App() {

    const [products, setProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState();
    const [loading, setLoading] = useState(true)
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false)
            })
    }

    const onClickDeleteProduct = (item) => {
        setLoading(true);
        axios.delete('https://northwind.vercel.app/api/products/' + item.id)
            .then(res => {
                setProducts(products.filter(product => product.id !== item.id))
                setLoading(false)
            })

    }

    let columns = [
        {
            headerName: 'Id',
            field: 'id',
            flex: 0.3

        },
        {
            headerName: 'Unit Price',
            field: 'unitPrice',
            flex: 1
        },
        {
            headerName: 'Units In Stock',
            field: 'unitsInStock',
            flex: 1
        },
        {
            headerName: 'Quantity Per Unit',
            field: 'quantityPerUnit',
            flex: 1
        },
        {
            headerName: 'Delete',
            renderCell: (item) => {
                return (
                    <>
                        <Button color='error' onClick={() => {
                            setOpenDeleteConfirm(true)
                            setDeleteProduct(item)
                        }}>Delete</Button>
                    </>
                )
            }
        }
    ]

    return (
        <div style={{ height: 500, width: '100%' }}>
            <Button onClick={()=>setOpenModal(true)}>Add Product</Button>
            <AddProduct loadData={loadData} setOpenModal={setOpenModal} openModal={openModal}></AddProduct>
            <DataGrid
                rows={products}
                columns={columns}
                pageSize={10}
                loading={loading}
            />
            <Dialog
                open={openDeleteConfirm}
                onClose={() => setOpenDeleteConfirm(false)}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this product?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
                    <Button onClick={() => {
                        onClickDeleteProduct(deleteProduct);
                        setOpenDeleteConfirm(false);
                    }}
                            autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}

export default App;
