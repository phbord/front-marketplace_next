import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { v4 as uuid_v4 } from "uuid";
import Cookies from 'js-cookie';

import { register } from "redux/auth/authActions";
import { API_LOCATION } from 'services/api';

const NewRealestate = ({crud}) => {
  const history = useHistory()
  const { id } = useParams()
  const [listing, setListing] = React.useState('') || {}

  const [categories, setCategories] = React.useState([])
  const [selectValue, setSelectValue] = React.useState('')
  const [categoryValue, setCategoryValue] = React.useState('')

  const selectEl = React.useRef(null)
  const titleEl = React.useRef(null)
  const descriptionEl = React.useRef(null)
  const locationEl = React.useRef(null)
  const addressEl = React.useRef(null)
  const priceEl = React.useRef(null)
  const image1 = React.useRef(null)
  const image2 = React.useRef(null)
  const image3 = React.useRef(null)

  const getListing = async (url) => {
    const config = {
      method: 'GET',
    };

    const response = await fetch(`${API_LOCATION}/${url}`, config);
    const data = await response.json();

    console.log('===> ', data);
    setListing(data)
  };

  const createNewRealestate = async e => {
    e.preventDefault();

    let token = ''
    let formData = new FormData();

    formData.append('title', titleEl.current.value)
    formData.append('description', descriptionEl.current.value)
    formData.append('location', locationEl.current.value)
    formData.append('category', selectValue ? selectValue : categories.filter(c => c.title === categoryValue)[0].id)
    formData.append('address', addressEl.current.value)
    formData.append('price', priceEl.current.value)
    formData.append('image1', image1.current.files[0])
    formData.append('image2', image2.current.files[0])
    formData.append('image3', image3.current.files[0])

    const config = {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${Cookies.get('token')}`
      },
      body: formData
    }
    const res = await fetch(`${API_LOCATION}/real_estates`, config);
    console.log(res)
    history.push('/');
  }

  const updateNewRealestate = async e => {
    e.preventDefault();

    console.log('>>>>>>', crud);
  }

  const getCategories = async (url) => {
    const config = {
      method: 'GET',
    };
    const response = await fetch(`${API_LOCATION}/${url}`, config);
    const data = await response.json();
    setCategories(data)
    setCategoryValue(data[0].title)
  }

  const handleChange = () => {
    setSelectValue(selectEl.current.value)
  }

  React.useEffect(() => {
    getListing(`real_estates/${id}`)
    getCategories('categories')
  }, [])

  return (
    <>
      <div className="container my-5">
        <h1 className="mt-5">{crud === 'update' ? 'Update real estate' : 'New real estate'}</h1>
        <form onSubmit={e => { crud === 'update' ? updateNewRealestate(e) : createNewRealestate(e) }} 
              encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" ref={titleEl} value={crud === 'update' ? listing?.title : ''}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" ref={descriptionEl} value={crud === 'update' ? listing?.description : ''}/>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" className="form-control" id="location" ref={locationEl} value={crud === 'update' ? listing?.location : ''}/>
          </div>
          {/* CATEGORIES (select) */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select className="form-select" id="category" ref={selectEl} onChange={handleChange}>
              {
                categories.map((cat, index) => (
                  <option key={uuid_v4()} 
                          selected={crud === 'update' && listing?.category?.title === cat.title ? listing?.location : ''}>
                    {cat.title}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" ref={addressEl} value={crud === 'update' ? listing?.address : ''}/>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="text" className="form-control" id="price" ref={priceEl} value={crud === 'update' ? listing?.price : ''}/>
          </div>
          {/* IMAGES */}
          <div className="mb-3">
            <label htmlFor="image1" className="form-label">Image 1</label>
            <input type="file" className="form-control" id="image1" required accept="image/*" ref={image1} />
          </div>
          <div className="mb-3">
            <label htmlFor="image2" className="form-label">Image 2</label>
            <input type="file" className="form-control" id="image2" accept="image/*" ref={image2} />
          </div>
          <div className="mb-3">
            <label htmlFor="image3" className="form-label">Image 3</label>
            <input type="file" className="form-control" id="image3" accept="image/*" ref={image3} />
          </div>
          <div className="mb-3">
            {
              crud === 'update' && listing?.images_url ? (
                <ul className="realestate-img-group">
                  <li className="me-2 mb-2"></li>
                </ul>
              )
              : (
                ''
              )
            }
          </div>
          {/* BUTTONS */}
          <div className="mb-3 d-flex">
            <button type="button" onClick={() => history.goBack()} className="btn btn-secondary me-2">Back</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRealestate;
