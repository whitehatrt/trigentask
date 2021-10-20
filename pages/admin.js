import {
  CreateAboutData,
  CreateCarouselData,
  CreateHeaderRoutes,
  CreateHeaderRoutesAdmin,
  CreateProductData,
} from "../components/admin";
import Layout from "../components/Layout";
const admin = () => {
  return (
    <Layout title="Myshop | Admin" enableFooter={false} isAdmin={true}>
      <div className="container my-3 ">
        <div className="d-flex justify-content-between">
          <CreateHeaderRoutes />
          <CreateHeaderRoutesAdmin />
          <CreateCarouselData/>
          <CreateProductData/>
          <CreateAboutData/>
        </div>
      </div>
    </Layout>
  );
};

export default admin;
