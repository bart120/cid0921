
import { mount } from '@vue/test-utils';
import InputMail from './InputMail.vue';


describe('InputMail', () => {

    it('test display textbox', () => {
        const wrapper = mount(InputMail, { props: { name: 'bob' } });
        expect(wrapper.find('input'));
    });
});