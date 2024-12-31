import { Meta, StoryObj } from "@storybook/react";

import MobileSimulatorContainer from ".";

const meta: Meta<typeof MobileSimulatorContainer> = {
  component: MobileSimulatorContainer,
  decorators: [
    // MARK: 当需要进行自定义Block容器时 在此处定义
    (Story) => {
      return (
        <div className="w-full min-h-96 mx-auto flex justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
};

type MobileSimulatorContainerStory = StoryObj<typeof meta>;

export const Dark: MobileSimulatorContainerStory = {
  args: {
    className: "",
    children: "",
  },
};

export default meta;
