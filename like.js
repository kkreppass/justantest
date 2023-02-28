function csrfToken(){
    var next_data=document.getElementById("__NEXT_DATA__");
    var nj=JSON.parse(next_data.innerText);
    return nj.props.initialProps.csrfToken;
}
let xToken=await fetch("https://playentry.org/").then(function(response){
        return response.text()
    }).then(function(text){
        text=text.substr(text.indexOf('"xToken"')+10);
        text=text.substr(0,text.indexOf('"'))
        return text;
    });

fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json","csrf-token":csrfToken()},body:'{"query":"\\n    query SELECT_USER_PROJECTS(\\n        \\n    $user: String!\\n    $query: String\\n    $categoryCode: String\\n    $groupId: ID\\n    $pageParam: PageParam\\n    $isOpen: Boolean\\n    $except: [ID]\\n    $searchAfter: JSON\\n    $searchType: String\\n\\n    ) {\\n        userProjectList(\\n            \\n    user: $user\\n    query: $query\\n    categoryCode: $categoryCode\\n    groupId: $groupId\\n    pageParam: $pageParam\\n    isOpen: $isOpen\\n    except: $except\\n    searchAfter: $searchAfter\\n    searchType: $searchType\\n\\n    ) {\\n            total\\n            list {\\n                \\n    id\\n    name\\n    user {\\n        id\\n        username\\n        nickname\\n        profileImage {\\n            id\\n            filename\\n            imageType\\n        }\\n    }\\n    thumb\\n    isopen\\n    isPracticalCourse\\n    category\\n    categoryCode\\n    created\\n    updated\\n    special\\n    isForLecture\\n    isForStudy\\n    isForSubmit\\n    hashId\\n    complexity\\n    staffPicked\\n    ranked\\n    visit\\n    likeCnt\\n    comment\\n\\n            }\\n            searchAfter\\n        }\\n    }\\n","variables":{"searchType":"scroll","user":"62e0f3af3d80d5006290ab89","term":"all","pageParam":{"display":100,"sort":"created"}}}',method:"POST"})
.then(e=>e.json()).then(e=>{var n=e.data.userProjectList.list;console.log(n),n.forEach(function(e){
    console.log(e.id);
    fetch("https://playentry.org/graphql",{headers:{"content-type":"application/json","csrf-token":csrfToken(), "x-token":xToken},body:`{"query":"\\n    mutation LIKE($target: String, $targetSubject: String, $targetType: String, $groupId: ID) {\\n        like(target: $target, targetSubject: $targetSubject, targetType: $targetType, groupId: $groupId) {\\n            \\n    target\\n    targetSubject\\n    targetType\\n\\n        }\\n    }\\n","variables":{"target":"${e.id}","targetSubject":"project","targetType":"individual"}}`,method:"POST"});
})});
location.href="https://playentry.org/project/608ba2b79748fd0019b7d029"
