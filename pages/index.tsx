import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import Lottie from "lottie-react";
import animation from "../public/lottie.json";
import animation1 from "../public/lottie1.json";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO title="Social Club AI" description="" />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                The Social
                <Br /> Club AI
              </FallInPlace>
            }
            description={
              <FallInPlace
                delay={0.4}
                fontWeight="medium"
                style={{ marginBottom: 20 }}
              >
                Building a vibrant community where AI startups can thrive with
                the provided resources they need to become successful.{" "}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink
                  size="lg"
                  href="mailto:thesocialclubai@gmail.com"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Contact Us
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden">
                <Lottie
                  animationData={animation}
                  style={{
                    width: 550,
                    height: "80%",
                    marginLeft: 90,
                    marginTop: 40,
                  }}
                  loop={true}
                ></Lottie>
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Range of Resources",
            icon: FiSmile,
            description:
              "We include legal support, access to funding partners, events with guest speakers, mentorship opportunities, and workshops to stimulate growth.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Startups",
            icon: FiSliders,
            description:
              "Our company fosters a thriving community of startups around you",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Environment",
            icon: FiGrid,
            description:
              "We are able to create an environment conducive to success",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Platform",
            icon: FiThumbsUp,
            description:
              "Our platform is designed to propel you towards success!",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Team With a Proven Track Record"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            The former founder, Dhruv Kulkarni, sold his company to Forta with
            connections to Silicon Valley Communities and startups. He also
            managed the largest AI startup community at UC Berkeley.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="The Team">
        <Text color="muted" fontSize="lg">
          His team also brings experience in running and scaling startups.
        </Text>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <>
      <Features
        id="features"
        title={
          <Heading
            lineHeight="short"
            fontSize={["2xl", null, "4xl"]}
            textAlign="left"
            as="p"
          >
            Our Mission
          </Heading>
        }
        description={
          <>
            Building a vibrant community where AI startups can thrive with the
            provided resources they need to become successful.
          </>
        }
        align="left"
        columns={[1, 2, 3]}
        iconSize={4}
        features={[]}
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Lottie
          animationData={animation1}
          style={{
            width: 550,
            marginLeft: 90,
            marginTop: -140,
          }}
          loop={true}
        ></Lottie>{" "}
      </div>
    </>
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Empowering your businesses as a community",
        description: "",
        href: "",
        action: false,
      },
    },
  };
}
