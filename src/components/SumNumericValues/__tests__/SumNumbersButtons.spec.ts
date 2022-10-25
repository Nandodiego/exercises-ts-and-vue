import { shallowMount } from "@vue/test-utils";
import ButtonsComponent from '../ButtonsComponent.vue';
import FormSumNumbers from '../../../views/SumNumericValues/FormView.vue';
import { getWrapperProps } from "../../../utils/tests.helper";


describe("HigherToLower values SUT", () => {
    let wrapper: any;

    beforeEach(() => { 
        wrapper = shallowMount(ButtonsComponent, {
            components: FormSumNumbers,
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });

    describe("Emits", () => {
        it('Should emit showValues', () => {
            wrapper.vm.showValues();
            expect(wrapper.vm.$emit('showValues')).toBeTruthy();
        });

        it('Should emit addValues', () => {
            wrapper.vm.addValues();
            expect(wrapper.vm.$emit('addValues')).toBeTruthy();
        });
    })
})
