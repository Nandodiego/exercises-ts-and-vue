<template>
    <div>
        <form class="form" @submit.prevent="addValue(inputValue)">
            <div>
                <h1 class="form__title">Too easy</h1>
            </div>
            <div class="form__inputDiv">
                <label class="inputDiv__label">New value</label>
                <input v-model="inputValue" type="number" class="inputDiv__input">
            </div>
            <ButtonsComponent/>
            <div v-if="canShow">
                <ValuesComponent
                    :showCurrentsValues="showCurrentsValues"
                    :sumResult="sumResult"
                    @hide-values="hideValues(canShow)"
                />
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import ValuesComponent from '@/components/Sum/ValuesComponent.vue';
import ButtonsComponent from '@/bookshopButton/Button.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'form-component',
    components: {
       ButtonsComponent,
       ValuesComponent
    }
})

export default class FormComponent extends Vue {
    public canShow = false
    public inputValue = "";
    public showCurrentsValues = false;
    public arrayValues: number[] = [];
    public sumResult = 0;

    addValue(data:string): void { 
        if(data){
            let conversion = parseInt(data);
            this.showCurrentsValues = true;

            if(!isNaN(conversion)){
                this.canShow = true;
                this.arrayValues.push(conversion);
                this.sumResult = this.sumNumbers(this.arrayValues);
                this.inputValue = "";
            }else{
                this.arrayValues = [];
                this.canShow = true;
            }
        }else{
            this.canShow = true;
            this.showCurrentsValues = false;
        }
    }

    sumNumbers(arrayNumbers: number[]): number {
        return arrayNumbers.reduce((a, b) => a + b);
    }

    hideValues(state: boolean): void{
        this.canShow = !state;
    }
}
</script>


<style>
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