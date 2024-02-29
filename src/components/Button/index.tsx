import { Button } from "@road-ui/components";
import { createSignal, For } from "solid-js";
import "@road-ui/style/index.less";
export default function ButtonWrapper() {
  const types = ["primary", "success", "danger", "warning", "info", "default"];
  const sizes = ["small", "medium", "large", "xlarge"];
  return (
    <div class="button-warper">
      <div>
        <For each={types}>
          {(type) => {
            return <Button type={type}>{type}</Button>;
          }}
        </For>
      </div>
      <div>
        <For each={sizes}>
          {(size) => {
            return <Button size={size}>{size}</Button>;
          }}
        </For>
      </div>
      <div>
        <For each={sizes}>
          {(size) => {
            return (
              <Button size={size} circle>
                {size}
              </Button>
            );
          }}
        </For>
      </div>
    </div>
  );
}
