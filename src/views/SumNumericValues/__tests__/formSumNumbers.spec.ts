import { getWrapperProps } from "../../../utils/tests.helper";
import { shallowMount } from "@vue/test-utils";
import FormView from "../SumNumbersForm.vue";

const options = getWrapperProps({
    propsData: {
        canShow: false,
        showCurrentsValues: false,
        showError: false,
        errorValue:"",
        inputValue: "",
        sumResult: 0,
        arrayValues: []
    }
});

describe('FormSumNumbers SUT', () => {
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
            wrapper.vm.inputValue = "3";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.showCurrentsValues).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
            expect(wrapper.vm.showError).toBeFalsy();
            expect(wrapper.vm.inputValue).toEqual("");
        });

        it("should show error when don't enter a value", () => {
            wrapper.vm.inputValue = "";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.showCurrentsValues).toBeFalsy();
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.showError).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toEqual(0);
            expect(wrapper.vm.sumResult).toEqual(0);
            expect(wrapper.vm.errorValue).toEqual("Enter a value");
        });

        it("should sum the numeric values", () => {
            wrapper.vm.arrayValues = ["diego", "3", "sad", "2", "1"];
            const spyOn = jest.spyOn(wrapper.vm, "convertedAndPushValues");
            wrapper.vm.showValues(wrapper.vm.arrayValues);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.inputValue).toEqual("");
            expect(spyOn).toHaveBeenCalled();
            expect(wrapper.vm.sumResult).toEqual(6);
        });

        it("should show a error when the array don't have values", () => {
            wrapper.vm.inputValue = "";
            wrapper.vm.showValues(wrapper.vm.inputValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.showError).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toEqual(0);
            expect(wrapper.vm.sumResult).toEqual(0);
            expect(wrapper.vm.errorValue).toEqual("You doesn't have values");
        });

        it("should convert the values and push in the array", () => {
            const result = [ 3, 6, 1, 7, 30, 9];
            wrapper.vm.arrayValues = ["diego", "3", "sad", "6", "1", "7", "30", "9"];
            wrapper.vm.convertedAndPushValues(wrapper.vm.arrayValues);
            expect(wrapper.vm.convertedAndPushValues(wrapper.vm.arrayValues)).toEqual(result);
        });

        it('should hide values', () => {
            const state = false;
            wrapper.vm.hideValues(state);
            expect(wrapper.vm.canShow).toBeTruthy();
        });
    })
})