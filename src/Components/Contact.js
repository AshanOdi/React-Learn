import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Contact = () => {
  const [mainData, setMainData] = useState([]);
  const [themeChange, setThemeChange] = useState("true");

  useEffect(() => {
    const dataFetching = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();

      if (data) {
        console.log(data);
        setMainData(data);
      }
    };

    dataFetching();
  }, []);

  return (
    <ContactContainer>
      Contact Page
      <button onClick={() => setThemeChange((pre) => (pre ? false : true))}>
        Change Theme
      </button>
      <ContactBlock>
        {mainData?.map(({ id, title }) => (
          <Link to={`/contact/${id}`} key={id}>
            <ContactBlockUnit changeTheme={themeChange}>
              <img
                src="https://cdn.flowersnfruits.com/uploads/product/flowers_n_fruits/1631951968_pink-teddy.jpg"
                alt="contact block unit"
              />
              <h3>{title}</h3>
            </ContactBlockUnit>
          </Link>
        ))}
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.main`
  width: 100vx;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBlock = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnit = styled.div`
  background-color: ${(props) => (props.changeTheme ? "black" : "#f7b0b0")};
  padding: 20px;
  border: 2px solid ${({ changeTheme }) => {
    if (changeTheme) {
      return "black";
    } else {
      return "#f7b0b0";
    }
  }};}
  border-radius: 7px;
  transition: all 400ms ease-in;

  &:hover {
    background-color: inherit;
  }

  img {
    width: 100%;
    object-fit: contain;
  }
  h3 {
    font-size: 14px;
  }
`;
