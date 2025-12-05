import * as React from "react";

import {
  Body,
  Card,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  LinkList,
  TextList,
} from "@vodafone_de/brix-components";

import imgLogo from "@vodafone_de/brix-components/brix-react-logo-light.svg";

import imgCodeSandbox from "./assets/DiscoveryCard_CodeSandbox_16-9.png";
import imgGetStarted from "./assets/DiscoveryCard_GetStarted_16-9.png";

const App = () => {
  return (
    <>
      <Container border>
        <Image
          aspectRatio={"21/9"}
          src={imgLogo}
          style={{ width: "120px", height: "auto" }}
          alt={"brix/react"}
          loading={"lazy"}
        />
        <Heading size="xl" bottomSpacing="None">
          CodeSandbox ;)
        </Heading>
      </Container>
      <Container appearance="secondary" padding="Xl">
        <Heading size="md" tag="h2" weight="bold" bottomSpacing="Lg">
          Introduction
        </Heading>
        <Grid
          stretch
          autoLayout={{
            sm: 12,
            md: 6,
          }}
        >
          <GridItem>
            <Card>
              <Image
                corners={"rounded"}
                aspectRatio={"16/9"}
                bottomSpacing={"Md"}
                src={imgCodeSandbox}
                alt={"CodeSandbox"}
                loading="lazy"
              />
              <Heading size={"sm"} tag={"h3"}>
                What is CodeSandbox?
              </Heading>
              <Body>
                CodeSandbox is an online development environment that lets you
                write, preview and share code directly in the browser – no local
                setup required.
              </Body>
              <Body>
                We provide this template so you can interactively try out
                brix/react components, test variations and experiment with code.
              </Body>
              <Heading size={"xs"} tag={"h4"}>
                It's ideal for:
              </Heading>
              <TextList
                items={[
                  {
                    children: "Exploring how components behave 🔍",
                    key: "one",
                  },
                  {
                    children: "Getting familiar with our design system 🧑‍🎓",
                    key: "two",
                  },
                  {
                    children: "Sharing ideas or examples with others 📤",
                    key: "three",
                  },
                  {
                    children:
                      "Building small prototypes using real, coded components 🧱",
                    key: "four",
                  },
                ]}
                size={"md"}
                tag={"ul"}
                weight={"light"}
              />

              <Heading size={"xs"} tag={"h4"}>
                Please keep in Mind
              </Heading>
              <Body bottomSpacing={"None"}>
                CodeSandbox is <Body tag={"strong"}>public</Body>!
              </Body>
              <Body bottomSpacing={"None"}>
                It <Body tag={"strong"}>must not</Body> contain any internal
                information, embargoed content or business logic.
              </Body>
            </Card>
          </GridItem>
          <GridItem>
            <Card>
              <Image
                corners={"rounded"}
                aspectRatio={"16/9"}
                bottomSpacing={"Md"}
                src={imgGetStarted}
                alt={"Getting started"}
                loading={"lazy"}
              />
              <Heading size={"sm"} tag={"h3"}>
                Use this template to get started
              </Heading>
              <TextList
                items={[
                  {
                    children:
                      "<strong>Create a free CodeSandbox account:</strong> Sign up or log in at <a href='https://codesandbox.io/'>codesandbox.io</a> to be able to fork, save and share your own projects.",
                  },
                  {
                    children:
                      "<strong>Fork this sandbox:</strong> Create your own copy by selecting “Fork” in the top menu. If you are in full-screen preview, click “Open Sandbox” at the bottom right first.",
                  },
                  {
                    children:
                      "<strong>Modify the code:</strong> Use the examples on this page or try any other component. For convenience, you can copy code snippets directly from Storybook or the documentation.",
                  },
                  {
                    children:
                      "<strong>Preview your work:</strong> View changes in the Editor View (code + preview) or use the Preview Only mode in a separate tab.",
                  },
                  {
                    children:
                      "<strong>Share with others:</strong> Use the “Share” button in the top menu to generate a link, adjust settings and send your sandbox to others.",
                  },
                ]}
                tag={"ol"}
                itemSpacing={"Md"}
                bottomSpacing={"None"}
              />
            </Card>
          </GridItem>
        </Grid>
      </Container>
      <Container padding={"5Xl"}>
        <Heading size={"md"} tag={"h2"} weight={"bold"} bottomSpacing={"Lg"}>
          Helpful links
        </Heading>
        <LinkList
          variant={"column"}
          elevation={false}
          items={[
            {
              href: "https://vodafonebrand.de/hub/108",
              label: "Documentation",
              target: "_blank",
            },
            {
              href: "https://www.vodafone.de/simplicity/pattern",
              label: "Storybook",
              target: "_blank",
            },
            {
              href: "https://codesandbox.io/docs/learn",
              label: "CodeSandbox Learn",
              target: "_blank",
            },
          ]}
          bottomSpacing={"None"}
        />
      </Container>
      <Container theme={"Dark"} padding={"5Xl"}>
        <Body align={"center"} bottomSpacing={"None"}>
          Made with 💚 by Tetris
        </Body>
      </Container>
    </>
  );
};

export default App;
