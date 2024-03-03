import useClassList from "../utils/useClassList";
import "./style.scss";
import { For, splitProps } from "solid-js";
interface TableColumn {
  title: string;
  dataIndex: string;
  render?: (text: string, record: any) => JSX.Element;
}
interface TableProps {
  title: string;
  columns: TableColumn[];
  data: any[];
}
export default function Table(props: TableProps) {
  const [local, other] = splitProps(props, ["title", "columns", "data"]);
  const classList = () => useClassList(props, "table");
  return (
    <table classList={classList()}>
      <thead>
        <tr>
          <For each={local.columns}>
            {(column) => {
              return <th>{column.title}</th>;
            }}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={local.data}>
          {(record) => {
            return (
              <tr>
                <For each={local.columns}>
                  {(column) => {
                    const text = record[column.dataIndex];
                    let toRender = text;
                    if (column.render) {
                      return <td>{column.render(text, record)}</td>;
                    } else {
                      return (
                        <td>
                          {" "}
                          <span class="rui-table-text-cell">{text}</span>
                        </td>
                      );
                    }
                  }}
                </For>
              </tr>
            );
          }}
        </For>
      </tbody>
    </table>
  );
}
