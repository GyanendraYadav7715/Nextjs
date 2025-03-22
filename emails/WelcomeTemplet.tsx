import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
const WelcomeTemplet = ({ name }: { name: String }) => {
  return (
    <Html>
      <Preview>Welcome to India!!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text style={text} className="font-serif text-center">
              !!India!!- Come and see the beauty of India with your own eyes,
              where thousands of religions stand and live together.
            </Text>
            <Text className="font-serif text-center text-xl">I am {name}</Text>
            <Link
              href="#"
              className="font-serif text-center text-xl flex items-center justify-center"
            >
              www.india.com
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#fff",
};
const text: CSSProperties = {
  color: "green",
  fontSize: "18px",
  fontWeight: "600",
};
export default WelcomeTemplet;
