import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlowers } from "./flowersSlice";
import { RootState } from "../../app/store";
import Card from "react-bootstrap/Card";

const Flowers = () => {
  const dispatch = useDispatch();
  const flowers = useSelector((state: RootState) => state.flowers.flowers);
  console.log(flowers);
  const loading = useSelector((state: RootState) => state.flowers.loading);
  const error = useSelector((state: RootState) => state.flowers.error);

  useEffect(() => {
    dispatch<any>(fetchFlowers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {flowers.map((flower) => (
        <Card
          style={{
            backgroundImage: `url(${flower.profile_picture})`,
            backgroundRepeat: "no-repeat",
            height: "25rem",
            width: "18rem",
            textAlign: "center",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          key={flower.id}
        >
          <div className="text-white">
            <Card.Title>{flower.name}</Card.Title>
            <Card.Text>{flower.latin_name}</Card.Text>
            <Card.Text>sightings: {flower.sightings}</Card.Text>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Flowers;
