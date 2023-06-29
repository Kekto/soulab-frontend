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
    <fieldset>
        <legend>
            <h3>Users</h3>
        </legend>
        <UserTable :users="this.getAllUsers"/>
    </fieldset>
</template>

<script>
import FormComponent from '../components/FormComponent.vue';
import CustomInput from '../components/CustomInput.vue';
import UserTable from '../components/UserTable.vue'
import {useUserStore} from '../pinia/user/user.store'
import { useToastStore } from '@/pinia/toast/toast.store';
import { ToastTypeEnum } from '@/models/enums/ToastType.enum';

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
        const fetchAllUsers = () => userStore.fetchAllUsers();

        return {userStore, createUser, fetchAllUsers}
    },
    mounted(){
        this.fetchAllUsers();
    },
    computed:{
        getAllUsers(){
            return this.userStore.getAllUsers;
        }
    },

  components: {
    FormComponent,
    CustomInput,
    UserTable
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
        const regex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,4}');
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
            this.createUser(this.user)
            .then(() => {
                this.user = {
                    firstName: '',
                    lastName: '',
                    email: '',
                }
            });
        }else {
            useToastStore().addToast({
                message: 'Data not valid',
                type: ToastTypeEnum.danger
            })
        }
    }
  },
}
</script>

<style scoped lang="scss">

</style>