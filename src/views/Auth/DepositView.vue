<script setup>
  import { FormKit } from '@formkit/vue'

  import  AccountService  from "../../services/AccountService";

  const handleSubmit = (data) => {    
    AccountService.deposit(data)
      .then(response => {
       const {data} = response
       alert(data.message);
       const myField = document.getElementById('value');
       myField.value = '';
      })
      .catch((error) => {
        alert('Fallo al intentar consignar')
        console.log(error)
      })
  }
</script>

<template>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit
        id="consigna"
        type="form"
        submit-label="Consignar"
        incomplete-message="No fue posible consignar"
         @submit="handleSubmit"
      >
        <FormKit 
          type="number"
          label="Monto a Consignar"
          name="value"
          id="value"
          placeholder="500000"
          validation="required|number"
          prefix-icon="number"
          :validation-messages="{ required: 'El Monto es Obligatorio', number: 'No es un numero valido' }"
        />
      </FormKit>
    </div>
  </div>
</template>