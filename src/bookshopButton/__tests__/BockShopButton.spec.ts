import { shallowMount } from "@vue/test-utils";
import { getWrapperProps } from "../../utils/tests.helper";
import bookShopButton from '../Button.vue';

const options = getWrapperProps({
    propsData: {
        type: ""
    }
});

describe('BookShopButton SUT', () => {
    let wrapper: any;
    beforeEach(() => { 
        wrapper = shallowMount(bookShopButton, {
            ...options
        })
    });

    it("should create a BookShopButton", () => {
        expect(wrapper).toBeDefined();
    });
    
    describe('props', () => {
        it("should exist type property", () => {
            const type = wrapper.vm.type;
            const mockResult = "";
            expect(type).toEqual(mockResult)
        })
    })

    describe('emits', () => {
        it('Should emit click if the button if different to submit', () => {
            wrapper.vm.type = "button";
            wrapper.vm.clicked();
            expect(wrapper.vm.$emit('click')).toBeTruthy();
        })
    })
})