import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import companiesData from "./DB/companiesData.json";
import SearchContext from "./SearchContext";
import { Box, Flex, Image, Spinner } from "@chakra-ui/react";
import { Avatar } from "@ark-ui/react";

const avatarImage = (row) => {
  return (
    <Avatar.Root className="table-logo">
      <Avatar.Image src={row.logo} />
      <Avatar.Fallback name={row.name} />
    </Avatar.Root>
  );
};

export default function TableView() {
  const columns = [
    {
      selector: (row) => avatarImage(row),
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { debouncedQuery } = useContext(SearchContext);

  const filteredCompanies = data
    ? data.filter((c) => {
        const q = debouncedQuery.toLowerCase();
        return (
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
        );
      })
    : [];

  const fetchData = async () => {
    try {
      // Try to fetch from API first
      let res = await fetch("http://localhost:4000/companies");
      if (res.ok) {
        res = await res.json();
        setLoading(false);
        setData(res);
      } else {
        throw new Error("API not available");
      }
    } catch (error) {
      // Fallback to local data if API fails
      console.log("Using local data:", companiesData.companies[0]);
      setLoading(false);
      setData(companiesData.companies[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Flex justifyContent="center" alignItems="center" width="100%" p="40px">
      <Box minW="800px" maxW="1000px">
        <DataTable
          columns={columns}
          data={filteredCompanies}
          progressPending={loading}
          progressComponent={<Spinner size="lg" />}
          pagination
        />
      </Box>
    </Flex>
  );
}
