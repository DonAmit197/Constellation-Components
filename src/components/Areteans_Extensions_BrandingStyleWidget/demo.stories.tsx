/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import AreteansExtensionsBrandingStyleWidget from './index';

import { configProps, operatorDetails } from './mock';

const meta: Meta<typeof AreteansExtensionsBrandingStyleWidget> = {
  title: 'AreteansExtensionsBrandingStyleWidget',
  component: AreteansExtensionsBrandingStyleWidget,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AreteansExtensionsBrandingStyleWidget>;

if (!window.PCore) {
  window.PCore = {};
}

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: value => {
      return value;
    }
  };
};

window.PCore.getUserApi = () => {
  return {
    getOperatorDetails: () => {
      return new Promise(resolve => {
        resolve(operatorDetails);
      });
    }
  };
};

export const BaseAreteansExtensionsBrandingStyleWidget: Story = args => {

  const props = {
    label: configProps.label,
    createOperator: configProps.createOperator,
    updateOperator: configProps.updateOperator,
    createDateTime: configProps.createDateTime,
    updateDateTime: configProps.updateDateTime,

    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
};

return (
    <>
      <AreteansExtensionsBrandingStyleWidget {...props} {...args} />
    </>
  );
};

BaseAreteansExtensionsBrandingStyleWidget.args = {
  createLabel: configProps.createLabel,
  updateLabel: configProps.updateLabel,
  hideLabel: configProps.hideLabel
};
