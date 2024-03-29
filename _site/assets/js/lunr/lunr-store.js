var store = [{
        "title": "(JS) call()과 apply()",
        "excerpt":"call() 과 apply() 메서드를 이용하여 명시적으로 this에 바인딩할 수 있습니다. 모든 함수의 부모 객체인 Function.prototype 객체의 메서드라서 모든 함수에서 호출 가능합니다. Function.prototype.apply() fun.apply(thisArg, [argArray]) fun 메서드를 호출할 때, fun 내부의 this를 매개변수인 thisArg로 바인딩 시킵니다. argArray는 fun 메서드에서 인자로 사용됩니다. argArray : 배열리터럴, Array 객체 Function.prototype.call() fun.call(thisArg[,arg1[,arg2[,....]]]) apply와 기능이 같으며,...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-callapply/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문1",
        "excerpt":"생활코딩 URL : https://opentutorials.org/course/743 생활코딩 강의에서 기억하고 싶었던 내용을 포스팅해보았다. 변수의 효용을 이해하자. 필요에 의해서 변할 수 있는 영역과 변하지 않는 영역을 구분해서 코딩해야한다. 재활용 가능해진다. 유지보수 용이해진다. 비교 alert( 1 === \"1\"); //false 데이터타입[형식]도 동일해야함.**이걸쓰자! alert( 1 == \"1\"); //true 버그발생 가능성 높음.. var a; alert(a); //undefined 값이 정의되지...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문2",
        "excerpt":"생활코딩 URL https://opentutorials.org/course/743/ 반복문, 함수 정의방법, 배열, 객체 반복문 for( var i=0; i&lt;10; i++){ if( i === 5) break; // 그 즉시, for문 중단 - coding1~4 까지만 출력됨 if( i === 5) continue; // 실행을 중단하고 반복문 이어서 함. - coding1~4/6~9까지 출력됨. document.write(\"coding\"+i+\"\"); } 함수 정의 방법 // [첫번째 방법]...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문3",
        "excerpt":"생활코딩 javscript 과정 중 정규표현식 내용을 정리했습니다. 정규표현식(Regular Expression) 문자열에서 특정 문자를 찾을 때 사용 .. * 나중에 생활코딩 정규표현식 강의도 듣기!! &amp; 전화번호 때 사용했던 경험 넣기 컴파일 -&gt; 실행 단계로 이뤄진다. 컴파일 : 찾고 싶은 패턴을 만듬. 실행 : 문자열에서 패턴을 추출. 정규표현식 객체를 만드는 방법 1) var...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향1",
        "excerpt":"생활코딩 함수지향 파트 중 변수의 유효범위에 대한 내용을 정리했습니다. 변수의 유효범위 예제1) 지역변수와 전역변수의 구분1 var vscope = 'global'; //전역변수 function fscope(){ alert(vscope); } fscope(); //global Note: 전역변수 : 애플리케이션 전역에서 접근 가능한 변수 Note: 지역변수 : 함수 내에서만 접근 가능한 변수 *변수에 접근할 때, 지역변수를 우선적으로 찾는다. &lt;/br&gt; 예제2)...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-function-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향2",
        "excerpt":"생활코딩 함수지향 파트 중 값으로서의 함수와 콜백에 대한 내용을 정리했습니다. 1. 값으로서 함수 예제1) 자바스크립트에서는 함수도 객체이며, 함수도 값이 될 수 있다. function a(){} //함수는 a라는 변수에 담겨진 값. var a = function(){} 예제2) 함수는 객체 안에 저장될 수 있다. a = { b : function(){ } } b는 key,...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-function-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향3",
        "excerpt":"생활코딩 함수지향 파트 중 클로저에 대한 내용을 정리했습니다. 1. 클로저의 개념 function outter() { var title = 'coding everybody'; return function(){ alert(title); } } inner = outter(); inner(); 함수 outter의 리턴 값은 내부함수이며 변수 inner에 내부함수가 값으로 저장된다. outter 호출이 종료된 순간, outter는 사라진다. 하지만, inner()를 실행했을 때 알럿창에 coding...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-function-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향4",
        "excerpt":"생활코딩 함수지향 파트 중 arguments와 apply()에 대한 내용을 정리했습니다. 1. arguments function sum(){ var i, _sum = 0; for( i=0; i&lt; arguments.length; i++){ document.write(i + \":\" + arguments[i] + &lt;'br/&gt;'); _sum += arguments[i]; } return _sum; } document.write('result : ' + sum(1,2,3,4)); arguments는 사용자가 전달한 인자들이 담겨있는 객체다. .length를 통해...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-function-4/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 객체지향1",
        "excerpt":"생활코딩 객체지향에 대한 내용을 정리했습니다. 객체(object)는 연관되어 있는 것(변수, 메소드)들을 그룹화한 것, 각 그룹화된 것은 독립성을 가지는 부품이 된다. 1. 객체의 생성 방법 this는 함수가 속해있는 객체인 person을 가리킨다. var person = {}; person.name = 'egoing'; person.introduce = function(){ return 'My name is' + this.name; } document.write( person.introduce()); var person...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-object-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 객체지향2",
        "excerpt":"생활코딩 객체지향 파트 중 상속과 프로토타입에 대한 내용을 정리했습니다. 1. 상속 상속을 하기 위한 준비 작업 function Person(name){ this.name = name; } Person.prototype.name = null; Person.prototype.introduce = function(){ return 'My name is' + this.name; } var p1 = new Person('egoing'); document.write(p1.introduce()); //My name is egoing 객체의 프로퍼티 정의 방법은 생성자를...","categories": ["javascript"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/javascript/javascript-opentutorials-object-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "mssql 쿼리 팁 - 여러 행의 데이터를 한 칼럼에 담기",
        "excerpt":"IDXNAME 1A 1B 1C 2B 2D 위 테이블을 아래와 같이 출력하고 싶다. IDXNAME 1A,B,C 2B,D SELECT DISTINCT IDX, STUFF ( ( SELECT ',' + NAME FROM TB_NAME A WHERE A.IDX = B.IDX FOR XML PATH('') ),1,1,'') AS NAME FROM TB_NAME B STUFF(STRING,1,1,’’) - 맨 앞 문자 한개 제거 STUFF 함수...","categories": ["sql"],
        "tags": ["mssql"],
        "url": "http://localhost:4000/sql/mssql-tip-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(mocha) 자바스크립트 단위테스트 시작하기",
        "excerpt":"mocha 자바스크립트 테스트 프레임워크로 단위테스트 시작하는 방법입니다. 단위테스트(Unit Test)가 필요한 이유? 프로그램을 작은 단위로 쪼개서 내가 짠 프로그램이 내가 원하는 결과대로 동작하는 지 테스트할 수 있다. 단위테스트를 거치면 프로그램의 안정성이 높아지며, 단위테스트를 믿고 리팩토링을 할 수 있다. 자바스크립트로 짜여진 프로그램에서 오류를 찾을 때, 단위테스트를 거치지 않은 프로그램의 경우는 전체 흐름을...","categories": ["javascript"],
        "tags": ["mocha","javascript"],
        "url": "http://localhost:4000/javascript/mocha-unittest/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "Vue2 65분만에 배우기!",
        "excerpt":"유튜브 영상 The Vue Tutorial for 2018 - Learn Vue 2 in 65 Minutes 중 몰랐던 내용 정리한 글입니다. 1. Vue-CLI 설치하기 Vue-CLI를 통해 Vue 프로젝트를 빠르고 쉽게 생성할 수 있다. &gt; mkdir vue-toy &gt; cd vue-toy &gt; npm install -g @vue/cli -- Vue-CLI 설치 &gt; vue create vue-voca --...","categories": ["javascript"],
        "tags": ["vuejs"],
        "url": "http://localhost:4000/javascript/vue2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "npm 시작하기",
        "excerpt":"1. npm이란? npm은 어떻게 구성되어있을까? npm은 세 개의 컴포넌트로 구성되어있습니다. the website - 패키지 탐색, 프로파일 설정, 개인 npm histoty 관리 CLI ( the Command Line Interface ) - 개발자와 npm이 소통하는 방법으로 터미널에서 동작 the registry - 자바스크립트 소프트웨어의 공용 데이터베이스 및 메타 정보 npm은 언제 사용할까? 앱에 패키지를...","categories": ["npm"],
        "tags": ["npm"],
        "url": "http://localhost:4000/npm/npmstart1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "npm 로컬 패키지 설치하기",
        "excerpt":"4. 로컬에 패키지를 설치해보자 패키지를 어떤 방식으로 사용하는지에 따라 우리는 로컬 또는 전역에 npm 패키지를 설치할 수 있습니다. Node.js의 require을 사용하여 당신의 모듈에서 패키지를 사용하려면 로컬로 설치하면 됩니다. 이는 npm 설치의 기본 동작입니다. 패키지를 CLI와 같은 커맨드 라인 툴에서 사용하려면 전역으로 설치하면 됩니다. 패키지 다운로드하기 &gt; npm install &lt;package_name&gt; 명령어를...","categories": ["npm"],
        "tags": ["npm"],
        "url": "http://localhost:4000/npm/npmstart2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "npm Working with package.json",
        "excerpt":"5. Working with package.json 로컬에 설치된 npm 패키지를 관리하는 최상의 방법은 package.json 파일을 생성하는 것입니다. package.json 파일은 : 프로젝트가 의존하고 있는 패키지들의 리스트를 보여줍니다. semantic versioning rule에 따라 프로젝트에 의존한 패키지들의 버전을 설정할 수 있습니다. 빌드를 재현할 수 있으므로, 좀 더 쉽게 다른 개발자와 공유할 수 있습니다. 요구사항 package.json 파일이...","categories": ["npm"],
        "tags": ["npm"],
        "url": "http://localhost:4000/npm/npmstart3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) 시작하기 앞서 기초 학습",
        "excerpt":"안드로이드 학습을 시작하기 전에 간단히 자바 기본 개념을 정리했습니다. 안드로이드 기초 안드로이드 4대 구성요소 액티비티 화면 하나당 하나의 액티비티 가짐. 여러개의 액티비티 중 하나가 메인 액티비티가 되며 manifest에 정의된다. 리시버 전화&amp;문자 수신, 배터리 부족 등의 브로드캐스트를 수신하는 객체 프로바이더 데이터베이스나 파일 등의 정보를 외부의 앱에 공개하기 위한 객체. ContentProvider 클래스를...","categories": ["android"],
        "tags": ["android"],
        "url": "http://localhost:4000/android/android-base/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) 어댑터뷰를 사용해보자",
        "excerpt":"[될때까지 안드로이드] 어댑터뷰 파트의 내용을 정리한 글입니다. ListView 와 GridView 반복되고 양이 많은 데이터를 표시하고 싶을 때 이미지와 같이 메모리를 차지하는 리소스를 표시하고 싶을 때 모두 AdapterView 추상클래스를 상속받아 어댑터 패턴을 사용하여 데이터를 뷰에 표시한다. ScrollView의 경우 한번에 모든 컨텐츠를 로드하므로 컨텐츠가 메모리를 많이 사용할 경우 메모리 부족으로 앱이 종료될...","categories": ["android"],
        "tags": ["android"],
        "url": "http://localhost:4000/android/android-adapter/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) RecyclerView를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 RecyclerView 파트를 정리한 내용입니다. 어댑터 뷰의 성능을 개선한 컴포넌트로 애니메이션을 지원하고 뷰홀더 패턴을 강제한다. 대신 이벤트 리스너와 커서를 지원하지 않는 단점이 있다. 어댑터 뷰의 단점 빠르게 스크롤 할 때 성능문제와 불필요한 지연 문제가 있다. 데이터 목록이 변경되었을 때, notifyDataSetChanged() 메서드를 빈번하게 호출하여 전체 아이템을 갱신하는 데 비용이...","categories": ["android"],
        "tags": ["android"],
        "url": "http://localhost:4000/android/android-recycler/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) fragment를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 fragment 파트를 정리한 내용입니다. 기본 프래그먼트 구현 예제. 다이얼로그 프래그먼트 구현 예제. 콜백 구현 예제. 여러 개의 프래그먼트를 하나의 액티비티에 조합하여 창이 여러 개인 UI를 구축할 때 사용할 수 있다. 하나의 프래그먼트를 여러 액티비티에서 재사용할 수 있으며,동적으로 추가, 삭제, 교체가 쉽다. 프래그먼트는 자체 수명 주기를 가진다. 프래그먼트는...","categories": ["android"],
        "tags": ["android"],
        "url": "http://localhost:4000/android/android-fragment/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "jekyll의 minimal-mistakes에서 자바스크립트 커스텀하는 방법",
        "excerpt":"minimal-mistakes 테마를 적용한 jekyll 블로그를 커스텀하는 과정에서 자바스크립트 코드를 추가하는 방법입니다. minimal-mistakes 문서에 자바스크립트 커스텀 방법이 잘 정리되어있습니다. 공식문서 바로가기. 우리가 수정해야 할 파일은 /assets/js/ 에 위치한 _main.js 파일입니다. 하지만, jekyll은 _main.js 파일이 아닌 main.min.js 파일을 컴파일하여 화면에 반영합니다. main.min.js 는 _main.js 자바스크립트 코드를 압축화하고 난독화한 파일로 npm 패키지 중...","categories": ["jekyll"],
        "tags": ["jekyll","github"],
        "url": "http://localhost:4000/jekyll/jekyll-js-custom/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 MVVM에 대해 알아보자1",
        "excerpt":"Coding in Flow의 Room + ViewModel + LiveData + RecyclerView (MVVM) 튜토리얼을 정리했습니다. 파일 구성 MainActivity.java Note.java NoteAdapter.java NoteDao.interface NoteDatabase.java NoteRepository.java NoteViewModel.java MVVM - VIEW와 VIEWMODEL MainActivity.class : 앱의 시작점으로 RecyclerView 설정 및 ViewModel 생성하는 부분 NoteViewModel.class : UI 컴포넌트와 UI 데이터의 분리 NoteAdapter.class : 리사이클러뷰 어댑터 NoteRepository.class : 저장소,...","categories": ["android"],
        "tags": ["android","mvvm"],
        "url": "http://localhost:4000/android/android-mvvm/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 ViewModel에 대해 알아보자",
        "excerpt":"안드로이드 아키텍쳐 중 ViewModel 클래스에 대한 내용입니다. 안드로이드 프레임워크는 액티비티와 프래그먼트와 같은 UI 컨트롤러의 라이프 사이클을 관리한다. [ UI 컨트롤러 라이프 사이클과 ViewModel 스코프] 아래와 같은 구성 변경 발생 시, 안드로이드는 UI 컨트롤러를 종료하거나 재생성한다. 런타임에 화면 방향이 전환되는 경우 언어, 글꼴 배율과 같은 기기 구성이 변경되는 경우 이 때...","categories": ["android"],
        "tags": ["android","viewmodel","mvvm"],
        "url": "http://localhost:4000/android/android-viewModel/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 MVVM에 대해 알아보자2 - 추가/수정/삭제",
        "excerpt":"Coding in Flow의  Room + ViewModel + LiveData + RecyclerView (MVVM) 튜토리얼 중 추가/수정/삭제 부분을 정리했습니다.     안드로이드 MVVM에 대해 알아보자1.에 이어지는 내용으로 노트 추가/수정/삭제를 다룬다.   노트 추가해보자.   ","categories": ["android"],
        "tags": ["android","mvvm"],
        "url": "http://localhost:4000/android/android-mvvm-part2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 LiveData 대해 알아보자",
        "excerpt":"LiveData 클래스를 통해 데이터 변경을 감지해보자. 안드로이드 개발문서-LiveData. LiveData는 LifecycleOwner의 라이프사이클을 알고있다. LiveData 객체는 observe() 메서드를 통해 LifecycleOwner와 Observer객체를 페어로 등록한다. Observer 객체는 페어인 LifecycleOwner가 활성상태(STARTED 또는 RESUMED)일 때, 데이터 변화을 관측할 수 있다. 반대로, LiveData 객체는 LifecycleOwner가 비활성 상태면 LiveData의 변화를 Observer에게 전달하지 않으며, LifecycleOwner가 DESTROYED 상태라면 자동으로 제거된다....","categories": ["android"],
        "tags": ["android","livedata","mvvm"],
        "url": "http://localhost:4000/android/android-LiveData/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(Drawable 리소스) LayerDrawable과 ShapeDrawable을 이용해 둥근모서리와 그림자 있는 배경 만들기.",
        "excerpt":"LayerDrawable과 ShapeDrawable을 이용해 둥근모서리+그림자+투명배경이 있는 디자인을 다른 XML 리소스의 background로 적용하는 방법입니다. 안드로이드 개발문서-Drawable 바로가기 드로어블(Drawable) 리소스 앱 화면에 그리고 싶은 것을 XML 파일로 미리 정의할 수 있으며, getDrawable(int)와 같은 API를 사용하여 가져오거나 android:drawable 및 android:icon과 같은 속성을 사용하여 다른 XML 리소스에 적용할 수 있다. Example) android:background=”@drawable/custom_layer_resource” LayerDrawable 각 &lt;item&gt;...","categories": ["android"],
        "tags": ["android","resource"],
        "url": "http://localhost:4000/android/android-drawable/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드에서 이미지 애니메이션 구현 방법",
        "excerpt":"이미지 애니메이션 구현 방법에는 다음과 같이 1)Animation Drawable과 2)Animated vector Drawable 두가지 옵션이 있다. 안드로이드 개발문서-Animate drwable graphics 바로가기 Icon Animation 참고 문서 Animation Drawable : 몇 개의 정적 drawable 파일들을 순차적으로 보여주는 방식으로 애니메이션을 구현하고 싶을 때(프레임 애니메이션) AnimatedVectorDrawable : 하나의 아이콘이 다른 이미지로 서서히 변화되는(morph) 애니메이션을 구현하고 싶을...","categories": ["android"],
        "tags": ["android","animation"],
        "url": "http://localhost:4000/android/android-animate/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "Liquid 문법",
        "excerpt":"jekyll 블로그 운영시 알아야할 필수 liquid 문법 liquid 문법 정리된 사이트 Liquid categoryInputOutput Objects { { page.title } } Introduction Tags { % if user % } &nbsp;&nbsp;Hello { { user.name } }! { % endif % } Hello Adam! Filters { { \"/my/fancy/url\" | append: \".html\" } } /my/fancy/url.html...","categories": ["jekyll"],
        "tags": ["jekyll","liquid"],
        "url": "http://localhost:4000/jekyll/liquid-site/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "mssql 쿼리 팁 - group by 없이 카운트하는 방법 & 페이징 처리를 위한 전체 레코드 갯수 구하기",
        "excerpt":"프로시저 속도 개선하는 과정에서 배웠던 sql 팁으로, group by 없이 칼럼과 함께 갯수를 출력하는 방법과 페이징 처리에 필요한 전체 레코드 갯수를 구하는 방법에 대한 내용입니다. 관리자 페이지 유지보수 중에 한 프로시저의 실행속도가 굉장히 느린 것을 발견했다. 실무자에게 확인해 본 결과 페이지 넘길 때마다 기본 일분은 기다린다는 답을 받았다. 이 프로시저는...","categories": ["sql"],
        "tags": ["mssql"],
        "url": "http://localhost:4000/sql/mssql-speed-improvement/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 에러 - setText의 파라미터로 숫자를 전달했을 때",
        "excerpt":"setText의 파라미터로 숫자를 전달했을 때 발생되는 에러로그     에러로그   android.content.res.Resources$NotFoundException: String resource ID #0x1f40 at android.content.res.Resources.getText(Resources.java:354) at android.widget.TextView.setText(TextView.java:6133) at org.androidtown.mybudgeter.pager.ExpenditureRecyclerAdapter.onBindViewHolder(ExpenditureRecyclerAdapter.java:30) at org.androidtown.mybudgeter.pager.ExpenditureRecyclerAdapter.onBindViewHolder(ExpenditureRecyclerAdapter.java:16) ....         expenditureAmount.setText(currentExpenditure.getAmount());   에러로그는 위와 같은 코드에서 발생된 것으로, setText에 Integer 값을 전달했을 때 경우이다.    Integer값을 String으로 변환해주면 에러가 수정된다.   expenditureAmount.setText(Integer.toString(currentExpenditure.getAmount()));   ","categories": ["android"],
        "tags": ["android","error"],
        "url": "http://localhost:4000/android/android-error-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "html5 와 css3 와 관련된 에러 모음",
        "excerpt":"   IE에서 CSS 적용 안되는 문제 (2019-03-14)     1. IE에서 CSS 적용 안되는 문제   HTML5, CSS3로 코딩된 페이지가 크롬과 IE 신형 버전에서는 정상적으로 적용되나, 구형 익스플로어에서 적용안되는 문제가 발생했다. 이는 페이지 head 안에 아래의 메타 태그만 추가하면 해결된다.   &lt;meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge, chrome=1\"&gt;   ","categories": ["android"],
        "tags": ["android","error"],
        "url": "http://localhost:4000/android/html5-error/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "자바 API 정리",
        "excerpt":"JAVA 공부하면서 알게 된 API 정리한 글 입니다. java.lang.String compareTo public int compareTo(String anotherString) 두 개의 String을 사전적으로 비교하는 함수다. 내부적으로 this.charAt(k) - anotherString.charAt(k) String을 구성하는 char의 유니코드 값으로 비교를 한다. this.length()-anotherString.length() 각 String의 각 char index의 값이 모두 동일하면, 길이가 더 짧은 스트링이 사전적으로 앞선다. 사용법 int returnVal =...","categories": ["Java"],
        "tags": ["java"],
        "url": "http://localhost:4000/java/java-api-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 이론",
        "excerpt":"(코딩인터뷰 완전분석) 책의 ‘시스템 설계 및 규모 확장성’ 파트를 정리한 글입니다. 이런 류의 질문에는 실제로 어떻게 행동할 것인지를 답하면 됩니다. 문제를 다루는 방법 면접관과 소통하기 처음에는 포괄적으로 접근하기 화이트보드에 제안하는 설계를 그리며 설명하기 면접관이 짚은 문제점을 인정하고 적절히 수정하기 가정을 할 때 주의하기 가정을 할 때 그것을 면접관에게 알리기 필요하다면...","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 문제 1 - 중복 URL",
        "excerpt":"코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트 Q. 중복 URL : 100억 개의 URL이 있다. 중복된 문서를 찾으려면 어떻게 해야 하는가? 여기서 ‘중복’이란 ‘같은 URL’이라는 뜻이다. 내풀이 만약 100억 개의 URL을 저장할 수 있는 충분한 공간이 있다면, 리스트를 정렬한 후 중복된 값...","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview-question-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 문제 2 - 소셜네트워크",
        "excerpt":"코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트 Q. 소셜 네트워크 : 페이스북이나 링크드인과 같은 대규모 소셜 네트워크를 위한 자료구조는 어떻게 설계하겠는가? 두 사람 사이의 최단 경로를 보여주는 알고리즘은 어떻게 설계하겠는가? (가령, 나-&gt;밥-&gt;수잔-&gt;제이슨-&gt;당신) 내풀이 ‘나’를 기준으로 ‘나’의 친구들을 연결할 필요가 있고, ‘친구’의 친구들을...","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview-question-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 문제 3 - 웹 크롤러",
        "excerpt":"코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트 Q. 웹 크롤러 : 웹에 있는 데이터를 긁어 오는 크롤러를 설계할 때, 무한루프에 빠지는 일을 방지하려면 어떻게 해야 하는가? 무한루프는 어떻게 발생하는가? 단순히 웹의 링크에 의해 만들어지는 그래프로 볼 경후, 사이클이 존재하면 무한루프가 발생할 수...","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview-question-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 문제 4 - 캐시",
        "excerpt":"코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트 Q. 캐시 : 간단한 검색 엔진으로 구현된 웹 서버를 생각해보자. 이 시스템에선 100개의 컴퓨터가 검색 요청을 처리하는 역할을 하고 있다. 예를 들어 하나의 컴퓨터 집단에 processSearch(string query)라는 요청을 보내면 그에 상응하는 검색 결과를 반환해 준다....","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview-question-4/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 시스템 설계 및 규모 확장성 문제 5 - 판매순위",
        "excerpt":"코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트 Q. 판매순위 : 한 전자상거래 회사는 가장 잘 팔리는 제품의 리스트(전체에서 그리고 각 목록별로)를 알고 싶어 한다. 예를 들어, 어떤 제품은 전체 제품 중에서 1,506번째로 잘 팔리지만 운동 장비 중에서는 13번째로 잘 팔리고, 안전용품 중에서는...","categories": ["codinginterview"],
        "tags": [],
        "url": "http://localhost:4000/codinginterview/coding-interview-question-5/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "JVM 메모리 구조",
        "excerpt":"예전 면접에서 JVM 메모리 구조에 관한 질문을 받은 적이 있었다… 횡설수설하며 대답하긴 했지만 좀 더 깔끔한 답변을 위해 정리해야할 필요성을 느꼈다..!!! 우선, JVM이 뭘까? JVM(Java Virtual Machine) 은 자바로 작성된 애플리케이션을 실행하기 위해서 반드시 필요한 가상머신이다! 위 그림을 보면 일반 애플리케이션 코드는 OS만 거치고 하드웨어로 전달되지만 자바 애플리케이션은 JVM을 한번...","categories": ["Java"],
        "tags": ["java"],
        "url": "http://localhost:4000/java/java-jvm-memory/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "Java Comparator과 Comparable",
        "excerpt":"PS 문제를 풀다가 Arrays.sort()와 Collections.sort()를 오름차순(디폴트)이 아닌 다른 기준으로 정렬하고 싶을 때가 있었다. 찾아보니 Comparator 또는 Comparable을 사용하면 된다고 한다. 음.. 알아본 김에 잊어버리지않게 기록을 해야겠다! 컬렉션을 입맛대로 정렬하고 싶다면? 내맘대로 컬렉션의 정렬 기준을 정하고 싶다면 Comparator과 Comparable 인터페이스를 사용하면 된다. import java.util.Comparator; public interface Comparator { int compare(Object o1,...","categories": ["Java"],
        "tags": ["java"],
        "url": "http://localhost:4000/java/java-compare/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "electron과 vue로 데스크탑 앱 만들기",
        "excerpt":"간단한 타이머 기능이 있는 데스크탑 앱을 만들고 싶어서 방법을 찾던 중 electron을 통해 웹 개발하는 것처럼 데스크탑 앱을 만들 수 있다는 것을 알게 되었다.  ","categories": ["javascript"],
        "tags": ["electron"],
        "url": "http://localhost:4000/javascript/electron-vue/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "네트워크 구조",
        "excerpt":"TCP/IP 4계층 모델을 낱낱이 파헤쳐봅시다..! 애플리케이션(응용) 계층 애플리케이션 계층의 HTTP 프로토콜에 잠시 집중해보자. 우리가 브라우저에 URL을 입력하면 웹 서버가 HTML 파일을 반환하며 응답을 한다. 이 과정에서 HTTP 프로토콜을 사용하는 데 클라이언트 클라이언트 프로세스와 웹서버의 httpd 간의 통신이 필요한 애플리케이션이 사용하는 프로토콜을 모두 애플리케이션 계층 프로토콜이라 부른다. 애플리케이션 계층 프로토콜은 자신이...","categories": ["network"],
        "tags": ["osi"],
        "url": "http://localhost:4000/network/network-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프론트엔드 개발자가 되자!",
        "excerpt":"직장 생활 중, 자바스크립트에 대한 관심이 급 폭발해서 개념서도 보고 Vue.js도 건드려보고 Node.js도 건드려봤다. 너무나 재밌어서 아. 나는 프론트엔드 개발자가 되어야지 라는 생각을 하며 아무 준비없이 퇴사를 해버렸다. 퇴사 후, 그래도 공고가 많은 자바를 공부해야겠지? 라는 생각에 안드로이드도 건드려보고 스프링도 건드려보고 했다. 결국 지금은 각 분야에 깊이는 없는.. 수준이란 걸...","categories": ["frontend"],
        "tags": [],
        "url": "http://localhost:4000/frontend/front/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 모의고사 Javascript",
        "excerpt":"문제 설명 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다. 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, … 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5,...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 조이스틱 Javascript",
        "excerpt":"문제 설명 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다. ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA 조이스틱을 각 방향으로 움직이면 아래와 같습니다. ▲ - 다음 알파벳 ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로) ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 [3차] n진수게임 Javascript",
        "excerpt":"문제 설명 튜브가 활동하는 코딩 동아리에서는 전통적으로 해오는 게임이 있다. 이 게임은 여러 사람이 둥글게 앉아서 숫자를 하나씩 차례대로 말하는 게임인데, 규칙은 다음과 같다. 숫자를 0부터 시작해서 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, … 열 번째 사람은 9를 말한다. 10 이상의 숫자부터는 한 자리씩 끊어서 말한다....","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 2xn 타일링 Javascript",
        "excerpt":"문제 설명 가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다. 이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다. 타일을 채울 때는 다음과 같이 2가지 방법이 있습니다. 타일을 가로로 배치 하는 경우 타일을 세로로 배치 하는 경우 직사각형의 가로의 길이 n이 매개변수로 주어질 때,...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-4/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 2016년 Javascript",
        "excerpt":"문제 설명 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요. 제한 조건 2016년은 윤년입니다. 2016년 a월 b일은 실제로...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-5/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 다음 큰 숫자 Javascript",
        "excerpt":"문제 설명 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다. 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다. 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다. *조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-6/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(수학1) 설탕배달 - 백준 Java",
        "excerpt":"문제 설명 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다. 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 5킬로그램...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-7/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(수학1) 벌집 - 백준 Java",
        "excerpt":"문제 설명 (https://www.acmicpc.net/problem/2292)[https://www.acmicpc.net/problem/2292] 내 풀이 규칙을 찾아보았다. 1 (1개) =&gt; 1칸 2 ~ 7 (6개) =&gt; 2칸 8 ~ 19 (12개) =&gt; 3칸 20 ~ 37 (18개) =&gt; 4칸 즉, 방의 수를 1부터 6*count(1,2,3..) 값을 누적시켰을 때 방의 수가 N보다 크거나 같아지는 순간이 답이 된다. import java.util.Scanner; public class Main...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-8/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "자바스크립트의 실행 컨텍스트",
        "excerpt":"인사이드 자바스크립트를 정리하며 작성한 포스팅입니다. 이 포스팅은 실행 컨텍스트의 개념과 생성 과정에 대해 정리한 내용이며 실행 컨텍스트 이해를 위한 필수 개념인 스코프 체인과 this 바인딩에 대해서는 추후 정리할 예정입니다. 실행 컨텍스트란? 콜 스택에 쌓이는 각각의 정보들이 하나의 실행 컨텍스트라고 생각하며 아래의 문구를 읽어보자. ECMAScript는 실행 가능한 코드를 형상화하고 구분하는 추상적인...","categories": ["javascript"],
        "tags": [],
        "url": "http://localhost:4000/javascript/javascript/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(수학1) 분수찾기 백준",
        "excerpt":"문제 분수찾기 내 풀이 자세히 살펴보면 다음과 같은 규칙이 있다. 1/1 =&gt; 1 layer (이 라인에서 제일 큰 번호 : 1) 1/2 2/1 =&gt; 2 layer (이 라인에서 제일 큰 번호 : 3) 3/1 2/2 1/3 =&gt; 3 layer (이 라인에서 제일 큰 번호 : 6) 1/4 2/3 3/2 4/1...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-10/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(수학1) 달팽이는 올라가고 싶다 2869 - 백준 java",
        "excerpt":"문제 달팽이는 올라가고 싶다 내 풀이 하루에 a 만큼 올라가고 b 만큼 내려오므로 하루에 a-b 만큼 막대기에 올라가는 거와 같다. 정상에 도착하면 내려가지않으므로 c-a를 한다. (c-a) / (a-b) 의 값을 올림한 것이 소요된 일 수 이며 c-a를 했으므로 구한 값에 1을 더하면 된다. import java.util.Scanner; public class P2869 { public...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-11/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 기지국 설치 javascript",
        "excerpt":"문제 프로그래머스 기지국 설치 아파트의 개수 N, 현재 기지국이 설치된 아파트의 번호가 담긴 1차원 배열 stations, 전파의 도달 거리 W가 매개변수로 주어질 때, 모든 아파트에 전파를 전달하기 위해 증설해야 할 기지국 개수의 최솟값을 리턴하는 solution 함수를 완성하는 문제다. 내 풀이 떠올린 아이디어는 현재 설치된 기지국의 영향이 끼치는 곳에서 범위를 잘라주는...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-9/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(코딩인터뷰) 연결리스트 면접 문제",
        "excerpt":"코딩 인터뷰 완전분석 연결리스트 파트 예제 문제 풀이 배열 Random access 배열의 엘리먼트들은 메모리에 연속적으로 저장되므로 어떤 엘리먼트도 첫번째 엘리먼트의 주소에 각 엘리먼트 크기를 더해서 접근할 수 있다. 각 엘리먼트가 4byte고 세번째 엘리먼트 접근하려면 첫번째 주소 + 4*3 이다. 즉, 첫번째 탐색이나 마지막 엘리먼트 탐색 시간 차이가 없다. 탐색 시간...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/coding-interview-linkedlist-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "ES6를 모르면 React 배우기가 어려워요.",
        "excerpt":"React를 배워볼까? 하고 두근거리는 마음으로 React 공식 문서에 방문해서 자습서부터 차근차근 읽어본 적이 있습니다. 그런데, 으잉? 이건 대체 뭐지? 제게 커다란 장벽이 나타났습니다. 그 것은 바로 바로… ES6 문법!!! 그래서 준비했습니다. “ES6를 모르면 React 배우기가 어려워요!” 지금부터 저와 함께 ES6 최신 문법을 정리해봅시다! 변수 선언하기 1. const 블록(중괄호 {}) 유효...","categories": ["javascript"],
        "tags": ["es6","react"],
        "url": "http://localhost:4000/javascript/javascript-es6/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 서론 - 운영체제의 정의와 역할",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 오늘은 운영체제의 정의와 역할에 대해 공부했습니다. # 운영체제가 없는 컴퓨터의 전원을 키면 어떤 일이 일어날까?? 운영체제가 하는 일을 알면 운영체제가 없는 PC에서 어떤 일이 일어나는 지 알 수 있다. 결론부터 말하자면, 컴퓨터는 한 마디로 야.생.마. 가 되어 제어할 수 없게 된다. 아래에서 운영체제의 역할을...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제의 역사 - 일괄처리부터 시분할시스템까지 운영체제 변천의 역사",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 일괄처리부터 시분할시스템까지 운영체제 변천의 역사에 대해 공부했습니다. # Batch processing system(일괄처리) 최초의 운영체제로 과거 오퍼레이터가 했던 일련의 작업들을 메모리에 상주시켜 일괄처리한다. 메모리에 상주시킨 작은 프로그램을 레지던트 모니터(resident monitor)라고 한다. # Multiprogramming system(다중프로그래밍) 멀티프로그래밍 시스템 등장 배경은?? 배치 프로세싱 시스템은 메모리에 운영체제와 하나의 사용자 프로그램(컴파일러,...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - 인터럽트 기반 운영체제",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 인터럽트 기반 운영체제에 대해 공부했습니다. # 인터럽트 기반 시스템(Interrupt-Based System) 현대 운영체제는 인터럽트 기반 시스템이다. 전원을 키면? 메인메모리가 비워져 있는 상태에서 CPU가 ROM의 부트로더를 실행하면 하드디스크의 운영체제가 메인 메모리에 올라가게 된다. 운영체제가 메인 메모리에 올라간 것을 부팅이라고 부른다. 부팅 끝난 후 운영체제의 상태는? 부팅이...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - 이중모드, 하드웨어 보호",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 사용자 모드와 관리자 모드, 하드웨어 보호에 대해 공부했습니다. # 이중모드(Dual Mode) 이중모드의 등장 배경은? 하나의 서버 컴퓨터를 여러 사람이 동시에 사용하는 또는 한 사람이 여러 개의 프로그램을 동시에 사용하는 환경에서 한 사람의 고의/실수 프로그램은 전체에 영향을 끼치게 된다. 예를 들어, 한 사용자 프로그램에서 STOP,...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-4/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - 운영체제 주요 서비스 간략하게!",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 운영체제의 주요 서비스: 프로세스, 메모리, 파일관리, 시스템 호출 개론에 대해 공부했습니다. # 운영체제의 주요 서비스 프로세스 관리 주 기억장치 관리(메인 메모리 관리) 파일 관리(하드디스크의 파일) 보조기억장치 관리 입출력 장치 관리(프린트, 키보드, 마우스..) 네트워킹 보호 기타.. 프로세스 관리 메인 메모리에서 실행 중인 프로그램을 프로세스라고 한다....","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-5/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - 프로세스 관리",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 프로세스의 정의, CPU 스케쥴러, 멀티프로그래밍에 대해 공부했습니다. # 프로세스 프로그램 vs 프로세스 Process = task = job 게임 프로그램이 하드디스크에 있으면 아무 것도 할 수 없다. 게임을 하기 위해 더블 클릭하면 게임 프로그램이 메인 메모리에 올라와서 실행 된다. 이렇게 실행 중인 프로그램을 프로세스라고 한다...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-6/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - CPU Scheduling",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. CPU 스케줄링 용어 및 척도, 알고리즘에 대해 공부했습니다. # CPU 스케줄링 관련 용어 정리 Preemptive(선점) vs Non-preemptive(비선점) Preemptive(선점)은 I/O 인터럽트, 프로세스 실행 완료의 경우가 아님에도 CPU 서비스를 받고 있는 프로세스를 강제로 쫒아내 다른 프로세스를 실행하는 것을 말한다. 예) 응급실에서 응급 환자를 우선 치료하는 것...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-7/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "운영체제 - 프로세스 생성과 종료 및 쓰레드",
        "excerpt":"경성대학교 양희재 교수님 강의를 듣고 정리했습니다. 프로세스 생성과 종료 및 쓰레드에 대해 공부했습니다. # Process Creation(프로세스 생성) 프로세스는 프로세스에 의해 만들어진다! 부팅 후 OS가 프로세스를 만들면 그 프로세스에 자식 프로세스가 만들어지고 또 자식의 자식 프로세스가 만들어진다. 부모 프로세스(Parent process) 자식 프로세스(Child process) 형제 프로세스(Sibling process) : 부모가 같은 프로세스 프로세스...","categories": ["operating-system"],
        "tags": ["os"],
        "url": "http://localhost:4000/operating-system/operating-system-8/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "프로그래머스 - lv3 네트워크, lv2 짝지어 제거하기",
        "excerpt":"# LV3 네트워크 각 행을 순회해서 컬럼 값이 1일 때, 해당 col을 row로 하여 또 순회하는 식으로 해결했다. function solution(n, computers) { var answer = 0; var arr = []; arr = computers.reduce((acc, cur) =&gt; { acc.push(cur.includes(1)); return acc; }, []); for (let i=0; i&lt;n; i++) { if (arr[i]) {...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4000/algorithm/algorithm-12/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"}]
