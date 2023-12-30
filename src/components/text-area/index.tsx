import Image from "next/image";
import { StyledContainer, StyledFooter, StyledHeader } from "./styles";

export const TextArea = () => {
  return (
    <StyledContainer>
      <Image
        src={"/name.png"}
        width={400}
        height={200}
        alt="I'm Esther L. Software Engineer"
      ></Image>
      {/* <StyledHeader>I'm Esther L.</StyledHeader>
      <StyledHeader>Software Engineer</StyledHeader> */}
      <StyledFooter>
        Make user-friendly products with me
      </StyledFooter>
    </StyledContainer>
  );
};
