import { Heading } from "../Heading/Heading";
import { Container } from "../Container/Container";
import * as SC from "./Hero.styled";

export const Hero = () => {
  return (
    <section>
      <Container>
        <SC.Lable>I make websites.</SC.Lable>
        <SC.Title as="h2" level="1">
          Heeeello
        </SC.Title>
        <SC.Description>Im a front-end developer etc</SC.Description>
        {/* <Heading level="3">I make websites.</Heading> */}
      </Container>
    </section>
  );
};
