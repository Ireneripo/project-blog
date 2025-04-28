import dynamic from "next/dynamic";

const CircularColorsDemo = dynamic(() => import("./CircularColorsDemo"));

// export * from "./CircularColorsDemo";
// export { default } from "./CircularColorsDemo";

export default CircularColorsDemo;
