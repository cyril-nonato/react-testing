import { checkPropTypes } from 'prop-types';

export const findByDataTestAtt = (component, attribute) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
}

export const checkProps = (component, expectedProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propsErrors = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErrors;
}