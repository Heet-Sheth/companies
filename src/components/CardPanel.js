import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Stack,
  Button,
  SimpleGrid,
  Separator,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import UserContext from "./UserContext";
import companiesData from "./DB/companiesData.json";

export default function CardPanel({ currentId }) {
  const { setCompany } = useContext(UserContext);
  const [currentCompany, setCurrentCompany] = useState();

  const fetchCompany = async () => {
    try {
      let response = await fetch(
        `http://localhost:4000/companies/${currentId}`
      );
      if (response.ok) {
        response = await response.json();
        setCurrentCompany(response);
      } else {
        throw new Error("API Error!!!");
      }
    } catch (error) {
      console.log(error);
      setCurrentCompany(companiesData.companies[0][currentId]);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, [currentId]);

  return (
    <Box className="display-box">
      <HStack justifyContent="space-between" px="40px">
        <Text>Your Dream Company</Text>
        <IconButton onClick={() => setCompany(null)}>
          <GrClose />
        </IconButton>
      </HStack>
      {currentCompany && (
        <Box p={6} maxW="4xl" mx="auto">
          {/* Hero / Header section */}
          <Flex direction={{ base: "column", md: "row" }} mb={6} gap={6}>
            <Box flex="1" textAlign="center">
              <Image
                src={currentCompany.logo || "https://via.placeholder.com/300"}
                alt={currentCompany.name}
                borderRadius="md"
                mx="auto"
                boxSize={{ base: "200px", md: "300px" }}
                objectFit="contain"
                mb={{ base: 4, md: 0 }}
              />
            </Box>

            <Stack flex="2" spacing={3} justify="center">
              <Heading size="2xl" isTruncated title={currentCompany.name}>
                {currentCompany.name}
              </Heading>
              <Stack direction="row" spacing={2} align="center">
                <Badge colorScheme="blue">{currentCompany.industry}</Badge>
                <Badge colorScheme="green">{currentCompany.location}</Badge>
              </Stack>
              <Stack direction="row" spacing={4} align="center">
                <Text fontWeight="bold">Rating: {currentCompany.rating}</Text>
                <Text>Founded: {currentCompany.founded}</Text>
                <Text>
                  Employees: {currentCompany.employees.toLocaleString()}
                </Text>
              </Stack>
            </Stack>
          </Flex>

          <Separator mb={6} />

          {/* Description / Details */}
          <Box mb={6}>
            <Heading size="md" mb={2}>
              About
            </Heading>
            <Text lineHeight="tall" textAlign="center">
              {currentCompany.description}
            </Text>
          </Box>

          {/* Optional: Grid of extra stats or fields */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Industry
              </Text>
              <Text>{currentCompany.industry}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Location
              </Text>
              <Text>{currentCompany.location}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Founded Year
              </Text>
              <Text>{currentCompany.founded}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500">
                Employees
              </Text>
              <Text>{currentCompany.employees.toLocaleString()}</Text>
            </Box>
          </SimpleGrid>

          <Separator mb={6} />

          {/* Call-to-action / Buttons */}
          <Box textAlign="right">
            <Button
              as="a"
              href={currentCompany.website}
              target="_blank"
              colorScheme="blue"
            >
              Visit Website
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
