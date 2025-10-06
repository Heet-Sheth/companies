import { Flex, Heading, Input, InputGroup } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import { IoMdSearch } from "react-icons/io";
import SearchContext from "./SearchContext";
import { useContext } from "react";

export default function NavBar() {
  const { setSearchQuery } = useContext(SearchContext);
  return (
    <Flex
      className="nav-bar"
      direction={{ base: "column", md: "row" }}
      wrap="wrap"
      justifyContent="space-between"
      alignItems={{ base: "stretch", md: "center" }}
      p={{ base: 2, md: 4 }}
      gap={{ base: 2, md: 4 }}
      w="100%"
      maxW={{ base: "100vw", lg: "800px" }}
      mx="auto"
      overflow="hidden"
    >
      <Heading
        textAlign={{ base: "center", md: "left" }}
        mb={{ base: 1, md: 0 }}
        fontSize={{ base: "lg", md: "xl" }}
        flexShrink={0}
      >
        companies.io
      </Heading>
      <Flex
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        gap={{ base: 3, md: 0 }}
        w={{ base: "100%", md: "auto" }}
        maxW="100%"
        minW={{ base: "auto", md: "280px" }}
      >
        <InputGroup
          width={{ base: "calc(100% - 60px)", sm: "160px", md: "220px" }}
          maxW={{ base: "160px", md: "270px" }}
          minW="120px"
          endElement={<IoMdSearch />}
        >
          <Input
            variant="flushed"
            padding={{ base: "6px", md: "8px" }}
            fontSize={{ base: "xs", md: "sm" }}
            placeholder="Search..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </InputGroup>
        <ColorModeButton
          className="color-mode-button"
          size={{ base: "xs", md: "sm" }}
          flexShrink={0}
        />
      </Flex>
    </Flex>
  );
}
