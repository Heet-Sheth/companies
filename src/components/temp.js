import {
  Box,
  Flex,
  Stack,
  Image,
  Heading,
  Text,
  Badge,
  Button,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function CompanyDetail({ company }) {
  if (!company) return <Text>Loading…</Text>;

  return (
    <Box p={6} maxW="4xl" mx="auto">
      {/* Hero / Header section */}
      <Flex direction={{ base: "column", md: "row" }} mb={6} gap={6}>
        <Box flex="1" textAlign="center">
          <Image
            src={company.logo || "https://via.placeholder.com/300"}
            alt={company.name}
            borderRadius="md"
            mx="auto"
            boxSize={{ base: "200px", md: "300px" }}
            objectFit="contain"
            mb={{ base: 4, md: 0 }}
          />
        </Box>

        <Stack flex="2" spacing={3} justify="center">
          <Heading size="2xl" isTruncated title={company.name}>
            {company.name}
          </Heading>
          <Stack direction="row" spacing={2} align="center">
            <Badge colorScheme="blue">{company.industry}</Badge>
            <Badge colorScheme="green">{company.location}</Badge>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Text fontWeight="bold">Rating: {company.rating}</Text>
            <Text>Founded: {company.founded}</Text>
            <Text>Employees: {company.employees.toLocaleString()}</Text>
          </Stack>
        </Stack>
      </Flex>

      <Divider mb={6} />

      {/* Description / Details */}
      <Box mb={6}>
        <Heading size="md" mb={2}>
          About
        </Heading>
        <Text lineHeight="tall" textAlign="justify">
          {company.description}
        </Text>
      </Box>

      {/* Optional: Grid of extra stats or fields */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={6}>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Industry
          </Text>
          <Text>{company.industry}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Location
          </Text>
          <Text>{company.location}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Founded Year
          </Text>
          <Text>{company.founded}</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Employees
          </Text>
          <Text>{company.employees.toLocaleString()}</Text>
        </Box>
      </SimpleGrid>

      <Divider mb={6} />

      {/* Call-to-action / Buttons */}
      <Box textAlign="right">
        <Button
          as="a"
          href={company.website}
          target="_blank"
          colorScheme="blue"
          rightIcon={<ExternalLinkIcon />}
        >
          Visit Website
        </Button>
      </Box>
    </Box>
  );
}
