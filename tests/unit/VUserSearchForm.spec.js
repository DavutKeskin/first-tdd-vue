import {shallowMount} from "@vue/test-utils";
import VUserSearchForm from "@/components/VUserSearchForm";

describe('VUserSearchForm', function () {
    const build = () =>{
        const wrapper = shallowMount(VUserSearchForm)
        return{
            wrapper,
            input: () => wrapper.find('input'),
            button: ()=> wrapper.find('button'),
        }
    }

    it('should renders the component', function () {
        const {wrapper} = build();
        expect(wrapper.html()).toMatchSnapshot()
    });

    it('should renders main child compınent', function () {
        const {input, button} = build();
        expect(input().exists()).toBe(true);
        expect(button().exists()).toBe(true);
    });

    it('should submitted event when submitting form', function () {
        const expectedUser = 'davut'
        const {wrapper,button,input} = build()
        input().element.value = expectedUser;

        input().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect(wrapper.emitted().submitted[0]).toEqual([expectedUser]);

    });
});
