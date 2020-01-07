// mutation-types 상수 이름을 불러와 스토어 값 변경

// mutation(상태, 페이로드)
import {FETCH_POST_LIST} from './mutations-types'
import {FETCH_POST} from './mutations-types'
import {SET_ACCESS_TOKEN} from './mutations-types'
import {SET_MY_INFO} from './mutations-types'
import Cookies from 'js-cookie' // js-cookie 라이브러리를 불러온다.

import api from '@/api'

export default{
    // FETCH_POST_LIST 변이 작성
    [FETCH_POST_LIST] (state,posts){
        state.posts = posts
    },

    [FETCH_POST] (state, post){
        state.post = post
    },

    [SET_ACCESS_TOKEN](state,accessToken){
        // accessToken을 인자로 받아 스토어 상태를 업데이트하고 HTTP 헤더에 토큰을 저장한다.
        if(accessToken){
            state.accessToken = accessToken
            api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

            //쿠키에 토큰을 저장한다.
            Cookies.set('accessToken', accessToken)
        }
    },

    [SET_MY_INFO](state,me){
        if(me){
            state.me= me
        }
    }
}