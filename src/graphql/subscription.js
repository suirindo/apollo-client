//この実装を終えると、リアルタイムでの投稿の書き込みと更新の共有ができるようになる
//サブスクリプションのクエリを書いていく

import gql from 'graphql-tag'

//サブスクリプション
export const SUBSCRIPTION_POST = gql`
subscription {
    post {
        mutation
    data {
        id
        title
        author
    }
    }
}
`

