<template>
    <div>
        <form class="form" @submit.prevent="addValue(inputValue)">
            <div>
                <h1 class="form__title">Too easy</h1>
            </div>
            <div class="form__inputDiv">
                <label class="inputDiv__label">New value</label>
                <input v-model="inputValue" type="text" class="inputDiv__input">
            </div>
            <ButtonsComponent/>
            <div v-if="canShow">
                <ValuesComponent
                    :arrayValues="arrayValues"
                    @hide-values="hideValues($event)"
                />
            </div>
        </form>
    </div>
</template>

<script lang="ts">

import ValuesComponent from '@/components/Palindromes/PalindromeValues.vue';
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
    public arrayValues: string[] = [];

    addValue(data:string): void { 
        this.arrayValues = [];
        if(data){
            this.canShow = true;
            if(data.substr(0, data.length) == data.split("").reverse().join("")){
                this.arrayValues.push(`Yes ${data} is a palindrome`);
                this.inputValue = "";
            }else{
                this.arrayValues.push(`Not ${data} not a palindrome`);
                this.inputValue = "";
            }
        }else{
            this.canShow = true;
            this.arrayValues.push('Enter a value');
        }
    }


    hideValues(id: any): void{
        this.arrayValues.splice(id, 1);
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