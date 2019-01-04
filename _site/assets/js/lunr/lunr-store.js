var store = [{
        "title": "(JS) call()과 apply()",
        "excerpt":"call() 과 apply() 메서드를 이용하여 명시적으로 this에 바인딩할 수 있습니다. 모든 함수의 부모 객체인 Function.prototype 객체의 메서드라서 모든 함수에서 호출 가능합니다. Function.prototype.apply() fun.apply(thisArg, [argArray]) fun 메서드를 호출할 때, fun 내부의 this를 매개변수인 thisArg로 바인딩 시킵니다. argArray는 fun 메서드에서 인자로 사용됩니다. argArray : 배열리터럴, Array 객체 Function.prototype.call() fun.call(thisArg[,arg1[,arg2[,....]]]) apply와 기능이 같으며,...","categories": [],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript-callapply/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(생활코딩) Javascript 입문1",
        "excerpt":"생활코딩 URL : https://opentutorials.org/course/743 생활코딩 강의에서 기억하고 싶었던 내용을 포스팅해보았다. 변수의 효용을 이해하자. 필요에 의해서 변할 수 있는 영역과 변하지 않는 영역을 구분해서 코딩해야한다. 재활용 가능해진다. 유지보수 용이해진다. 비교 alert( 1 === \"1\"); //false 데이터타입[형식]도 동일해야함.**이걸쓰자! alert( 1 == \"1\"); //true 버그발생 가능성 높음.. var a; alert(a); //undefined 값이 정의되지...","categories": [],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript-opentutorials-1/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(생활코딩) Javascript 입문2",
        "excerpt":"생활코딩 URL https://opentutorials.org/course/743/ 반복문, 함수 정의방법, 배열, 객체 반복문 for( var i=0; i&lt;10; i++){ if( i === 5) break; // 그 즉시, for문 중단 - coding1~4 까지만 출력됨 if( i === 5) continue; // 실행을 중단하고 반복문 이어서 함. - coding1~4/6~9까지 출력됨. document.write(\"coding\"+i+\"&lt;br/&gt;\"); } 함수 정의 방법 // [첫번째 방법]...","categories": [],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript-opentutorials-2/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(생활코딩) Javascript 입문3",
        "excerpt":"생활코딩 javscript 과정 중 정규표현식 내용을 정리했습니다. 정규표현식(Regular Expression) 문자열에서 특정 문자를 찾을 때 사용 .. * 나중에 생활코딩 정규표현식 강의도 듣기!! &amp; 전화번호 때 사용했던 경험 넣기 컴파일 -&gt; 실행 단계로 이뤄진다. 컴파일 : 찾고 싶은 패턴을 만듬. 실행 : 문자열에서 패턴을 추출. 정규표현식 객체를 만드는 방법 1) var...","categories": [],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript-opentutorials-3/",
        "teaser":"http://localhost:4000/true"},{
        "title": "Vue2 65분만에 배우기!",
        "excerpt":"유튜브 영상 The Vue Tutorial for 2018 - Learn Vue 2 in 65 Minutes 중 몰랐던 내용 정리한 글입니다. 1. Vue-CLI 설치하기 Vue-CLI를 통해 Vue 프로젝트를 빠르고 쉽게 생성할 수 있다. &gt; mkdir vue-toy &gt; cd vue-toy &gt; npm install -g @vue/cli -- Vue-CLI 설치 &gt; vue create vue-voca --...","categories": [],
        "tags": ["vuejs"],
        "url": "http://localhost:4000/vue2/",
        "teaser":"http://localhost:4000/true"},{
        "title": "npm 시작하기",
        "excerpt":"1. npm이란? npm은 어떻게 구성되어있을까? npm은 세 개의 컴포넌트로 구성되어있습니다. the website - 패키지 탐색, 프로파일 설정, 개인 npm histoty 관리 CLI ( the Command Line Interface ) - 개발자와 npm이 소통하는 방법으로 터미널에서 동작 the registry - 자바스크립트 소프트웨어의 공용 데이터베이스 및 메타 정보 npm은 언제 사용할까? 앱에 패키지를...","categories": [],
        "tags": ["npm"],
        "url": "http://localhost:4000/npmstart1/",
        "teaser":"http://localhost:4000/true"},{
        "title": "npm 로컬 패키지 설치하기",
        "excerpt":"4. 로컬에 패키지를 설치해보자 패키지를 어떤 방식으로 사용하는지에 따라 우리는 로컬 또는 전역에 npm 패키지를 설치할 수 있습니다. Node.js의 require을 사용하여 당신의 모듈에서 패키지를 사용하려면 로컬로 설치하면 됩니다. 이는 npm 설치의 기본 동작입니다. 패키지를 CLI와 같은 커맨드 라인 툴에서 사용하려면 전역으로 설치하면 됩니다. 패키지 다운로드하기 &gt; npm install &lt;package_name&gt; 명령어를...","categories": [],
        "tags": ["npm"],
        "url": "http://localhost:4000/npmstart2/",
        "teaser":"http://localhost:4000/true"},{
        "title": "npm Working with package.json",
        "excerpt":"5. Working with package.json 로컬에 설치된 npm 패키지를 관리하는 최상의 방법은 package.json 파일을 생성하는 것입니다. package.json 파일은 : 프로젝트가 의존하고 있는 패키지들의 리스트를 보여줍니다. semantic versioning rule에 따라 프로젝트에 의존한 패키지들의 버전을 설정할 수 있습니다. 빌드를 재현할 수 있으므로, 좀 더 쉽게 다른 개발자와 공유할 수 있습니다. 요구사항 package.json 파일이...","categories": [],
        "tags": ["npm"],
        "url": "http://localhost:4000/npmstart3/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(안드로이드) 시작하기 앞서 기초 학습",
        "excerpt":"안드로이드 학습을 시작하기 전에 간단히 자바 기본 개념을 정리했습니다. 안드로이드 기초 안드로이드 4대 구성요소 액티비티 화면 하나당 하나의 액티비티 가짐. 여러개의 액티비티 중 하나가 메인 액티비티가 되며 manifest에 정의된다. 리시버 전화&amp;문자 수신, 배터리 부족 등의 브로드캐스트를 수신하는 객체 프로바이더 데이터베이스나 파일 등의 정보를 외부의 앱에 공개하기 위한 객체. ContentProvider 클래스를...","categories": [],
        "tags": ["android"],
        "url": "http://localhost:4000/android-base/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(안드로이드) 어댑터뷰를 사용해보자",
        "excerpt":"[될때까지 안드로이드] 어댑터뷰 파트의 내용을 정리한 글입니다. ListView 와 GridView 반복되고 양이 많은 데이터를 표시하고 싶을 때 이미지와 같이 메모리를 차지하는 리소스를 표시하고 싶을 때 모두 AdapterView 추상클래스를 상속받아 어댑터 패턴을 사용하여 데이터를 뷰에 표시한다. ScrollView의 경우 한번에 모든 컨텐츠를 로드하므로 컨텐츠가 메모리를 많이 사용할 경우 메모리 부족으로 앱이 종료될...","categories": [],
        "tags": ["android"],
        "url": "http://localhost:4000/android-adapter/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(안드로이드) RecyclerView를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 RecyclerView 파트를 정리한 내용입니다. 어댑터 뷰의 성능을 개선한 컴포넌트로 애니메이션을 지원하고 뷰홀더 패턴을 강제한다. 대신 이벤트 리스너와 커서를 지원하지 않는 단점이 있다. 어댑터 뷰의 단점 빠르게 스크롤 할 때 성능문제와 불필요한 지연 문제가 있다. 데이터 목록이 변경되었을 때, notifyDataSetChanged() 메서드를 빈번하게 호출하여 전체 아이템을 갱신하는 데 비용이...","categories": [],
        "tags": ["android"],
        "url": "http://localhost:4000/android-recycler/",
        "teaser":"http://localhost:4000/true"},{
        "title": "(안드로이드) fragment를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 fragment 파트를 정리한 내용입니다. 기본 프래그먼트 구현 예제. 다이얼로그 프래그먼트 구현 예제. 콜백 구현 예제. 여러 개의 프래그먼트를 하나의 액티비티에 조합하여 창이 여러 개인 UI를 구축할 때 사용할 수 있다. 하나의 프래그먼트를 여러 액티비티에서 재사용할 수 있으며,동적으로 추가, 삭제, 교체가 쉽다. 프래그먼트는 자체 수명 주기를 가진다. 프래그먼트는...","categories": [],
        "tags": ["android"],
        "url": "http://localhost:4000/android-fragment/",
        "teaser":"http://localhost:4000/true"}]
