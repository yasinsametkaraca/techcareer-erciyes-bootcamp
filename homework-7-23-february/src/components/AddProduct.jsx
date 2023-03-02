import React, {useState} from 'react';
import {useNavigate} from "react-router";

function AddProduct({setSuppliers,suppliers,open,setOpen}) {

    const [country, setCountry] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        let newSuppliers = {
            companyName,
            contactName,
            contactTitle,
            "address": {
                country
            },
        }
        try {
            const response = await fetch('https://northwind.vercel.app/api/suppliers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSuppliers),
            });
            setOpen(false);
            if (response.ok) {
                alert('Supplier added!');
                setCountry('')
                setCompanyName('');
                setContactName('');
                setContactTitle('');
                setSuppliers([...suppliers,newSuppliers])
            } else {
                alert('Error adding supplier');
            }
        } catch (error) {
            console.error(error);
            alert('Error adding supplier');
        }
        setIsSubmitting(false);
    }
    return (
        <div>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Country:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            value={country} onChange={event => setCountry(event.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Company Name:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            value={companyName} onChange={event => setCompanyName(event.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Contact Name:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            value={contactName} onChange={event => setContactName(event.target.value)}/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Contact Title:
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            value={contactTitle} onChange={event => setContactTitle(event.target.value)}/>
                    </div>
                </div>
                <div className={"flex justify-end"}>
                    <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded ml-2"
                        type="submit" disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Adding supplier...' : 'Add'}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default AddProduct;
