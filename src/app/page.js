import { Greeting, Hello } from "@/components/Greeting";
import { Counter } from "../components/Counter";
import ButtonClick from "@/components/ButtonClick";

export default function Home() {
  console.log("tes");
  let name = "Thoriq";
  return (
    <>
      {/* <h1>Ini adalah component</h1>
      <Greeting />
      <Hello /> */}
      <ButtonClick />
      <Counter />
    </>
  );
}
