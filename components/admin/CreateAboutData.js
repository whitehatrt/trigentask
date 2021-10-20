import { useState } from "react";
import axios from "axios";
const CreateAboutData = () => {
  const [aboutData, setAboutData] = useState({
    image: "",
    imgAlt: "",
    title: "",
    desc: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("aboutData", aboutData);

    if (res.status === 201) {
      setAboutData({ image: "", imgAlt: "", title: "", desc: "" });

      alert("Added About Data");
    }
  };
  const handleChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#addabout"
      >
        Create About 
      </button>
      <div
        className="modal fade"
        id="addabout"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h5 className="modal-title">Add About</h5>

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
                    id="abimage"
                    placeholder="Image Path"
                    name="image"
                    value={aboutData.image}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="abimage">Enter Image Path</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="abimgAlt"
                    placeholder="Image Alt"
                    name="imgAlt"
                    value={aboutData.imgAlt}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="abimgAlt">Enter Image Alt</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="abtitle"
                    placeholder="Title"
                    name="title"
                    value={aboutData.title}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="abtitle">Enter Title</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    
                    className="form-control rounded-4"
                    id="abdesc"
                    placeholder="Description"
                    name="desc"
                    value={aboutData.desc}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="abdesc">Enter Description</label>
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

export default CreateAboutData;
