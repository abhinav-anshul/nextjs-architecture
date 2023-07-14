// Button.stories.ts|tsx

import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./"

export default {
  title: "click here",
  component: Button,
} as ComponentMeta<typeof Button>

export const Test: ComponentStory<typeof Button> = () => <Button />