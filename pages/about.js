import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
export default function About() {
  const [about, setAbout] = useState();

  useEffect(async () => {
    const res = await axios.get("aboutData");
    setAbout(res.data);
  }, []);
  return (
    <Layout title="Myshop | About" enableFooter={true} isAdmin={false}>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <h1 className="display-5 fw-bold lh-1">About Us</h1>
          {about?.map((ab, i) => {
            return (
              <>
                {" "}
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                  <h1 className="display-6 fw-bold lh-1">{ab.title}</h1>
                  <p className="lead" style={{ textAlign: "justify" }}>
                    {ab.desc}
                  </p>
                </div>
                <div className="col-lg-4  p-4 rounded-pill overflow-hidden shadow-lg">
                  <img src={ab.image} alt={ab.imgAlt} width="100%" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
