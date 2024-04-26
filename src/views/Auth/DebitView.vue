<script setup>
  import { FormKit } from '@formkit/vue'
  import  AccountService  from "../../services/AccountService";

  const handleSubmit = (data) => {    
    AccountService.debit(data)
      .then(response => {
        const {data} = response
        alert(data.message);
        const myField = document.getElementById('value');
        myField.value = '';
      })
      .catch((error) => {
        alert('Fallo al intentar retirar')
        console.log(error)
      })
  }
</script>

<template>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit
        id="retira"
        type="form"
        submit-label="Retirar"
        incomplete-message="No fue posible Retirar"
         @submit="handleSubmit"
      >
        <FormKit 
          type="number"
          label="Monto a Retirar"
          name="value"
          id="value"
          placeholder="100000"
          validation="required|number"
          prefix-icon="number"
          :validation-messages="{ required: 'El Monto es Obligatorio', number: 'No es un numero valido' }"
        />
      </FormKit>
    </div>
  </div>
</template>