<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/locatel.webp" width="125" height="125" />
    <div>
      <nav>
        <RouterLink class="text-[#ff8100] font-bold" :to="{ name : 'account' }">Cuenta</RouterLink>
        <RouterLink class="text-[#ff8100] font-bold" :to="{ name : 'deposit' }">Consigna</RouterLink>
        <RouterLink class="text-[#ff8100] font-bold" :to="{ name : 'debit' }">Retira</RouterLink>        
      </nav>
    </div>
  </header>
  <RouterView />
</template>