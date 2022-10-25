import { shallowMount } from "@vue/test-utils";
import FormView from "../FormView.vue";
import { getWrapperProps } from "../../../utils/tests.helper";


const options = getWrapperProps({
    propsData: {
        canShow: false,
        inputValue: "",
        arrayValues: []
    }
});

describe('Formview SUT', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = shallowMount(FormView, {
            ...options
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });

    describe('methods', () => {
        it('should change a state when enter a value', () => {
            wrapper.vm.inputValue = "hi";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
        });

        it("should show error when user don't enter a value", () => {
            wrapper.vm.inputValue = "";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
        });
        
        it('should add the new value if is a palindrome', () => {
            wrapper.vm.inputValue = "oso";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
            expect(wrapper.vm.inputValue).toEqual("");
        })


        it("should show error when user don't enter a palindrome", () => {
            wrapper.vm.inputValue = "diego";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
            expect(wrapper.vm.inputValue).toEqual("");
        });

        it("should delete a value of the array", () => {
            wrapper.vm.hideValues(0)
            expect(wrapper.vm.arrayValues).toEqual([]);
            expect(wrapper.vm.arrayValues.length).toEqual(0);
        })
    })
})