<template>
    <div>
        <form class="form"  @submit.prevent="addValue(inputValue)">
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
                    :arrayValues="arrayValues"
                    :showError="showError"
                    :errorValue="errorValue"
                    @hide-values="hideValues(canShow)"
                />
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import ValuesComponent from '@/components/HigherToLower/ValuesComponent.vue';
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
    public showCurrentsValues = false;
    public showError = false;

    public inputValue = "";
    public errorValue = "";

    public arrayValues: string[] = [];

    addValue(data:string): void {    
        if(data){
            this.showCurrentsValues = true
            this.canShow = true;
            this.arrayValues.push(data);
            this.arrayValues.sort((a:any, b:any) => b - a );
            this.inputValue = ""
            this.showError = false;
        }else{
            this.showCurrentsValues = false;
            this.canShow = true;
            this.arrayValues = [];
            this.showError = true;
            this.errorValue = "Enter a value";
        }
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