import Image from "next/image";
import { StyledContainer, StyledFooter, StyledHeader } from "./styles";
import { Button } from "../ui/button";
import LinkedInIcon from "../ui/linkedinicon";
import GithubIcon from "../ui/githubicon";
import Link from "next/link";

export const TextArea = () => {
  return (
    <StyledContainer className="">
      {/* <Image
        src={"/name.png"}
        width={500}
        height={400}
        alt="I'm Esther L. Software Engineer"
      ></Image> */}
      <StyledHeader>
        I'm Esther <b />
        Software Engineer
      </StyledHeader>
      <StyledFooter>
        Code intentional and user-friendly solutions with me
      </StyledFooter>
      <div className="flex flex-row gap-3">
        <Link
          href={"https://github.com/su-esther"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="icon" size="icon">
            <GithubIcon className="w-10 h-10"></GithubIcon>
          </Button>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/esther-lee-93651521b/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="icon" size="icon">
            <LinkedInIcon className="w-10 h-10"></LinkedInIcon>
          </Button>
        </Link>
      </div>
    </StyledContainer>
  );
};
