import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import cats from "../../lib/cat_data";
import dogs from "../../lib/dog_data";
import smallanimals from "../../lib/smallanimals_data";
import Link from "next/link";
import Footer from "../../components/Footer/index.js";
import BookmarkButton from "../../components/Bookmarkbutton/index.js";

const StyledH1 = styled.h1`
  text-align: center;
`;

export default function MoreDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const animal = [...cats, ...dogs, ...smallanimals].find(
    (animal) => animal.id === parseInt(id)
  );

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsBookmarked(favorites.includes(parseInt(id)));
  }, [id]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isBookmarked) {
      favorites = favorites.filter((favId) => favId !== parseInt(id));
    } else {
      favorites.push(parseInt(id));
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!animal) {
    return <p>Tier nicht gefunden.</p>;
  }

  return (
    <div>
      <StyledH1>{animal.name}</StyledH1>
      <Image src={animal.image} alt={animal.name} width={500} height={500} />
      <p>Alter: {animal.age}</p>
      <p>Geschlecht: {animal.gender}</p>
      <p>Rasse: {animal.breed}</p>
      <p>Ort: {animal.location}</p>
      <p>{animal.infoText}</p>

      <BookmarkButton
        itemId={animal.id}
        isBookmarked={isBookmarked}
        onBookmark={handleBookmark}
      />

      {isSubmitted ? (
        <p>
          Vielen Dank für Ihre Nachricht! Unser Vermittlungsteam wird sich
          schnellstmöglich mit Ihnen in Verbindung setzen.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Betreff:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Nachricht:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <br />
          <button type="submit">Senden</button>
        </form>
      )}
      <br />
      <Link href="/">Zurück</Link>
      <br />
      <Footer />
    </div>
  );
}
