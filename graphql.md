# Movie GraphQL

### GraphQL로 해결할 수 있는 문제

1. Over-fetching

    - 요청한 영역의 정보보다 많은 정보를 서버에서 받는 것.

2. Under-fetching

    - REST에서 하나를 완성하려고 많은 소스를 요청하는 것.

-   GrahpQL은

    -   하나의 endpoint만 존재한다. URL이 존재하지 않는다.

**Query**는 Database에서 원하는 것을 요청하고 GraphQL 언어로 내가 원하는 정보를 알려준다.

-   정보를 받을때 사용(DB로부터)

```javascript
query {
    feed {
        comments
        likeNumer
    }
    notification {
        isRead
    }
    user {
        username
        profilePic
    }
}

in JS
{
    feed :[
        {
            comments:1,
            likeNumber: 20
        }
    ],
    notification [
        {
            isRead : true
        },
        {
            isRead : false
        }
    ],
    user:{
        username: "nico"
        profilePic: "http://"
    }
}
```

**schema**는 내가 받거나 줄 정보에 대한 서술,설명
**Mutation**은 정보를 변형할 때, 서버 혹은 DB에서 정보를 바꾸는 작업을 할 때

### Resolver

: Query를 resolve(해결)하는 것.

### nodemon

변경사항이 생겼을 때 서버를 재시작.

### 설정.

> yarn add babel=node -- dev
> yarn global add babel-cli --ignore-engines
> Nodes.js의 import 같은 코드처럼 코드를 기본적으로 더 좋게 만들어준다.
> yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

### playground

DB 테스트 - Postman과 비슷.

### index, schema, resolvers, db.js

> yts api >>> 영화 API
