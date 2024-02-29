import { Button } from "@road-ui/components";
import { createSignal, For } from "solid-js";
import "@road-ui/style/index.less";
export default function ButtonWrapper() {
    const types = ["primary", "success", "danger", "warning", 'info', 'default'];
    return (
        <div>
            <For each={types}>
                {(type) => {
                    return <Button type={type}>{type}</Button>
                }}
            </For>
        </div>
    );
}
