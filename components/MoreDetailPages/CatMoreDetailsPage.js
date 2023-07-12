import { useParams } from "react-router-dom";
import cats from "../../lib/cat_data";
import Image from "next/image";

const CatMoreDetailsPage = () => {
  const { id } = useParams();
  const cat = cats.find((cat) => cat.id === parseInt(id));

  return (
    <div>
      <h1>{cat.name}</h1>
      <Image src={cat.image} alt={cat.name} width={500} height={500} />
      <p>Alter: {cat.age}</p>
      <p>Geschlecht: {cat.gender}</p>
      <p>Rasse: {cat.breed}</p>
      <p>Ort: {cat.location}</p>
      <p>{cat.infoText}</p>
    </div>
  );
};

export default CatMoreDetailsPage;
