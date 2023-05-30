
# 코드스테이츠 쇼핑몰 솔로프로젝트

</br>

## 🧲 Stacks
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"> <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

</br>

## 💻 Repo소개
API를 통해 불러온 데이터들을 이용하여 localStorage에 저장하는 방식으로 북마크를 추가, 삭제할 수 있는 쇼핑몰 사이트입니다.

</br>

## 🖥️ 실행화면

![May-19-2023 11-58-07](https://github.com/plla2/fe-sprint-coz-shopping/assets/120915990/2395f11e-63ac-4949-8e94-4643fb5de447)

</br>

## 🖋️ 주요 기능
<ul>
  <li> 헤더 - 좌측 상단 로고와 텍스트를 누르면 메인페이지로 돌아오고, 우측 상단 햄버거는 상품리스트 페이지, 북마크리스트 페이지로 이동할 수 있는 라우터가 되어있다.
</li>
    </br>
  <li> 메인 (상품 리스트) - 상품 리스트는 api에서 받아온 데이터를 랜덤으로 4개를 뽑아서 렌더링해준다. 클릭했을 때 모달이 뜨도록 하고, 별 이미지를 클릭하면 localStorage에 저장된다. 만약 localStorage에 해당 데이터가 이미 존재하면 localStorage에서 제거해준다.</li>
    </br>
  <li> 메인 (북마크 리스트) - 상품 리스트에서 별 이미지를 클릭해서 저장된 localStorage의 데이터를 받아와서 렌더링해준다. 마찬가지로 4개만 보이도록 slice메서드를 통해 잘라주었고, 북마크 리스트에서도 localStorage에 데이터를 저장, 삭제를 할 수 있다.</li>
    </br>
    <li> 메인 (전체) - 상품의 이미지를 클릭했을 때 모달이 뜨며 모달 외부를 클릭하거나, 모달 내의 X를 클릭해야 모달이 닫힌다.</li>
    </br>
      <li> 상품리스트 페이지 - 헤더의 햄버거버튼을 눌러 상품리스트 페이지에 들어오게되면 메인페이지의 상품리스트처럼 4개가 렌더링 되는 것이 아닌,
        전체데이터가 렌더링이 된다. 그리고 페이지상단의 전체, 상품, 카테고리, 기획전, 브랜드 의 타입을 클릭하면 각 타입에 포함되는 데이터만 렌더링된다.
        마찬가지로 모달기능, 북마크기능도 존재한다.</li>
    </br>
        <li> 북마크 페이지 - 메인페이지, 상품리스트페이지 에서 북마크 기능으로 localStorage에 저장된 모든 데이터를 가져와서 렌더링해준다.
          상품리스트 페이지와 마찬가지로 localStorage의 모든 데이터가 렌더링되면서 필터기능으로 각 타입에 포함되는 데이터 렌더링한다.
          모달기능, 북마크추가, 제거 기능이 존재한다.
  </ul>
  
  </br>
   </br> 
  
 ## 🗄️ 폴더 구조
 ```
 fe-sprint-coz-shopping
├
├─ node_modules
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
│
├─ README.md
└─ src
   ├─ App.css
   ├─ App.js
   ├─ index.js
   ├─ assets
   │  ├─ 기획전.png
   │  ├─ 전체.png
   │  ├─ 카테고리.png
   │  ├─ 브랜드.png
   │  ├─ 상품.png
   │  ├─ 로고.png
   │  ├─ 쇼핑몰 이름.png
   │  ├─ Property 1=off.png 
   │  ├─ Property 1=on.png
   │  └─ 아이콘.png
   │ 
   ├─ components
   │  ├─ Card
   │  │  ├─ Card.js
   │  │  └─ Card.module.css
   │  ├─ BookMarkItem
   │  │  ├─ BookMarkItem.js
   │  │  └─ BookMarkItem.module.css
   │  ├─ Filter
   │  │  ├─ Filter.js
   │  │  └─ Filter.module.css
   │  ├─ Footer
   │  │  ├─ Footer.js
   │  │  └─ Footer.module.css
   │  ├─ Header
   │  │  ├─ Header.js
   │  │  └─ Header.module.css
   │  ├─ MainPageItem
   │  │  ├─ MainPageItem.js
   │  │  └─ MainPageItem.module.css
   │  └─ MainPage.js
   │
   ├─ hooks
   │  └─ useOutSideClick.js
   │
   ├─ pages
   │  ├─ BookMarkPage
   │  │  ├─ BookMarkPage.js
   │  │  └─ BookMarkPage.module.css
   │  ├─ ProductPage
   │  │  ├─ CartListPage.js
   │  │  └─ CartListPage.module.css
   │  └─ Main.js
   │
   └─ UI
      ├─ Modal
      │  ├─ Modal.js
      │  ├─ ModalContainer.js
      │  └─ Modal.module.css
      ├─ Dropdown.js
      └─ Dropdown.module.css
     
 ```
  
  ## 🔩 많이 헷갈리고 어려웠던 코드
  
  
```
  const handleBookmark = (item) => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];
    const itemIndex = bookmark.findIndex(x => x.id === item.id);
    const isExistingItem = itemIndex !== -1;

    let updatedBookmark;
    if (isExistingItem) {
      updatedBookmark = bookmark.filter((_, index) => index !== itemIndex);
    } else {
      updatedBookmark = [item, ...bookmark];
    }
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
    setBookmarkState(updatedBookmark)
  }
```
handleBookmark 함수가 호출될때 매개변수로 들어온 item이 localStorage에 이미 존재하는지 안하는지 확인하고
그에따라 추가할지 제거할지 정해서 setBookmarkState 상태변경함수를 통해 상태변경해주고 렌더링해준다.
</br>
```
const [res2, setRes2] = useState([])
  const [filter, setFilter] = useState("every")
  useEffect(() => {
    axios.get('http://cozshopping.codestates-seb.link/api/v1/products?'
    )
      .then(response => {
        setRes2(response.data)
        if (filter === "every") {
          return setRes2(response.data);
        }
        const result = response.data.filter((el) => el.type === filter);
        setRes2(result)
      }
      );

  }, [filter]);
```
axios로 전체데이터를 받아와서 필터가 "every"이면 전체 데이터를 res2에 담아주고,
아니라면 각각 타입에 맞는 데이터들만 필터링해서 res2에 담아준다.

 </br>
 
## ⚙️ Prerequisites
<ul>
<li>react >= 18.2.0
<li>axios >= 1.4.0
<li>styled-components >= 6.0.0-rc.1
<li>react-router-dom >= 6.11.1

### Install
```npx create-react-app .```</br>
```npm install react-router-dom --save```</br>
```npm install axios```</br>
```npm install styled-components@lastest```</br>


