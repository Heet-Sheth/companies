import { Tabs } from "@chakra-ui/react";
import CardView from "./CardView";
import TableView from "./TableView";

export default function PanelArea({ setCurrentCompany }) {
  return (
    <Tabs.Root variant="enclosed" defaultValue="table-view" mt="300px">
      <Tabs.List>
        <Tabs.Trigger value="card-view">Card</Tabs.Trigger>
        <Tabs.Trigger value="table-view">Table</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="card-view">
        <CardView setCurrentCompany={setCurrentCompany} />
      </Tabs.Content>
      <Tabs.Content value="table-view">
        <TableView setCurrentCompany={setCurrentCompany} />
      </Tabs.Content>
    </Tabs.Root>
  );
}
