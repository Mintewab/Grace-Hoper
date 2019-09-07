import React, { Fragment, useState, useEffect} from 'react';
import Gallery from "../Containers/GalleryComponent";
// import ReactCard from 'react-bootstrap/ReactCard';
// import Button from 'react-bootstrap/Button';
 import Layout from "./Layout";
import { getProducts } from "./apiPages";
import Card from "./Card";
import Search from "./Search";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import FloatNav from "react-uwp/FloatNav";
// import IconButton from "react-uwp/IconButton";


const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
      getProducts("sold").then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setProductsBySell(data);
          }
      });
  };

  const loadProductsByArrival = () => {
      getProducts("createdAt").then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setProductsByArrival(data);
          }
      });
  };

  useEffect(() => {
      loadProductsByArrival();
      loadProductsBySell();
  }, []);
 
  return(
      <Fragment>
   <Search /> 
   <Gallery />
   <Container>
   <Row>
   <Layout>
   <h2 className="mb-4">New Arrivals</h2>
            <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            </Layout>
   </Row>
   </Container>
   </Fragment>

        );
    };


export default Home;