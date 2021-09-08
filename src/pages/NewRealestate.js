import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "redux/auth/authActions";

const NewRealestate = () => {
  const history = useHistory()

  const createNewRealestate = e => {
    e.preventDefault();
    const creds = {};
    //dispatch(register(creds));
    history.push('/');
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="mt-5">New real estate</h1>
        <form onSubmit={e => createNewRealestate(e)}>
          <div className="mb-3">
            <label htmlFor="title" class="form-label">title</label>
            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" class="form-label">description</label>
            <textarea className="form-control" id="description" />
          </div>
          <div className="mb-3">
            <label htmlFor="location" class="form-label">location</label>
            <input type="text" className="form-control" id="location" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" class="form-label">address</label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="mb-3">
            <label htmlFor="price" class="form-label">price</label>
            <input type="text" className="form-control" id="price" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRealestate;

//     t.integer "user_id"
//     t.integer "category_id"
//     t.index ["category_id"], name: "index_real_estates_on_category_id"
//     t.index ["user_id"], name: "index_real_estates_on_user_id"