import { useState } from "react";
import axios from "axios";
const CreateCarouselData = () => {
  const [carouselData, setCarouselData] = useState({ image: "", alt: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("carouselData", carouselData);

    if (res.status === 201) {
      setCarouselData({ image: "", alt: "" });

      alert("Created Carousel");
    }
  };
  const handleChange = (e) => {
    setCarouselData({ ...carouselData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#createcarousel"
      >
        Create Carousel
      </button>
      <div
        className="modal fade"
        id="createcarousel"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h5 className="modal-title">Create Carousel</h5>

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
                    id="caimage"
                    placeholder="Image Path"
                    name="image"
                    value={carouselData.image}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="caimage">Enter Image Path</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="caalt"
                    placeholder="Image Alt"
                    name="alt"
                    value={carouselData.alt}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="caalt">Enter Image Alt</label>
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

export default CreateCarouselData;
