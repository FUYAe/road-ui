import Table from "@road-ui/components/Table";
import Button from "@road-ui/components/Button";

export default function TableWrapper() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <a href="https://github.com/road-ui">{text}</a>,
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "control",
      dataIndex: "control",
      key: "control",
      render: (text, record) => (
        <Button type="danger" size="small">
          {text}
        </Button>
      ),
    },
  ];
  const data = [
    {
      name: "road-ui",
      age: 18,
      level: "senior",
      control: "delete",
    },
    {
      name: "road-ui2",
      age: 8,
      control: "delete",
    },
    {
      name: "road-ui2",
      age: 8,
      level: "seniorr",
      control: "delete",
    },
    {
      name: "road-ui2",
      age: 8,
      level: "seniorr",
      control: "delete",
    },
  ];
  return <Table columns={columns} data={data}></Table>;
}
