import { shallowMount } from "@vue/test-utils";
import { getWrapperProps } from "../../../utils/tests.helper";
import ValuesComponent from '../PalindromeValues.vue';
import FormPalindrome from '../../../views/Palindromes/PalindromesForm.vue';


const options = getWrapperProps({
    propsData: {
        arrayValues: [],
        showError: false,
        errorValue: ""
    }
});

describe("HigherToLower values SUT", () => {
    let wrapper: any;

    beforeEach(() => { 
        wrapper = shallowMount(ValuesComponent, {
            components: {
                FormPalindrome
            },
            ...options
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });
    
    describe('Props', () => {
        it("Should exist arrayValues property", () => {
            const arrayValues = wrapper.vm.arrayValues;
            const mockResult: string[] = [];
            expect(arrayValues).toEqual(mockResult);
        });

        it("Should exist sumResult property", () => {
            const showError = wrapper.vm.showError;
            const mockResult = false;
            expect(showError).toEqual(mockResult);
        });

        it("should exist errorValue property", () => {
            const errorValue = wrapper.vm.errorValue;
            const mockResult = "";
            expect(errorValue).toEqual(mockResult);
        })
    });

    describe("Emits", () => {
        it('Should emit hideValues', () => {
            wrapper.vm.hideValues();
            expect(wrapper.vm.$emit('hideValues')).toBeTruthy();
        })
    })
})
