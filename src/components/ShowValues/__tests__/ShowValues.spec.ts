import { shallowMount } from "@vue/test-utils";
import ValuesComponent from '../ValuesShowValues.vue';
import FormShowValues from '../../../views/ShowValues/ShowValuesForm.vue';
import { getWrapperProps } from "../../../utils/tests.helper";


const options = getWrapperProps({
    propsData: {
        arrayValues: [],
        showError: false,
        showCurrentsValues: false,
        errorValue: ""
    }
});

describe("HigherToLower values SUT", () => {
    let wrapper: any;

    beforeEach(() => { 
        wrapper = shallowMount(ValuesComponent, {
            components: {
                FormShowValues
            },
            ...options
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });

    describe("Props", () => {
        it("Should exist arrayValues property", () => {
            const arrayValues = wrapper.vm.arrayValues;
            const mockResult: string[] = [];
            expect(arrayValues).toEqual(mockResult);
        });

        it("Should exist showError property", () => {
            const showError = wrapper.vm.showError;
            const mockResult = false;
            expect(showError).toEqual(mockResult);
        });

        it("Should exist showCurrentsValues property", () => {
            const showCurrentsValues = wrapper.vm.showCurrentsValues;
            const mockResult = false;
            expect(showCurrentsValues).toEqual(mockResult);
        });

        it("Should exist errorValue property", () => {
            const errorValue = wrapper.vm.errorValue;
            const mockResult = "";
            expect(errorValue).toEqual(mockResult);
        });
    });

    describe("Emits", () => {
        it('Should emit hideValues', () => {
            wrapper.vm.hideValues();
            expect(wrapper.vm.$emit('hideValues')).toBeTruthy();
        })
    })
})
