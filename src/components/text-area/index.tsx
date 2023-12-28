import Image from "next/image";
import { StyledContainer, StyledFooter, StyledHeader } from "./styles";

export const TextArea = () => {
  return (
    <StyledContainer className="">
      <Image
        src={"/name.png"}
        width={400}
        height={200}
        alt="I'm Esther L. Software Engineer"
      ></Image>
      {/* <StyledHeader>I'm Esther L.</StyledHeader>
      <StyledHeader>Software Engineer</StyledHeader> */}
      <StyledFooter>
        Make reliable and user-friendly products with me
      </StyledFooter>
    </StyledContainer>
  );
};
