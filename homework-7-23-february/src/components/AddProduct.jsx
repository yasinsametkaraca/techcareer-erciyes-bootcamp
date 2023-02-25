import React, {useState} from 'react';

function AddProduct({setSuppliers,suppliers,open,setOpen}) {
    const [country, setCountry] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
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
            <form className={""} onSubmit={handleSubmit}>
                <label>
                    Country:
                    <input type="text" value={country} onChange={event => setCountry(event.target.value)} />
                </label>
                <label>
                    Company Name:
                    <input type="text" value={companyName} onChange={event => setCompanyName(event.target.value)} />
                </label>
                <br />
                <label>
                    Contact Name:
                    <input type="text" value={contactName} onChange={event => setContactName(event.target.value)} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={contactTitle} onChange={event => setContactTitle(event.target.value)} />
                </label>
                <br />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding supplier...' : 'Add'}
                </button>
            </form>
        </div>
    );
}
export default AddProduct;
