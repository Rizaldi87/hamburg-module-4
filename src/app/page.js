import { Greeting, Hello } from "@/components/Greeting";
import { Counter } from "../components/Counter";
import ButtonClick from "@/components/ButtonClick";
import FormComponents from "@/components/FormComponents";

export default function Home() {
  console.log("tes");
  let name = "Thoriq";
  return (
    <>
      <FormComponents />
      {/* <h1>Ini adalah component</h1>
      <Greeting />
      <Hello /> */}
      {/* <ButtonClick />
      <Counter /> */}
    </>
  );
}
