import ButtonWrapper from "./components/Button";
import { createSignal } from "solid-js";
import "@road-ui/style/index.scss";
import "./components/common.scss";
export default function App() {
  const [get, set] = createSignal("");
  setTimeout(() => {
    set("primary");
  }, 3000);
  return (
    <div>
      <ButtonWrapper />
    </div>
  );
}
