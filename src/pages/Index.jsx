// Hacker News Clone using Chakra UI and React Icons
import { Box, Container, Heading, Text, VStack, Link, Divider, List, ListItem, Icon } from "@chakra-ui/react";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Y Combinator created a new model for funding early stage startups.",
    url: "https://news.ycombinator.com/",
    points: 150,
    author: "john",
    time: "3 hours ago",
    comments: 47,
  },
  {
    id: 2,
    title: "React 18 released: What's new?",
    url: "https://reactjs.org/",
    points: 99,
    author: "emma",
    time: "1 hour ago",
    comments: 30,
  },
  {
    id: 3,
    title: "Figma and Adobe XD: UI/UX tools showdown",
    url: "https://www.figma.com/",
    points: 76,
    author: "alice",
    time: "5 hours ago",
    comments: 21,
  },
  // Add more news items as needed
];

const Index = () => {
  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">
            <Icon as={FaHackerNews} /> Hacker News Clone
          </Heading>
        </Box>
        <List spacing={3}>
          {newsItems.map((item) => (
            <ListItem key={item.id} p={3} shadow="md" borderWidth="1px">
              <Heading fontSize="md">{item.title}</Heading>
              <Link href={item.url} isExternal color="blue.500">
                <Icon as={FaExternalLinkAlt} mx="2px" />
                Visit
              </Link>
              <Text mt={2}>
                {item.points} points by {item.author} {item.time} | {item.comments} comments
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
