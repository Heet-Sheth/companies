import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import companiesData from "./DB/companiesData.json";
import SearchContext from "./SearchContext";
import { useContext } from "react";

export default function CardView({ setCurrentCompany }) {
  const [data, setData] = useState([]);
  const { debouncedQuery } = useContext(SearchContext);

  const fetchData = async () => {
    try {
      // Try to fetch from API first
      let res = await fetch("http://localhost:4000/companies");
      if (res.ok) {
        res = await res.json();
        setData(res);
      } else {
        throw new Error("API not available");
      }
    } catch (error) {
      // Fallback to local data if API fails
      console.log("Using local data:", companiesData.companies[0]);
      setData(companiesData.companies[0]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCompanies = data.filter((c) => {
    const q = debouncedQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  });

  return (
    <SimpleGrid minChildWidth="300px" gap="30px">
      {filteredCompanies.map((company) => (
        <CardComponent key={company.id} company={company} />
      ))}
    </SimpleGrid>
  );
}
