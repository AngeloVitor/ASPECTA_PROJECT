import React from 'react';
import RInputMask, { Props } from 'react-input-mask';

type InputMaskProps = Props;
const InputMask = (InputMaskProps: InputMaskProps) => {
  const { ...restProps } = InputMaskProps;
  return (
    <RInputMask
      {...restProps}
      mask={restProps.mask ? restProps.mask : '*******************'}
    />
  );
}

export default InputMask;
export { InputMask };
