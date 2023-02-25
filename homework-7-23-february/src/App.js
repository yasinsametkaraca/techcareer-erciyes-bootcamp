import React, { useEffect, useState } from 'react'
import AddProduct from "./components/AddProduct";
const App = () => {

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false);

  useEffect(() => {
      if(!open){
          fetchData();
      }
  }, [open]);

     const fetchData = async () => {
        try {
            const response = await fetch('https://northwind.vercel.app/api/suppliers');
            const data = await response.json();
            setSuppliers(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    const handleDelete = async (supplierID) => {
        setLoading(true);
        try {
            const response = await fetch(`https://northwind.vercel.app/api/suppliers/${supplierID}`, { method: 'DELETE' });
            if (response.ok) {
                const newSuppliers = suppliers.filter(supplier => supplier.id !== supplierID);
                setSuppliers(newSuppliers);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }
    return (<>

        <button onClick={() => setOpen(!open)} className="w3-button">Add Suppliers</button>
        {open ? <AddProduct open={open} setOpen={setOpen} suppliers={suppliers} setSuppliers={setSuppliers} setLoading={setLoading}></AddProduct>
            : <table className='w3-table w3-striped w3-border'>
                <thead>
                <tr>
                    <th>Country</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    {loading ? <th>Loading...</th> :<th>Delete</th>}
                </tr>
                </thead>
                <tbody>
                {
                    suppliers && suppliers.map(item => {
                        return <tr key={item.id}>
                            <td>{item.address?.country}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table> }
  </>)
}
export default App;