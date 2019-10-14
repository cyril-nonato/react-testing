import React from 'react';
import {shallow} from 'enzyme';
import HeadLine from './index';
import { findByDataTestAtt, checkProps } from '../../utils';


const setup = (props={}) => {
  return shallow(<HeadLine {...props} />)
}

describe('Headline component', () => {

  describe(`Check prop types`, () => {

    it(`Should not throw a warning`, () => {

      const expectedProps = {
        header: 'Test',
        desc: 'Test desc',
        tempArr: [{
          fName: 'Peter',
          lName: 'Parker',
          email: 'peter@mcu.com',
          age: 25,
          onlineStatus: true
        }]
      }
      const propsError = checkProps(HeadLine, expectedProps);
      expect(propsError).toBeUndefined();
    });
  })

  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {

      const props = {
        header: 'H test',
        desc: 'Desc test'
      };

      wrapper = setup(props)
    });

    it('Should render w/o error', () => {
      const component = findByDataTestAtt(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    })

    it(`Should render h1`, () => {
      const h1 = findByDataTestAtt(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it('Should render a desc', () => {
      const desc = findByDataTestAtt(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })
  });

  describe('No props', () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setup()
    })

    it('Should not render', () => {
      const component = findByDataTestAtt(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    })
  })


})