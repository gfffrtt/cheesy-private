import { createSignal } from "solid-js";

const [flag, setFlag] = createSignal("PT");

export const HeaderFlag = () => {
  return (
    <select
      class="bg-transparent w-fit"
      onChange={(e) => setFlag(e.target.value)}
      value={flag()}
    >
      <option value="PT">BR</option>
      <option value="EN">US</option>
    </select>
  );
};
