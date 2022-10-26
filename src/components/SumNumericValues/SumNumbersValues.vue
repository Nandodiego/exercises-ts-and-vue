<template>
    <div>
        <div class="div">
            <div v-if="showCurrentsValues" class="div__divText">
                <p class="divText__text">Your currents values are</p>
                <img @click="hideValues()" class="divText__image" src="../../assets/xIcon.svg" alt="logo of X">
            </div>
            <div class="div__divValues">
                <ul v-for="(value, index) in arrayValues" :key="index" class="divValues__ul">
                    <li class="ul__li">Value: {{value}}</li>
                </ul>
                <ul class="divValues__ul" v-if="showError">
                    <li class="ul__li">{{errorValue}}</li>
                </ul>
            </div>
            <p class="divText__text" v-if="sumResult > 0">And your current sume are: {{sumResult}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from 'vue-property-decorator';

@Component({
    name: 'values-component'
})

export default class ValuesComponent extends Vue {
    @Prop({default: []}) public arrayValues!: string[]
    @Prop({default: false}) public showError!: boolean;
    @Prop({default: ""}) public errorValue!: string;
    @Prop({default: false}) public showCurrentsValues!: boolean;


    @Prop({default: null}) public sumResult!: number;

    @Emit('hide-values')
    hideValues(): boolean {
        return false
    }
}

</script>

<style scoped>
    .div__divText {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .divText__text{
        font-size: 20px;
        font-family: var(--font-texts);
        color: var(--color-white);
        line-height: 18px;
    }

    .divText__image{
        width: 18px;
        height: 18px;
        cursor: pointer;
    }

    .div__divValues{
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        padding-left: 30px;
    }

    .divValues__ul {
        width: 100%;
    }
    .ul__li{
        font-size: 20px;
        font-family: var(--font-texts);
        line-height: 30px;
        color: var(--color-white);
        margin-bottom: 15px;
    }
</style>