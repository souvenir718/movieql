### GraphQL로 해결할 수 있는 문제

1. Over-fetching

-   요청한 영역의 정보보다 많은 정보를 서버에서 받는 것.

2. Under-fetching

-   REST에서 하나를 완성하려고 많은 소스를 요청하는 것.

하나의 endpoint만 존재한다. URL이 존재하지 않는다.

Query는 Database에서 원하는 것을 요청하고 GraphQL 언어로 내가 원하는 정보를 알려준다.

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

### nodemon

변경사항이 생겼을 때 서버를 재시작.

### yarn add babel=node -- dev

yarn global add babel-cli --ignore-engines
Nodes.js의 import 같은 코드처럼 코드를 기본적으로 더 좋게 만들어준다.
yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
