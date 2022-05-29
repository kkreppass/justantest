alert("[주의] 정말 이 코드를 실행하시겠습니까?");
alert("[주의] 이 코드는 자신의 마이페이지에서 실행해야 합니다.")
var userId = location.href.split("/")[4].substr(0,25);
console.log(userId);
fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    query SELECT_USER_PROJECTS(\\n        \\n    $user: String!\\n    $query: String\\n    $categoryCode: String\\n    $groupId: ID\\n    $pageParam: PageParam\\n    $isOpen: Boolean\\n    $except: [ID]\\n    $searchAfter: JSON\\n    $searchType: String\\n    $term: String\\n\\n    ) {\\n        userProjectList(\\n            \\n    user: $user\\n    query: $query\\n    categoryCode: $categoryCode\\n    groupId: $groupId\\n    pageParam: $pageParam\\n    isOpen: $isOpen\\n    except: $except\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n    term: $term\\n\\n    ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            searchAfter\\n        }\\n    }\\n\",\"variables\":{\"searchType\":\"scroll\",\"user\":\"${userId}\",\"term\":\"all\",\"pageParam\":{\"display\":200,\"sort\":\"created\"}}}`,
  "method": "POST",
}).then(r=>r.json()).then(function(r){let data = r.data.userProjectList.list;data.forEach(function(e){
    let id=e.id;
                  console.log(id);                                                                                    fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    mutation DELETE_PROJECT($id: ID!) {\\n        deleteProject(id: $id) {\\n            status\\n            result\\n        }\\n    }\\n\",\"variables\":{\"id\":\"${id}\"}}`,
  "method": "POST",
});})})
////프로젝트 삭제

fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    query SELECT_ENTRYSTORY(\\n    $pageParam: PageParam\\n    $query: String\\n    $user: String\\n    $category: String\\n    $term: String\\n    $prefix: String\\n    $progress: String\\n    $discussType: String\\n    $searchType: String\\n    $searchAfter: JSON\\n){\\n        discussList(\\n    pageParam: $pageParam\\n    query: $query\\n    user: $user\\n    category: $category\\n    term: $term\\n    prefix: $prefix\\n    progress: $progress\\n    discussType: $discussType\\n    searchType: $searchType\\n    searchAfter: $searchAfter\\n) {\\n            total\\n            list {\\n                \\n\\tid\\n    content\\n    created\\n    commentsLength\\n    likesLength\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    isLike\\n\\n            }\\n            searchAfter\\n        }\\n    }\\n\",\"variables\":{\"category\":\"free\",\"user\":\"${userId}\",\"term\":\"all\",\"searchType\":\"scroll\",\"pageParam\":{\"display\":800,\"sort\":\"created\"}}}`,
  "method": "POST",
}).then(r=>r.json()).then(function(r){let data = r.data.discussList.list;console.log(data);data.forEach(function(e){
    let id=e.id;
console.log(id);
fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": `{\"query\":\"\\n    mutation REMOVE_DISCUSS($id: ID) {\\n        removeDiscuss(id: $id){\\n            id\\n        }\\n    }\\n\",\"variables\":{\"id\":\"${id}\"}}`,
  "method": "POST",
});})})

fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": "{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"profileImage\":\"603efe70b9d3cd007d0dec4f\"}}",
  "method": "POST",
});
fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": "{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"profileImage\":\"603efe67b9d3cd007d0dec4d\"}}",
  "method": "POST",
});

fetch("https://playentry.org/graphql", {
  "headers": {
    "content-type": "application/json",
  },
  "body": "{\"query\":\"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n\",\"variables\":{\"description\":\".\"}}",
  "method": "POST",
});
