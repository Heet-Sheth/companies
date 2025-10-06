import { Flex } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import PanelArea from "./components/PanelArea";
import { useState } from "react";
import CardPanel from "./components/CardPanel";
import UserContext from "./components/UserContext";

function App() {
  const [company, setCompany] = useState(null);

  return (
    <Flex direction="column" gap="40px" padding="30px" className="App">
      <UserContext.Provider
        value={{ company: company, setCompany: setCompany }}
      >
        {company ? (
          <CardPanel currentId={company} />
        ) : (
          <>
            <NavBar />
            <PanelArea />
          </>
        )}
      </UserContext.Provider>
    </Flex>
  );
}

export default App;
