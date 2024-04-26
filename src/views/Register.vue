<script setup>
  import { FormKit } from '@formkit/vue'

  import { useAuthStore } from '../stores/auth';  
  const storeAuth = useAuthStore()

  const handleSubmit = (data) => {
    storeAuth.register(data)
  }
</script>

<template>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <FormKit
          type="form"
          submit-label="Registrar"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
      >
          <FormKit 
              type="text"
              label="Nombre"
              name="name"
              placeholder="Nombre de Cliente"
              validation="required"
              prefix-icon="people"
              :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio' }"
          />

          <FormKit 
              type="number"
              label="identificacion"
              name="identification"
              placeholder="Identificacion"
              validation="required|number"
              prefix-icon="number"
              :validation-messages="{ required: 'La Identificacion del Cliente es Obligatorio' }"
          />

          <FormKit 
              type="text"
              label="Email"
              name="email"
              placeholder="Email de Cliente"
              validation="required|email"
              prefix-icon="email"
              :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email: 'Coloca un email válido' }"
          />
          <FormKit 
            type="password"
            label="Contraseña"
            name="password"
            prefix-icon="password"
            validation="required"
            :validation-messages="{  required: 'El Password es Obligatorio', }"
          /> 
      </FormKit>
    </div>
  </div>
</template>