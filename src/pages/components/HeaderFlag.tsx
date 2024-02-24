import { createSignal } from "solid-js";

const [flag, setFlag] = createSignal("en");

export const HeaderFlag = () => {
  return (
    <select
      class="bg-transparent w-fit"
      onChange={(e) => setFlag(e.target.value)}
      value={flag()}
    >
      <option value="pt">BR</option>
      <option value="en">US</option>
    </select>
  );
};
