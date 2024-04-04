import { renderWithProviders } from "@utils/test";
import { it } from "vitest";
import Box from "..";

it("Render Box correctly", ({ expect }) => {
  const { asFragment } = renderWithProviders(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
