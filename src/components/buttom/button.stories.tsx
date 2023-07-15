
import { ComponentStory } from "@storybook/react"
import Button from "./"

export default {
  title : "my name  is bla bla",
  component : Button
}

// export const Red = () => <Button backgroundColor="red"></Button>
export const Test: ComponentStory<typeof Button> = () => <Button  backgroundColor="red"/>