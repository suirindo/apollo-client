<template>
    <div>
        <router-link to = '/'>トップページ</router-link>
        <v-form ref = 'form' v-model = 'valid' lazy-validation>
            <v-text-field
                type = 'email'
                v-model = 'email'
                :rules = 'emailRules'
                label = 'メールアドレス'
                required
            ></v-text-field>
            <v-text-field
                type = 'password'
                v-model = 'password'
                :rules = 'passwordRules'
                label = 'パスワード'
                required
            ></v-text-field>
            <!-- ログインボタン -->
            <v-btn
                :disabled='!valid'
                @click='login'
            >
                ログイン
            </v-btn>
        </v-form>
    </div>
</template>