import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "./flowersSlice";
import { RootState } from "../../app/store";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';
import star from "../../images/star.png"

const Flowers = () => {
  const dispatch = useDispatch();
  const flowers = useSelector((state: RootState) => state.flowers.flowers);
  const loading = useSelector((state: RootState) => state.flowers.loading);
  const error = useSelector((state: RootState) => state.flowers.error);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    dispatch<any>(fetchFlowers());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "5vh 1vw" }} className="flowers-container">
      {flowers.map((flower) => (
        <Card
          style={{
            backgroundImage: `url(${flower.profile_picture})`,
            backgroundRepeat: "no-repeat",
            height: "25rem",
            width: "18rem",
            textAlign: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.3rem",
            margin: "0.6rem"
          }}
          key={flower.id}
        >
          <div style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
            height: "25rem",
            width: "18rem",
            borderRadius: "0.3rem"
          }}>
            {user.id && (<img src={star} alt="star" className="flowers-container__star" />)}
            <div className="text-white">
              <Card.Title style={{ marginBottom: 0, paddingTop: "18rem" }}>{flower.name}</Card.Title>
              <Card.Text style={{ fontSize: "0.8rem", fontStyle: "italic" }}>{flower.latin_name}</Card.Text>
              <Button variant="secondary" className="flowers-container__card__button">
                {flower.sightings} {flower.sightings === 1 ? "sighting" : "sightings"}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Flowers;
