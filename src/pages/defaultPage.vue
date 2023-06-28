<template>
    <FormComponent @submitForm="validate">
        <template #title>
            <h3>Account Form</h3>
        </template>
        <template #default>
            <CustomInput 
                label="First Name" 
                v-model="user.firstName"
                :validationMessage="validation.firstName"    
            />
            <CustomInput 
                label="Last Name" 
                v-model="user.lastName"
                :validationMessage="validation.lastName" 
            />
            <CustomInput 
                label="E-mail" 
                v-model="user.email"
                :validationMessage="validation.email" 
            />
        </template>
    </FormComponent>
</template>

<script>
import FormComponent from '../components/FormComponent.vue';
import CustomInput from '../components/CustomInput.vue';
import {useUserStore} from '../pinia/user/user.store'

export default {
  name: 'default-page',
    data() {
        return {
            user:{
                firstName: '',
                lastName: '',
                email: '',
            },
            validation:{
                firstName: '',
                lastName: '',
                email: '',
            }
        }
    },
    setup(){
        const userStore = useUserStore();
        const createUser = (data) => userStore.createUser(data);
        return {createUser}
    },
  components: {
    FormComponent,
    CustomInput,
  },
  methods: {
    validate(){
        let valid = true;
        // VALIDATE FIRST NAME
        if(this.user.firstName.length === 0){
            valid = false;
            this.validation.firstName = 'Cannot be empty';
        }else {
            this.validation.firstName = '';
        }

        // VALIDATE LAST NAME
        if(this.user.lastName.length === 0){
            valid = false;
            this.validation.lastName = 'Cannot be empty';
        }else {
            this.validation.lastName = '';
        }

        // VALIDATE EMAIL
        const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,4}');
        if(this.user.email.length === 0){
            valid = false;
            this.validation.email = 'Cannot be empty';
        }else if(!regex.test(this.user.email)){
            valid = false;
            this.validation.email = 'Must be an e-mail';
        }
        else {
            this.validation.email = '';
        }

        // SUBMIT
        if(valid){
            this.createUser(this.user);
        }
    }
  },
}
</script>

<style scoped lang="scss">

</style>