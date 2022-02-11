<!-- 模擬データを一覧表示させる -->
<template>
  <v-app>
        <v-main>
          <div id='block'>
        <!-- 入力フォーム -->
        <v-dialog v-model = 'dialog' maz-width = '500px'>               </v-dialog>
            <v-card>
                <h2 v-if='isCreate'>本棚に追加する</h2>
                <h2 v-if='!isCreate'>本棚を更新する</h2>
                <v-form ref='form' v-model='valid' lazy-validation>         </v-form>
                <!--名前-->
                <v-text-field
                    v-model = 'post.title'
                    :rules='titleRules'
                    :counter='20'
                    label='タイトル'
                    required
                ></v-text-field>
                <v-text-field
                    v-model='post.author'
                    :rules='authorRules'
                    :counter='20'
                    label='作者'
                    required
                ></v-text-field>
                <!--追加ボタン-->
                <v-btn
                v-if="isCreate"
                :disabled='!valid'
                @click='createPost'
                >
                追加
                </v-btn>
                <!--更新ボタン-->
                
            </v-card>
              <v-row
              style='width: 550px;'
              >
                <v-toolbar color='grey lighten-1'>
                    <v-toolbar-title>本棚</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn color='primary' dark class='mb-1' @click='showDialogNew'>新規追加</v-btn>
                </v-toolbar>

                <!-- 本棚の中身-->
                <div
                v-for='post in posts' :key='post.id'
                >
                <v-card
                    class='mx-auto'
                    width='550px'
                    outlined
                >
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class='headline mb-1'>
                            {{post.title}} / {{post.author}}
                        </v-list-item-title>
                        <v-list-item-subtitle>From Apollo-Server</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <!-- 編集・削除ボタン -->
                <v-card-actions>
                    <v-btn
                        color='success'
                        small
                    >
                    <v-icon small>
                            編集する
                    </v-icon>
                    </v-btn>
                    <v-btn
                        color="error"
                        small
                    >
                    <v-icon small>
                        削除する
                    </v-icon>
                    </v-btn>
                </v-card-actions>
         </v-card>
  </div>
  </v-row>
  </div>
  </v-main>
  </v-app>
</template>

<script>
//Query
import {ALL_POSTS} from '../graphql/query';
export default {
    name:'Post',
    data:() => ({
        //本棚の中身を定義
        posts: [],
    }),
    apollo: {
        //本棚の中身
        posts: {
            //クエリを書いている部分
            query:ALL_POSTS,
        },
    },
    methods: {},
};
</script>

<style>
#block{
    text-align:center;
    display: inline-block;
}
</style>