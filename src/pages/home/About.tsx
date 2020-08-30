import styled from "@emotion/styled";
import Link from "next/link";

const Layout = styled.div`
  position: relative;
  width: 240px;

  @media (max-width: 820px) {
    display: none;
  }
`;

const Content = styled.div`
  position: sticky;
  top: 0;
  padding: 1em 0;
`;

const Divider = styled.div`
  border-top: 1px solid #e1e4e8;
  margin-top: 1em;
`;

const Section = styled.div`
  & + & {
    padding-top: 1em;
  }
`;

const Heading = styled.div`
  font-size: 13px;
  color: #586069;
  font-weight: 600;
  margin-bottom: 0.25em;
`;

const Text = styled.div`
  font-size: 13px;
  color: #586069;
`;

const AboutSection = styled.div`
  margin-top: 0.5em;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 1em;
`;

const About = () => {
  const links = [
    <Link href="/about" passHref>
      <a>About</a>
    </Link>,
    <a href="https://github.com/indegser/shared-in/issues" target="_blank">
      {"Ideas & Issues"}
    </a>,
  ];

  return (
    <Layout>
      <Content>
        <Section>
          <Heading>{"Experts' Bookmark"}</Heading>
          <Text>
            {
              "Articles read inside a team of experts are guaranteed to be high quality and worthy of everyone's reading."
            }
          </Text>
          <Divider />
        </Section>
        <AboutSection>
          {links.map((link, i) => (
            <Text key={i}>{link}</Text>
          ))}
        </AboutSection>
      </Content>
    </Layout>
  );
};

export default About;
