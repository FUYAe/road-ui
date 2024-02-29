import { mergeProps, splitProps } from "solid-js";
import type { ComponentProps, JSX } from "solid-js";
import useClassList from "../utils/useClassList";
import { Size } from "../types";
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
  size?: Size;
  circle?: boolean;
  nativeType?: ComponentProps<"button">["type"];
}
export default function Button(props: ButtonProps) {
  props = mergeProps(
    { type: "default", size: "medium", nativeType: "button" },
    props
  );
  const [local, rest] = splitProps(props, [
    "children",
    "type",
    "size",
    "circle",
    "nativeType",
  ]);
  const classlist = () =>
    useClassList(props, "button", local.type, local.size, {
      circle: local.circle,
    });
  return (
    <button type={local.nativeType} classList={classlist()} {...rest}>
      {local.children}
    </button>
  );
}
