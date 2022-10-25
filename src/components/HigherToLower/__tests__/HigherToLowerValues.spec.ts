import { shallowMount } from "@vue/test-utils";
import ValuesComponent from '../../HigherToLower/ValuesComponent.vue';
import FormHigherToLower from '../../../views/HigherToLower/FormView.vue';
import { getWrapperProps } from "../../../utils/tests.helper";


const options = getWrapperProps({
    propsData: {
        showCurrentsValues: false,
        sumResult: null
    }
});


describe("HigherToLower values SUT", () => {
    let wrapper: any;

    beforeEach(() => { 
        wrapper = shallowMount(ValuesComponent, {
            components: FormHigherToLower,
            ...options
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });
    
    describe('Props', () => {
        it("Should exist showCurrentsValues property", () => {
            const showCurrentsValues = wrapper.vm.showCurrentsValues;
            const mockResult = false;
            expect(showCurrentsValues).toEqual(mockResult);
        });

        it("Should exist sumResult property", () => {
            const sumResult = wrapper.vm.sumResult;
            const mockResult = undefined;
            expect(sumResult).toEqual(mockResult);
        });
    });

    describe("Emits", () => {
        it('Should emit hideValues', () => {
            wrapper.vm.hideValues();
            expect(wrapper.vm.$emit('hideValues')).toBeTruthy();
        })
    })
})
