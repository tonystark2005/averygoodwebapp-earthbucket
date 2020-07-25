import { ShareButton } from "atoms";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Share Button",
  component: ShareButton
};

export const Icon = () => <ShareButton onClick={action("clicked")} />;

const story = {
  parameters: {
    jest: ["components/atoms/share-button/share-button.test.jsx"]
  }
};
Icon.story = story;