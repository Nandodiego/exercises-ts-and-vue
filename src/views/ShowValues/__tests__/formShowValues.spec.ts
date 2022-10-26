import { shallowMount } from "@vue/test-utils";
import FormView from "../ShowValuesForm.vue";
import { getWrapperProps } from "../../../utils/tests.helper";

const options = getWrapperProps({
    propsData: {
        canShow: false,
        showCurrentsValues: false,
        showError: false,
        errorValue: '',
        inputValue: '',
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
        it('should add a new value', () => {
            const newValue = 'hola';
            wrapper.vm.addValue(newValue);
            expect(wrapper.vm.showCurrentsValues).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0)
            expect(wrapper.vm.showError).toBeFalsy();
            expect(wrapper.vm.inputValue).toEqual("");
        });

        it('should show error when user done not enter a value', () => {
            const newValue = '';
            wrapper.vm.addValue(newValue);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.showError).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toEqual(0);
            expect(wrapper.vm.showCurrentsValues).toBeFalsy();
            expect(wrapper.vm.errorValue).toEqual("Enter a value");
        });

        it('should hide values', () => {
            const state = false;
            wrapper.vm.hideValues(state);
            expect(wrapper.vm.canShow).toBeTruthy();
        });

        it('should show values if array have values', () => {
            const arrayValues = ['valor1', 'valor2'];
            wrapper.vm.showValues(arrayValues);
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.inputValue).toEqual("");
        });

        it('should show errors if array do not have values', () => {
            const arrayValues: string[] = [];
            const EMPTY_ARRAY: string[] = [];
            wrapper.vm.showValues(arrayValues);
            expect(wrapper.vm.showCurrentsValues).toBeFalsy();
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.showError).toBeTruthy();
            expect(wrapper.vm.arrayValues).toEqual(EMPTY_ARRAY);
            expect(wrapper.vm.errorValue).toEqual("You doesn't have values");
        });
    });
});