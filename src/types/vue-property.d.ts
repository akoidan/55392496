import {Logger} from 'lines-logger';
import Vue from 'vue/types/vue';


declare module 'vue/types/vue' {

    interface Vue {
        logger: Logger;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        _componentTag?: string;
    }
}
