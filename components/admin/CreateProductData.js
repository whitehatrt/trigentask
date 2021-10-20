import { useState } from "react";
import axios from "axios";
const CreateProductData = () => {
  const [productData, setProductData] = useState({
    image: "",
    imgAlt: "",
    name: "",
    description: "",
    price: "",
    discount: "",
    inStock: "",
    slug: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("productsData", productData);

    if (res.status === 201) {
      setProductData({
        image: "",
        imgAlt: "",
        name: "",
        description: "",
        price: "",
        discount: "",
        inStock: "",
        slug: "",
      });

      alert("Created Product");
    }
  };
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#createproduct"
      >
        Create Product
      </button>
      <div
        className="modal fade"
        id="createproduct"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content rounded-5 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h5 className="modal-title">Create Product</h5>

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
                    id="paimage"
                    placeholder="Product Image"
                    name="image"
                    value={productData.image}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="paimage">Enter image path</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="paimgAlt"
                    placeholder="Product Image alt"
                    name="imgAlt"
                    value={productData.imgAlt}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="paimgAlt">Enter Image Alt</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="paname"
                    placeholder="Product Name"
                    name="name"
                    value={productData.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="paname">Enter name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="padescription"
                    placeholder="Product description"
                    name="description"
                    value={productData.description}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="padescription">Enter description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="paprice"
                    placeholder="Product price"
                    name="price"
                    value={productData.price}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="paprice">Enter price</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="padiscount"
                    placeholder="Product Discount"
                    name="discount"
                    value={productData.discount}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="padiscount">Enter discount</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="painStock"
                    placeholder="Product In Stock(e.g. 'yes' or 'no')"
                    name="inStock"
                    value={productData.inStock}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="painStock">Enter inStock</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control rounded-4"
                    id="paslug"
                    placeholder="Product slug"
                    name="slug"
                    value={productData.slug}
                    onChange={(e) => handleChange(e)}
                  />
                  <label htmlFor="paslug">Enter slug</label>
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

export default CreateProductData;
