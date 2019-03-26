import React from 'react';
import {shallow} from 'enzyme';
import CarouselSlide from '../CarouselSlide';

describe('CarouselSlide', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CarouselSlide imgUrl="an image url" description="a description"/>);
    });

    it('renders a <figure>', () => {
        expect(wrapper.type()).toBe('figure')
    });

    it('renders an <img> and a <figcaption> as children', () => {
        expect(wrapper.childAt(0).type()).toBe('img');
        expect(wrapper.childAt(1).type()).toBe('figcaption');
    });

    it('passes `imgUrl` through to the <img>', () => {
        let imgUrl = 'An image url';
        wrapper.setProps({imgUrl: imgUrl});

        let img = wrapper.find('img');

        expect(img.prop('src')).toBe(imgUrl);
    });

    it('uses `description` and `attribution` as the <figcaption>', () => {
        const description = 'A jaw-droppingly spectacular image';
        const attribution = 'Trevor Burnham';

        wrapper.setProps({description, attribution});

        expect(wrapper.find('figcaption strong').text()).toBe(description);
        expect(wrapper.find('figcaption').text()).toBe(`${description} ${attribution}`);
    });

    it('passes other props through to the <figcaption>', () => {
       const style = {};
       const onClick = () => {};
       const className = 'a class name';

       wrapper.setProps({style, onClick, className});

       expect(wrapper.prop('style')).toBe(style);
       expect(wrapper.prop('onClick')).toBe(onClick);
       expect(wrapper.prop('className')).toBe(className);

    });
});

