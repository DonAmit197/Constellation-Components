/* eslint-disable no-nested-ternary */
import { Fragment, useEffect } from 'react';
import {
  DateTimeDisplay,
  Card,
  CardHeader,
  CardContent,
  Flex,
  withConfiguration
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

// includes in bundle
import Operator from './Operator';

import StyledAreteansExtensionsBrandingStyleWidgetWrapper from './styles';

// interface for props
interface AreteansExtensionsBrandingStyleWidgetProps extends PConnFieldProps {
  // If any, enter additional props that only exist on TextInput here
  title: string;
  createLabel: string;
  updateLabel: string;
  resolveLabel: string;
  createOperator: any;
  updateOperator: any;
  resolveOperator: any;
  createDateTime: string;
  updateDateTime: string;
  resolveDateTime: string;
  hideLabel: boolean;
}

// Duplicated runtime code from Constellation Design System Component

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
const PersistentStyleComponent = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    body{background:green;}
    main[data-app-region]{background: transparent !important;}
    main[data-app-region]>div>div{background: transparent !important;}
    nav[data-app-region]{background:#11947F !important; box-shadow:4px 0px 11px rgba(0, 0, 0, 0.20);}
    `;
    document.head.appendChild(style);

    window.localStorage.setItem('branding_css', JSON.stringify(style.innerHTML, null, 2));
    const styleCont = window.localStorage.getItem('branding_css');
  }, []);
  return null;
};

function AreteansExtensionsBrandingStyleWidget(props: AreteansExtensionsBrandingStyleWidgetProps) {
  const {
    getPConnect,
    title = 'Create operator',
    label = 'Create operator',
    createLabel,
    updateLabel,
    createOperator,
    updateOperator,
    createDateTime,
    updateDateTime,
    resolveLabel,
    resolveOperator,
    resolveDateTime,
    hideLabel
  } = props;

  const [_label, user, dateTimeValue] =
    label === 'Create operator'
      ? [createLabel, createOperator, createDateTime]
      : label === 'Update operator'
        ? [updateLabel, updateOperator, updateDateTime]
        : [resolveLabel, resolveOperator, resolveDateTime];

  return user.userId && user.userName ? (
    <StyledAreteansExtensionsBrandingStyleWidgetWrapper>
      <PersistentStyleComponent />
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <Flex container={{ direction: 'row' }}>
            <Operator
              label={hideLabel ? '' : _label}
              name={user.userName}
              id={user.userId}
              getPConnect={getPConnect}
              value={undefined}
              validatemessage=''
              hideLabel={false}
              readOnly={false}
              required={false}
              disabled={false}
              externalUser={undefined}
              metaObj={undefined}
              testId=''
              helperText=''
            />
            {dateTimeValue && (
              <Fragment>
                {' '}
                <DateTimeDisplay value={dateTimeValue} variant='relative' />
              </Fragment>
            )}
          </Flex>
        </CardContent>
      </Card>
    </StyledAreteansExtensionsBrandingStyleWidgetWrapper>
  ) : (
    <StyledAreteansExtensionsBrandingStyleWidgetWrapper>
      defVal
    </StyledAreteansExtensionsBrandingStyleWidgetWrapper>
  );
}

export default withConfiguration(AreteansExtensionsBrandingStyleWidget);

// as objects are there in props, shallow comparision fails & re-rendering of comp happens even with
// same key value pairs in obj. hence using custom comparison function on when to re-render
// const comparisonFn = (prevProps, nextProps) => {
//   return prevProps.updateDateTime === nextProps.updateDateTime;
// };
