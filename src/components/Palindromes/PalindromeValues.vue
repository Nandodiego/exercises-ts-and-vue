<template>
    <div>
        <div class="div">
            <div class="div__divValues">
                <ul v-for="(value, index) in arrayValues" :key="index" class="divValues__ul">
                    <img class="ul__image" @click="hideValues(index)" src="../../assets/xIcon.svg" alt="icon x">
                    <li class="ul__li">Value: {{value}}</li>
                </ul>
            </div>
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

    @Emit('hide-values')
    hideValues(id: string): string {
        console.log(id);
        return id
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

    .div__divValues{
        display: flex;
        flex-direction: column;
    }

    .divValues__ul {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .ul__image{
        width: 18px;
        height: 18px;
        cursor: pointer;
        margin-right: 17px;
    }

    .ul__image:active {
        transform: scale(.9);
    }
    .ul__li{
        list-style: none;
        font-size: 20px;
        font-family: var(--font-texts);
        line-height: 30px;
        color: var(--color-white);
    }
</style>