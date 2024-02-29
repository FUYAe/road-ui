import { mergeProps, splitProps } from "solid-js";
import type { ComponentProps, JSX } from "solid-js";
import "./style.less";
export type ButtonType =
  | "default"
  | "primary"
  | "danger"
  | "success"
  | "warning"
  | "info";
export interface ButtonProps extends Omit<ComponentProps<"button">, "type"> {
  children?: any;
  type?: ButtonType;
}
export default function Button(props: ButtonProps) {
  props = mergeProps({ type: "default" as ButtonType }, props);
  const [local, rest] = splitProps(props, ["children", "type"]);

  return (
    <button
      type="button"
      classList={{
        [`road-ui-button-${local.type}`]: true,
        "road-ui-button": true,
      }}
      {...rest}
    >
      {local.children}
    </button>
  );
}
