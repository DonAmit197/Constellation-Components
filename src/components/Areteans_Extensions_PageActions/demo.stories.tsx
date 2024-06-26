
/* eslint-disable react/jsx-no-useless-fragment */
// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react';

import AreteansExtensionsPageActions from './index';


import configProps from './mock';

const meta: Meta<typeof AreteansExtensionsPageActions> = {
  title: 'AreteansExtensionsPageActions',
  component: AreteansExtensionsPageActions,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof AreteansExtensionsPageActions>;

if (!window.PCore) {
  window.PCore = {};
}

const worklistData = {
  data: {
    data: [
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-8002',
        pyAssignmentStatus: 'New',
        pxTaskLabel: 'Details'
      },
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-7001',
        pyAssignmentStatus: 'Open',
        pxTaskLabel: 'Info'
      },
      {
        pxProcessName: 'Loan',
        pxRefObjectInsName: ' A-9000',
        pyAssignmentStatus: 'Open',
        pxTaskLabel: 'Amount'
      }
    ]
  }
};

window.PCore.getDataApiUtils = () => {
  return {
    getData: () => {
      return new Promise(resolve => {
        resolve(worklistData);
      });
    },
    getDataAsync: () => {
      return new Promise(resolve => {
        resolve(worklistData);
      });
    }
  };
};



export const BaseAreteansExtensionsPageActions: Story = args => {

  const props = {
    ...configProps,
    getPConnect: () => {
      return {
        getValue: value => {
          return value;
        },
        getContextName: () => {
          return 'app/primary_1';
        },
        getLocalizedValue: value => {
          return value;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
      <>
        <AreteansExtensionsPageActions {...props} {...args} />
      </>
    );
};

BaseAreteansExtensionsPageActions.args = {
  header: configProps.header,
  description: configProps.description,
  whatsnewlink: configProps.whatsnewlink,
  datasource: configProps.datasource,
};
