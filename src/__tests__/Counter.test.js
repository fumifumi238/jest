import { useEffect, useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const increment = () => setTimeout(() => setCount((c) => c + 1), 0);

  const getTakashi = async () => {
    return "Takashi";
  };

  useEffect(() => {
    const getUser = async () => {
      const getData = await getTakashi();
      setUser(getData);
    };

    getUser();
  }, []);
  return (
    <>
      <button type="submit" onClick={increment}>
        {count}
      </button>
      <div>{user ? user : null}</div>
    </>
  );
}

test("my thing works", async () => {
  render(<Counter />);
  userEvent.click(screen.getByText("0"));
  screen.debug();
  expect(await screen.findByText("1")).toBeInTheDocument();
  screen.debug();
  expect(await screen.findByText("Takashi")).toBeInTheDocument();
});
