import { Button } from "@road-ui/components";
import { createSignal } from "solid-js";
export default function App() {
  const [get, set] = createSignal("");
  setTimeout(() => {
    set("primary");
  }, 3000);
  return (
    <div>
      <Button type={""}>1212</Button>
    </div>
  );
}
