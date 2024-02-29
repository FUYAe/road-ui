import ButtonWrapper from "./components/Button";
import { createSignal } from "solid-js";
import "@road-ui/style/index.less";
export default function App() {
  const [get, set] = createSignal("");
  setTimeout(() => {
    set("primary");
  }, 3000);
  return (
    <div>
      <ButtonWrapper/>
    </div>
  );
}
