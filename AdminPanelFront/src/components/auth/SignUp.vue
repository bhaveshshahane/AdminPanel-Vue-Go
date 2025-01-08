<script setup>
import {ref,reactive} from 'vue'
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const initialValues = reactive({
    username: '',
    password:''
});
const tostmsg = (type,msg) =>{
    toast.add({
            severity: 'success',
            summary: 'Form is submitted.',
            life: 3000
        });
}
const resolver = ({ values }) => {
    const errors = {};

    if (!values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }
    if (!values.password) {
        errors.password = [{ message: 'Password is required.' }];
    }

    return {
        errors
    };
};
const onFormSubmit = ({ valid }) => {
    if (valid) {
        tostmsg('success','Form is submitted.')
    }
};
</script>
<template>
<Toast />
<div class=" flex justify-center text-center">
    <Card  class="w-md-[25rem] w-[20rem] overflow-hidden mt-5">
        <template #header><h1 class="text-3xl font-bold mt-5">Sign Up</h1></template>
        <template #content>
            <Form v-slot="$form" id="myform" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full mt-5">
                <div class="flex flex-col gap-1">
                    <InputText name="username" type="text" placeholder="Username" fluid />
                    <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
                </div>
                <div class="flex flex-col gap-1">
                    <InputText autocomplete="off" name="password" type="password" placeholder="password" fluid />
                    <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error?.message }}</Message>
                </div>
                <Button type="submit" severity="info" label="Submit" class="font-bold" raised />
               <p>Login to click here <router-link to="sign-in" class="font-bold">Sign In</router-link></p>
            </Form>
        </template>
    </Card>
</div>
</template>