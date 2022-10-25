import { shallowMount } from "@vue/test-utils";
import ButtonsComponenet from '../ButtonsComponent.vue';
import FormShowValues from '../../../views/ShowValues/FormView.vue';


describe("HigherToLower values SUT", () => {
    let wrapper: any;

    beforeEach(() => { 
        wrapper = shallowMount(ButtonsComponenet, {
            components: FormShowValues,
        })
    });

    it("should create a Formview view", () => {
        expect(wrapper).toBeDefined();
    });

    describe("Emits", () => {
        it('Should emit hideValues', () => {
            wrapper.vm.showValues();
            expect(wrapper.vm.$emit('showValues')).toBeTruthy();
        });

        it('Should emit addValues', () => {
            wrapper.vm.addValues();
            expect(wrapper.vm.$emit('addValues')).toBeTruthy();
        });
    })
})
