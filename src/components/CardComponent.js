import {
  Avatar,
  Button,
  Card,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BsBookmark } from "react-icons/bs";
import { IoOpen } from "react-icons/io5";
import UserContext from "./UserContext";

export default function CardComponent({ company }) {
  const { setCompany } = useContext(UserContext);
  const handleClick = () => {
    setCompany(company.id);
  };
  return (
    <Card.Root maxW="300px" gap="20px" minW="300px" rounded="20px">
      <Card.Header>
        <HStack gap="10px">
          <Avatar.Root width="50px" height="50px">
            <Avatar.Image src={company.logo || "hello"} />
            <Avatar.Fallback name={company.name}></Avatar.Fallback>
          </Avatar.Root>
          <VStack alignItems="flex-start">
            <Heading
              style={{
                overflow: "hidden",
                width: "190px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              title={company.name}
            >
              {company.name}
            </Heading>
            <Text>{company.rating}</Text>
          </VStack>
        </HStack>
      </Card.Header>
      <Card.Body
        maxH="150px"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Card.Description textAlign="justify">
          {company.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button
          as="a"
          href={`https://www.google.com/search?q=${
            company.name.split(" ").join("+") + " Careers"
          }`}
          size="xs"
          variant="outline"
          rounded="20px"
        >
          <BsBookmark />
          Save
        </Button>
        <Button size="xs" rounded="20px" onClick={handleClick}>
          Apply Now
          <IoOpen />
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}
