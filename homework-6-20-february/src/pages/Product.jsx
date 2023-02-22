import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <table className={"w3-table w3-striped w3-border"}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
            </tr>
            </thead>
            <tbody>
            {products.filter(product => product.unitsInStock !== 0).map(product => (
                <tr key={product.id} style={{ backgroundColor: product.unitPrice > 20 ? 'red' : "white" }}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.unitsInStock}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.quantityPerUnit}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Product;
