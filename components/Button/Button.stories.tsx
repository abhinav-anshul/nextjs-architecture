// Button.stories.ts|tsx

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const Test: ComponentStory<typeof Button> = () => <Button />
