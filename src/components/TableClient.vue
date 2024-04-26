<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    user: {
      type: Object
    }
  })

  const dataUser = computed(() => {
    return props.user
  })
</script>

<template>
  <div class="text-center">
    <h1 class="text-2xl">Cuenta</h1>
    <table class="w-full border-collapse border border-slate-500">
      <thead>
        <tr>
          <th class="text-left font-bold p-2">Info</th>
          <th class="text-right font-bold p-2">Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left p-2">Nombre</td>
          <td class="text-right p-2">{{ dataUser.name }}</td>
        </tr>
        <tr>
          <td class="text-left p-2">Email</td>
          <td class="text-right p-2">{{ dataUser.email }}</td>
        </tr>
        <tr>
          <td class="text-left p-2">ID</td>
          <td class="text-right p-2">{{ dataUser.identification }}</td>
        </tr>
        <tr>
          <td class="text-left p-2">Numero de Cuenta</td>
          <td class="text-right p-2">{{ dataUser.account.account_number }}</td>
        </tr>
        <tr>
          <td class="text-left p-2">Saldo</td>
          <td class="text-right p-2">${{ dataUser.account.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>