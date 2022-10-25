import { shallowMount } from "@vue/test-utils";
import ValuesComponent from '../ValuesComponent.vue';
import FormShowValues from '../../../views/Sum/FormView.vue';
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
            components: FormShowValues,
            ...options
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });

    describe("Props", () => {

        it("Should exist showCurrentsValues property", () => {
            const showCurrentsValues = wrapper.vm.showCurrentsValues;
            const mockResult = false;
            expect(showCurrentsValues).toEqual(mockResult);
        });

        it("Should exist sumResult property", () => {
            const sumResult = wrapper.vm.sumResult;
            const mockResult = null;
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
