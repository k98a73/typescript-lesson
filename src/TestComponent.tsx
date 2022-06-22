import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}
const TestComponent: React.FC<Props> = (props) => {
  // React Hooks useState
  const [count, setCount] = useState<number | null>(null);

  // const [count, setCount] = useState(0);
  // 初期値に0が入っているので、countの型はnumberで、
  // setCountの引数の型もnumberに自動的になっている

  const [user, setUser] = useState<UserData>({ id: 1, name: "dummy" });

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default TestComponent;
