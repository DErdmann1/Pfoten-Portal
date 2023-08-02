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
import Header from "../../components/Header";

const StyledH1 = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  padding-bottom: 60px;
  margin: 0 20px;
`;

const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const StyledTextarea = styled.textarea`
  font-size: 18px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  font-size: 18px;
  padding: 8px, 16px;
  border-radius: 4px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const StyledH2 = styled.h2`
  position: center;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-decoration: none;
  border: 1px solid grey;
  width: 100px;
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
    <>
      <Header showSearch={false} />
      <Container>
        <StyledH1>{animal.name}</StyledH1>
        <StyledImage
          src={animal.image}
          alt={animal.name}
          width={animal.imageWidth}
          height={animal.imageHeight}
        />
        <p>Alter: {animal.age}</p>
        <p>Geschlecht: {animal.gender}</p>
        <p>Rasse: {animal.breed}</p>
        <p>Ort: {animal.location}</p>
        <p>{animal.infoText}</p>

        <BookmarkButton
          itemId={animal.id}
          isBookmarked={isBookmarked}
          onBookmark={handleBookmark}
        >
          Zu Favoriten
        </BookmarkButton>
        <StyledH2>Kontakt</StyledH2>
        {isSubmitted ? (
          <p>
            Vielen Dank für Ihre Nachricht! Unser Vermittlungsteam wird sich
            schnellstmöglich mit Ihnen in Verbindung setzen.
          </p>
        ) : (
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>
              Name:
              <StyledInput
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel>
              E-Mail:
              <StyledInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Betreff:
              <StyledInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </StyledLabel>
            <StyledLabel>
              Nachricht:
              <StyledTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></StyledTextarea>
            </StyledLabel>
            <SubmitButton type="submit">Senden</SubmitButton>
          </StyledForm>
        )}
        <br />
        <StyledLink href="/">Zurück</StyledLink>
        <br />
      </Container>
      <Footer />
    </>
  );
}
