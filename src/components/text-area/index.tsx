import Image from "next/image";
import { StyledContainer, StyledFooter, StyledHeader } from "./styles";

export const TextArea = () => {
  return (
    <StyledContainer className="py-56">
      <Image
        src={"/name.png"}
        width={500}
        height={400}
        alt="I'm Esther L. Software Engineer"
      ></Image>
      {/* <StyledHeader>I'm Esther L.</StyledHeader>
      <StyledHeader>Software Engineer</StyledHeader> */}
      <StyledFooter>
        Let's code intentional and user-friendly solutions
      </StyledFooter>
    </StyledContainer>
  );
};
