<script setup lang="ts">
import { reactive, useAuth } from '#imports';
import { LoginForm } from './types';

const emit = defineEmits(['success']);
const { login } = useAuth();

const form = reactive<LoginForm>({
  data: {
    email: '',
    password: ''
  },
  errors: null,
  pending: false
});

const onLogin = async () => {
  try {
    form.errors = null;
    form.pending = true;

    await login(form.data.email, form.data.password);
    emit('success');
  }
  catch (error) {
    // console.error(error);
    if (error.data.errors) form.errors = error.data.errors;
  }
  finally {
    form.pending = false;
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="onLogin">
      <div>
        <input
          v-model="form.data.email"
          type="email"
          placeholder="Email address"
        >
      </div>

      <div>
        <input
          v-model="form.data.password"
          type="password"
          placeholder="Password"
        >
      </div>
    </form>
  </div>
</template>
