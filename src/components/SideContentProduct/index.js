import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { productsListSlector } from '../../redux/selectors';
import { addProduct, deleteProduct, updateProduct } from '../../redux/Slice/productsSlice';
import { formatNumber } from '../../utils/formatNumber';
import './ProductsContent.scss'
import * as Yup from 'yup';

const SideContentProduct = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(productsListSlector)  
    const [edittingRow, setEditingRow] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [productUpdate, setProductUpdate] = useState({
        id: null,
        image: null,
        brand: null,
        name: null,
        price: null,
        quantity: null,
    })
    const handleUpdate = (row) =>{
        console.log(row)
        setEditingRow(row._id);
        setProductUpdate({
            id: row._id,
            brand: row.brand,
            image: row.image,
            name: row.name,
            price: parseInt(row.price),
            quantity: parseInt(row.quantity),
        })
    }
    const handleSubmit = () => {
        console.log(productUpdate);
        dispatch(updateProduct(productUpdate));
        setEditingRow(null);
    }
    const handleInputChange = async (e)=>{
        const value = e.target.value;
        const name = e.target.name
        await setProductUpdate({
            ...productUpdate,
            [name]: value,
        })
        console.log(productUpdate);

    }
    const handleDelete = (id)=>{
        dispatch(deleteProduct(id));
    }
    const columns = [
        {
            name: '',
            selector: row => row.image,
            cell: row=>(
                (row._id===edittingRow)
                    ?<input className = "input-update" name="image" type="url" value={productUpdate.image||row.image} onChange={handleInputChange}/>
                    :(<img style={{width: "100px"}} src={row.image} alt="anh"></img>)
            )
        },
        {
            name: <h5>Brand</h5>,
            selector: row => row.brand,
            wrap: true,
            cell: row=>(
                (row._id === edittingRow)
                    ?<input className = "input-update" name="brand" type="text" value={productUpdate.brand||row.brand} onChange={handleInputChange}/>
                    :(<p className="title-table">{row.brand}</p>)
            ),
            sortable: true,

        },
        {
            name: <h5>Name</h5>,
            selector: row => row.name,
            wrap: true,
            cell: row=>(
                (row._id === edittingRow)
                    ?<input className = "input-update" name="name" type="text" value={productUpdate.name||row.name} onChange={handleInputChange}/>
                    :(<p className="title-table">{row.name}</p>)
            ),
            sortable: true
        },
        {
            name: <h5>Giá</h5>,
            selector: row => row.price,
            cell: row=>(
                (row._id === edittingRow)
                    ?<input className = "input-update" name="price" type="number" value={productUpdate.price||row.price} onChange={handleInputChange}/>
                    :(<p className="title-table">{formatNumber(row.price)}₫</p>)
            ),
            sortable: true
        },
        {
            name: <h5>Số lượng</h5>,
            selector: row => row.quantity,
            cell: row=>(
                (row._id === edittingRow)
                    ?<input className = "input-update" name="quantity" type="number" value={productUpdate.quantity||row.quantity} onChange={handleInputChange}/>
                    :(<p className="title-table">{row.quantity}</p>)
            ),
            sortable: true
        },
        {
            name: "",
            cell: (row)=>(
                !(row._id === edittingRow)
                    ?(<>
                        <Button style={{marginRight: "10px"}} onClick={()=>handleUpdate(row)}>Sửa</Button>
                        <Button onClick={()=>handleDelete(row._id)}>Xóa</Button>
                    </>)
                    :(<>
                        <Button style={{marginRight: "10px"}} onClick={()=>setEditingRow(null)}>Hủy</Button>
                        <Button onClick={handleSubmit}>Lưu</Button>
                    </>)
                        
            )
        }
    ];  

    const [filterText, setFilterText] = useState('');
	const filteredItems = productsList.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	);
    const formikAdd = useFormik({
        initialValues: {
            name: "",
            image: "",
            brand: "",
            price: "",
            quantity: "" 
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống"),
            image: Yup.string().required("Không được để trống"),
            price: Yup.string().required("Không được để trống"),
            brand: Yup.string().required("Không được để trống"),
            quantity: Yup.string().required("Không được để trống"),
        }),
        validateOnChange: false,
        onSubmit: async (values)=>{
            console.log(values);
            formikAdd.validateOnChange = true;
            const newProduct = {
                name: values.name,
                image: values.image,
                brand: values.brand,
                price: values.price,
                quantity: values.quantity,
            }
            dispatch(addProduct(newProduct));
            setShowModal(false);
        }
    })
    return (
        <>
        <Card>
            <Card.Header><h2>Danh sách đơn hàng</h2></Card.Header>
            <Card.Body>
                <div className="table-top">
                    <Button className="btn-add" onClick={()=>setShowModal(true)}>Thêm</Button>
                    <input placeholder="Search..." onChange={e => setFilterText(e.target.value)} value={filterText} />
                </div>    
                <form>  
                    <DataTable 
                            columns={columns}
                            data={filteredItems}
                            pagination
                            persistTableHead/>   
                </form> 
            </Card.Body>
        </Card>
        <Modal show={showModal} centered onHide={()=>setShowModal(false)}>
            <Modal.Header closeButton><Modal.Title>Thêm sản phẩm</Modal.Title></Modal.Header>
            <Modal.Body>
                <form className = "form-login" onSubmit={formikAdd.handleSubmit}>
                    <input className="mt-4 p-2" name="name" placeholder="Tên sản phẩm" type="text" value = {formikAdd.values.name}
                        onChange = {formikAdd.handleChange}></input>
                    {formikAdd.errors.name ? (
                            <p className = "errorValidate">{formikAdd.errors.name}</p>
                        ):(<p></p>)}
                    <select className="mt-2 p-2" name="brand" value = {formikAdd.values.brand}
                        onChange = {formikAdd.handleChange}>
                        <option value="">--Chọn brand--</option>
                        <option value="Apple">Apple</option>
                        <option value="SamSung">SamSung</option>
                        <option value="Xiaomi">Xiaomi</option>
                        <option value="Oppo">Oppo</option>
                    </select>
                    {formikAdd.errors.brand ? (
                            <p className = "errorValidate">{formikAdd.errors.brand}</p>
                        ):(<p></p>)}
                    <input className="mt-2 p-2" name="price" type="number" placeholder="Giá sản phẩm" value = {formikAdd.values.price}
                        onChange = {formikAdd.handleChange}></input>
                    {formikAdd.errors.price ? (
                            <p className = "errorValidate">{formikAdd.errors.price}</p>
                        ):(<p></p>)}
                    <input className="mt-2 p-2" name="quantity" type="number" placeholder="Số lượng" value = {formikAdd.values.quantity}
                        onChange = {formikAdd.handleChange}/>
                    {formikAdd.errors.quantity ? (
                            <p className = "errorValidate">{formikAdd.errors.quantity}</p>
                        ):(<p></p>)}
                    <input className="mt-2 p-2" name="image" placeholder="Ảnh" value = {formikAdd.values.image}
                        onChange = {formikAdd.handleChange}/>
                    {formikAdd.errors.image ? (
                            <p className = "errorValidate">{formikAdd.errors.image}</p>
                        ):(<p></p>)}
                    <Button className="mt-4" type="submit">Thêm</Button>
                </form>
            </Modal.Body>
        </Modal>
        </>
        
    )
}
export default SideContentProduct;