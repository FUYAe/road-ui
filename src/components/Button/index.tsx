import { Button } from "@road-ui/components";
import { createSignal, For } from "solid-js";
import "@road-ui/style/index.scss";
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
        <For each={types}>
          {(type) => {
            return <Button type={type} plain>{type}</Button>;
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
        <For each={types}>
          {(type) => {
            return (
              <Button type={type} circle>
                0
              </Button>
            );
          }}
        </For>
      </div>
      <div>
        <For each={types}>
          {(type) => {
            return (
              <Button type={type} size="large" circle plain>
                0
              </Button>
            );
          }}
        </For>
      </div>
      <div>
        <For each={types}>
          {(type) => {
            return (
              <Button type={type} square plain>
                0
              </Button>
            );
          }}
        </For>
      </div>
    </div>
  );
}
