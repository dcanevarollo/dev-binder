import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core';

import { Button } from './styles';

interface Props {
  icon: IconName | [IconPrefix, IconName];
  size?: SizeProp;
  type?: 'button' | 'reset' | 'submit';
}

const IconButton: React.FC<Props> = ({
  icon,
  size = '1x',
  type = 'button',
  ...rest
}) => (
  <Button type={type} {...rest}>
    <Icon icon={icon} size={size} />
  </Button>
);

export default IconButton;
