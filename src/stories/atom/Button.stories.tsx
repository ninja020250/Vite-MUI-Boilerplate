// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../../components/atom/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atom/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant="contained">Hello</Button>,
};
