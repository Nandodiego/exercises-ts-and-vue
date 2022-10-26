<template>
    <div>
        <form class="form">
            <div>
                <h1 class="form__title">Too easy</h1>
            </div>
            <div class="form__inputDiv">
                <label class="inputDiv__label">New value</label>
                <input v-model="inputValue" type="text" class="inputDiv__input">
            </div>
            <ButtonsComponent
                @add-values="addValue(inputValue)"
                @show-values="showValues(arrayValues)"
            />
            <div v-if="canShow">
                <ValuesComponent
                    :arrayValues="arrayValues"
                    :sumResult="sumResult"
                    :showCurrentsValues="showCurrentsValues"
                    :showError="showError"
                    :errorValue="errorValue"
                    @hide-values="hideValues(canShow)"
                />
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import ValuesComponent from '@/components/SumNumericValues/SumNumbersValues.vue';
import ButtonsComponent from '@/components/SumNumericValues/SumNumbersButtons.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'form-vue',
    components: {
       ButtonsComponent,
       ValuesComponent
    }
})

export default class FormComponent extends Vue {
    public canShow = false
    public showCurrentsValues = false;
    public showError = false;

    public errorValue = "";
    public inputValue = "";

    public sumResult = 0

    public arrayValues: string[] = [];


    addValue(data:string): void {    
        if(data){
            this.showCurrentsValues = true;
            this.arrayValues.push(data);
            this.showError = false;
            this.inputValue = ""
        }else{
            this.showCurrentsValues = false;
            this.canShow = true;
            this.showError = true;
            this.arrayValues = [];
            this.sumResult = 0;
            this.errorValue = "Enter a value";
        }
    }

    showValues(array: string[]): void{
        if(array.length > 0){
            this.canShow = true;
            this.inputValue = "";

            const arrayNumbers =  this.convertedAndPushValues(array);

            const hasNumber = arrayNumbers.find((a) => !isNaN(a));

            if(hasNumber){
                this.sumResult = arrayNumbers.reduce((a, b) => a + b);
            }

        }else{
            this.canShow = true;
            this.showError = true
            this.arrayValues = [];
            this.sumResult = 0;
            this.errorValue = "You doesn't have values";
        }
    }

    convertedAndPushValues(arrayValues: any[]): number[]{
        const temporalArray = arrayValues;
        let arrayNumbers: number[] = [];

        for(let i = 0; temporalArray.length > i; i++){
            const conversion = parseInt(temporalArray[i]);
            
            if(!isNaN(conversion)){
                arrayNumbers.push(conversion);
            }
        }
        return arrayNumbers
    }

    hideValues(state: boolean): void{
        this.canShow = !state
    }
}
</script>


<style scoped>
    .form{
        padding: 32px;
        width: 400px;
        height: 667px;
        margin: 0 auto;
        background: var(--bg-primary);
    }

    .form__title{
        text-align: center;
        font-size: 48px;
        font-family: var(--font-tittle-secondary);
        color: var(--color-white);
        margin-bottom: 78px;
    }

    .form__inputDiv{
        display: flex;
        flex-direction: column;
    }

    .inputDiv__label{
        margin-bottom: 8px;
        font-family: var(--font-texts);
        font-size: 24px;
        color: var(--primary-color);
    }

    .inputDiv__input{
        border: 2px solid var(--primary-color);
        border-radius: 2px;
        background: var(--bg-primary);
        height: 50px;
        margin-bottom: 16px;
        padding: 10px;
        color: var(--color-white);
        font-size: 15px;
    }
</style>