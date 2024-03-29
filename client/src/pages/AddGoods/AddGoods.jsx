import React, { useState } from 'react';
import { Button, IconButton, Modal, TextField } from '@mui/material';
import './AddGoods.css';
import Header from '../../components/Header';
import SearchIcon from '@mui/icons-material/Search';

const AddGoods = ({ productItems, setProductItems }) => {
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [products, setProducts] = useState(productItems || []);
    const [openModal, setOpenModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddClick = () => {
        if (productName && productType && productPrice && productImage) {
            const newProduct = {
                name: productName,
                type: productType,
                price: productPrice,
                img: URL.createObjectURL(productImage),
            };

            setProductItems([...productItems, newProduct]);

            setProductName('');
            setProductType('');
            setProductPrice('');
            setProductImage(null);
        } else {
            setOpenModal(true);
        }
    };

    const handleRemoveClick = (index) => {
        const updatedProducts = [...productItems];
        updatedProducts.splice(index, 1);
        setProductItems(updatedProducts);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Header />

            <div style={{ background: "rgba(189, 215, 202, 0.252)", paddingBottom: "40px" }}>
                <div className='formAddGoods'>
                    <div className='inputs'>
                        <TextField
                            style={{ marginRight: '20px' }}
                            type='text'
                            placeholder='Enter name'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        <TextField
                            style={{ marginRight: '20px' }}
                            type='text'
                            placeholder='Enter type'
                            value={productType}
                            onChange={(e) => setProductType(e.target.value)}
                        />
                        <TextField
                            type='text'
                            placeholder='Enter price'
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </div>
                    <div className='fileInputWrapper'>
                        <button className='addButton fileInputButton' type='button'>
                            Choose File
                        </button>
                        <input
                            className='fileInput'
                            type='file'
                            onChange={(e) => setProductImage(e.target.files[0])}
                        />
                    </div>
                    {productImage && <img alt='Preview' src={productImage ? URL.createObjectURL(productImage) : ''} style={{ marginTop: '20px', }} />}
                    <button style={{ width: "400px", height: "40px", marginTop: "20px" }} className='fileInputButton' type='button' onClick={handleAddClick}>
                        Add
                    </button>
                    <Modal open={openModal} onClose={handleCloseModal}>
                        <div className="modal">
                            <p>Please fill in all fields</p>
                        </div>
                    </Modal>
                </div>
                <TextField
                    style={{ marginTop: '20px', marginLeft: "80px", width: "300px", marginBottom: "10px" }}
                    type='text'
                    placeholder='Search by name'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        sx: {
                            "& fieldset": { borderColor: "green" },
                            "&:hover fieldset": { borderColor: "green" },
                            "&.Mui-focused fieldset": { borderColor: "green" },
                        },
                        endAdornment: (
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div style={{ marginLeft: '60px' }}>
                    {productItems
                        .filter((goods) =>
                            goods.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((goods, index) => (
                            <div className='product' style={{ height: '520px' }} key={index}>
                                <img src={goods.img} alt={`Image for ${goods.name}`} style={{ marginTop: '20px', width: '400px', height: '400px', objectFit: 'contain' }} />
                                <div className='description'>
                                    <p>
                                        <b>{goods.name}</b>
                                    </p>
                                    <p>{goods.type}</p>
                                    <p>${goods.price}</p>
                                    <button style={{ marginBottom: '30px' }} className='addButton' onClick={() => handleRemoveClick(index)}>
                                        REMOVE
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default AddGoods;

