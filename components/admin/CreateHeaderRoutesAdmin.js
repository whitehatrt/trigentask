import { useState } from "react";
import axios from "axios";
const CreateHeaderRoutesAdmin = () => {
  const [headerData, setheaderData] = useState({ path: "", label: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("headerRoutesAdmin", headerData);

    if (res.status === 201) {
      setheaderData({ path: "", label: "" })
      alert("Created Admin Route");
    }
  };
  const handleChange = (e) => {
    setheaderData({ ...headerData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#createheaderroutesadmin"
      >
        Create Admin Header Routes
      </button>
      <div
        className="modal fade"
        id="createheaderroutesadmin"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h5 className="modal-title">Create Admin Header Routes</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5 pt-0">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="routepath"
                    placeholder="/"
                    name="path"
                    value={headerData.path}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="routepath">Enter Path</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="routelabel"
                    placeholder="Label"
                    name="label"
                    value={headerData.label}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="routelabel">Enter Label</label>
                </div>
                <button
                  className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHeaderRoutesAdmin;
