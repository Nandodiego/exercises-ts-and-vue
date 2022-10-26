import { shallowMount } from "@vue/test-utils";
import FormView from '../HigherToLowerForm.vue'
import { getWrapperProps } from "../../../utils/tests.helper";


const options = getWrapperProps({
    propsData: {
        canShow: false,
        showCurrentsValues: false,
        showError: false,
        inputValue:"",
        errorValue: "",
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
            wrapper.vm.inputValue = ["1", "5", "10", "3"];
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.showCurrentsValues).toBeTruthy();
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues.length).toBeGreaterThan(0);
            expect(wrapper.vm.arrayValues).toStrictEqual([...wrapper.vm.arrayValues].sort((a,b) => b - a));
            expect(wrapper.vm.inputValue).toEqual("");
            expect(wrapper.vm.showError).toBeFalsy();
        });

        it("should show error when user done not enter a value", () => {
            wrapper.vm.inputValue = "";
            wrapper.vm.addValue(wrapper.vm.inputValue);
            expect(wrapper.vm.showCurrentsValues).toBeFalsy();
            expect(wrapper.vm.canShow).toBeTruthy();
            expect(wrapper.vm.arrayValues).toEqual([]);
            expect(wrapper.vm.showError).toBeTruthy();
            expect(wrapper.vm.errorValue).toEqual("Enter a value")
        });

        it('should hide values', () => {
            const state = false;
            wrapper.vm.hideValues(state);
            expect(wrapper.vm.canShow).toBeTruthy();
        });
    })
}) 