import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import {findByDataTestAtt} from '../../utils';

const setup = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component
}

describe(`Header Component`, () => {

  let component;
  beforeEach(() => {
    component = setup();
  })

  it(`Should render w/o errors`, () => {
    // console.log(component.debug());
    const wrapper = findByDataTestAtt(component, 'headerComponent');
    expect(wrapper.length).toBe(1)
  });

  it('Should render a logo', () => {
    // console.log(component.debug());
    const logo = findByDataTestAtt(component, 'logoIMG');
    expect(logo.length).toBe(1);
  })
})