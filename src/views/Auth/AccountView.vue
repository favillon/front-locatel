<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import TableClient from '../../components/TableClient.vue'
  import AccountService from '../../services/AccountService'

  const dataUser = ref({})
  const loading = ref(true)
  const router = useRouter()

  onMounted(() => {
    AccountService.profile()
      .then(({data}) => {
        dataUser.value = data
      })
      .catch( (error) => {
        console.log('Hubo un error')
        console.log(error);
      } )
      .finally( () => {
        loading.value = false
      })
  })
  const closedSession = async () => {
    const data = await AccountService.logout()
    if (data.status) {
      router.push({ name: 'home'})
    }
  }

</script>

<template>
  <div class="mx-auto mt-10 bg-white shadow">
    <div class="mx-auto md:w-2/3 py-20 px-6">
      <div class="flex justify-end">
        <button @click="closedSession" class="bg-orange-500 text-white font-bold py-2 px-4 rounded">
          Cerrar sesión
        </button>
      </div>      
      <TableClient v-if="!loading" :user=dataUser.data />
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>
  </div>
</template>