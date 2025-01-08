import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import Message from "primevue/message"
import Toast from 'primevue/toast';
import { Form } from '@primevue/forms';
import ToastService from 'primevue/toastservice';
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'primeicons/primeicons.css'; 

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Message', Message);
app.component('Toast', Toast);
app.component('Card', Card);
app.component('Form', Form);
app.component('Menubar', Menubar);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')
