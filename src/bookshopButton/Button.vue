<template>
    <div>
        <div class="divButtons">
            <button @click="clicked" :type="type" class="divButtons__btn">Add value</button>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component({
    name: 'buttons-component'
})

export default class ButtonsComponent extends Vue {
    @Prop({default: "submit"}) public type!: string;

    clicked(): void {
        if(this.type != "submit"){
            this.$emit('click');
        }
    }
}

</script>


<style scoped>
    .divButtons{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 66px;
    }

    .divButtons__btn{
        width: 157px;
        height: 54px;
        background: var(--bg-primary);
        color: var(--color-white);
        font-size: 24px;
        border: 2px solid var(--primary-color);
        cursor: pointer;
    }

    .divButtons__btn:hover{
        background: var(--color-white);
        color: var(--color-hover);
    }

    .divButtons__btn:active{
    box-shadow: 0px 0px 10px var(--color-white);
}
</style>