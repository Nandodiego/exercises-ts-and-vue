import { shallowMount } from "@vue/test-utils";
import FormView from "../FormView.vue";
import { getWrapperProps } from "../../../utils/tests.helper";

const options = getWrapperProps({
    propsData: {
        canShow: false,
        inputValue: "",
        showCurrentsValues: false,
        arrayValues: [],
        sumResult: 0
    }
});


describe('formSum SUT', () => {
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
        it("should add a new value", () => {
            wrapper.vm.inputValue = "4";
            const conversion = parseInt(wrapper.vm.inputValue)
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(conversion).toEqual(4);
            expect(wrapper.vm.showCurrentsValues).toBeTruthy()
        });

        it("should show error when don't enter a value", () => {
            wrapper.vm.inputValue = "";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.showCurrentsValues).toBeFalsy();
        })

        it("Should check if the value is a number", () => {
            wrapper.vm.inputValue = "4";
            const conversion = parseInt(wrapper.vm.inputValue)
            const spyOn = jest.spyOn(wrapper.vm, "sumNumbers");
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(conversion).toEqual(4);
            expect(wrapper.vm.showCurrentsValues).toBeTruthy();
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
            expect(spyOn).toHaveBeenCalled();
            expect(wrapper.vm.inputValue).toEqual("");
        })

        it("should sum arrayValues", () => {
            const result = 67;
            wrapper.vm.arrayValues = [3,6,9,39,10];
            wrapper.vm.sumNumbers(wrapper.vm.arrayValues);
            expect(wrapper.vm.sumNumbers(wrapper.vm.arrayValues)).toEqual(result);
        })
        
        it('should hide values', () => {
            const state = false;
            wrapper.vm.hideValues(state);
            expect(wrapper.vm.canShow).toBeTruthy();
        });
    })
})