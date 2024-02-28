import { Button } from "@road-ui/components";
import { createSignal } from "solid-js";
import "@road-ui/theme/index.less";
export default function App() {
  const [get, set] = createSignal("");
  setTimeout(() => {
    set("primary");
  }, 3000);
  return (
    <div>
      <Button type="primary" disabled>
        1212
      </Button>
    </div>
  );
}
