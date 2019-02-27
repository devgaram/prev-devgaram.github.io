var store = [{
        "title": "(JS) call()과 apply()",
        "excerpt":"call() 과 apply() 메서드를 이용하여 명시적으로 this에 바인딩할 수 있습니다. 모든 함수의 부모 객체인 Function.prototype 객체의 메서드라서 모든 함수에서 호출 가능합니다. Function.prototype.apply() fun.apply(thisArg, [argArray]) fun 메서드를 호출할 때, fun 내부의 this를 매개변수인 thisArg로 바인딩 시킵니다. argArray는 fun 메서드에서 인자로 사용됩니다. argArray : 배열리터럴, Array 객체 Function.prototype.call() fun.call(thisArg[,arg1[,arg2[,....]]]) apply와 기능이 같으며,...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-callapply/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문1",
        "excerpt":"생활코딩 URL : https://opentutorials.org/course/743 생활코딩 강의에서 기억하고 싶었던 내용을 포스팅해보았다. 변수의 효용을 이해하자. 필요에 의해서 변할 수 있는 영역과 변하지 않는 영역을 구분해서 코딩해야한다. 재활용 가능해진다. 유지보수 용이해진다. 비교 alert( 1 === \"1\"); //false 데이터타입[형식]도 동일해야함.**이걸쓰자! alert( 1 == \"1\"); //true 버그발생 가능성 높음.. var a; alert(a); //undefined 값이 정의되지...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문2",
        "excerpt":"생활코딩 URL https://opentutorials.org/course/743/ 반복문, 함수 정의방법, 배열, 객체 반복문 for( var i=0; i&lt;10; i++){ if( i === 5) break; // 그 즉시, for문 중단 - coding1~4 까지만 출력됨 if( i === 5) continue; // 실행을 중단하고 반복문 이어서 함. - coding1~4/6~9까지 출력됨. document.write(\"coding\"+i+\"\"); } 함수 정의 방법 // [첫번째 방법]...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) Javascript 입문3",
        "excerpt":"생활코딩 javscript 과정 중 정규표현식 내용을 정리했습니다. 정규표현식(Regular Expression) 문자열에서 특정 문자를 찾을 때 사용 .. * 나중에 생활코딩 정규표현식 강의도 듣기!! &amp; 전화번호 때 사용했던 경험 넣기 컴파일 -&gt; 실행 단계로 이뤄진다. 컴파일 : 찾고 싶은 패턴을 만듬. 실행 : 문자열에서 패턴을 추출. 정규표현식 객체를 만드는 방법 1) var...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향1",
        "excerpt":"생활코딩 함수지향 파트 중 변수의 유효범위에 대한 내용을 정리했습니다. 변수의 유효범위 예제1) 지역변수와 전역변수의 구분1 var vscope = 'global'; //전역변수 function fscope(){ alert(vscope); } fscope(); //global Note: 전역변수 : 애플리케이션 전역에서 접근 가능한 변수 Note: 지역변수 : 함수 내에서만 접근 가능한 변수 *변수에 접근할 때, 지역변수를 우선적으로 찾는다. &lt;/br&gt; 예제2)...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-function-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향2",
        "excerpt":"생활코딩 함수지향 파트 중 값으로서의 함수와 콜백에 대한 내용을 정리했습니다. 1. 값으로서 함수 예제1) 자바스크립트에서는 함수도 객체이며, 함수도 값이 될 수 있다. function a(){} //함수는 a라는 변수에 담겨진 값. var a = function(){} 예제2) 함수는 객체 안에 저장될 수 있다. a = { b : function(){ } } b는 key,...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-function-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향3",
        "excerpt":"생활코딩 함수지향 파트 중 클로저에 대한 내용을 정리했습니다. 1. 클로저의 개념 function outter() { var title = 'coding everybody'; return function(){ alert(title); } } inner = outter(); inner(); 함수 outter의 리턴 값은 내부함수이며 변수 inner에 내부함수가 값으로 저장된다. outter 호출이 종료된 순간, outter는 사라진다. 하지만, inner()를 실행했을 때 알럿창에 coding...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-function-3/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 함수지향4",
        "excerpt":"생활코딩 함수지향 파트 중 arguments와 apply()에 대한 내용을 정리했습니다. 1. arguments function sum(){ var i, _sum = 0; for( i=0; i&lt; arguments.length; i++){ document.write(i + \":\" + arguments[i] + &lt;'br/&gt;'); _sum += arguments[i]; } return _sum; } document.write('result : ' + sum(1,2,3,4)); arguments는 사용자가 전달한 인자들이 담겨있는 객체다. .length를 통해...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-function-4/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 객체지향1",
        "excerpt":"생활코딩 객체지향에 대한 내용을 정리했습니다. 객체(object)는 연관되어 있는 것(변수, 메소드)들을 그룹화한 것, 각 그룹화된 것은 독립성을 가지는 부품이 된다. 1. 객체의 생성 방법 this는 함수가 속해있는 객체인 person을 가리킨다. var person = {}; person.name = 'egoing'; person.introduce = function(){ return 'My name is' + this.name; } document.write( person.introduce()); var person...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-object-1/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(생활코딩) javascript 객체지향2",
        "excerpt":"생활코딩 객체지향 파트 중 상속과 프로토타입에 대한 내용을 정리했습니다. 1. 상속 상속을 하기 위한 준비 작업 function Person(name){ this.name = name; } Person.prototype.name = null; Person.prototype.introduce = function(){ return 'My name is' + this.name; } var p1 = new Person('egoing'); document.write(p1.introduce()); //My name is egoing 객체의 프로퍼티 정의 방법은 생성자를...","categories": ["자바스크립트"],
        "tags": ["javascript"],
        "url": "http://localhost:4000/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/javascript-opentutorials-object-2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(mocha) 자바스크립트 단위테스트 시작하기",
        "excerpt":"mocha 자바스크립트 테스트 프레임워크로 단위테스트 시작하는 방법입니다. 단위테스트(Unit Test)가 필요한 이유? 프로그램을 작은 단위로 쪼개서 내가 짠 프로그램이 내가 원하는 결과대로 동작하는 지 테스트할 수 있다. 단위테스트를 거치면 프로그램의 안정성이 높아지며, 단위테스트를 믿고 리팩토링을 할 수 있다. 자바스크립트로 짜여진 프로그램에서 오류를 찾을 때, 단위테스트를 거치지 않은 프로그램의 경우는 전체 흐름을...","categories": ["TDD"],
        "tags": ["mocha","javascript"],
        "url": "http://localhost:4000/tdd/mocha-unittest/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "Vue2 65분만에 배우기!",
        "excerpt":"유튜브 영상 The Vue Tutorial for 2018 - Learn Vue 2 in 65 Minutes 중 몰랐던 내용 정리한 글입니다. 1. Vue-CLI 설치하기 Vue-CLI를 통해 Vue 프로젝트를 빠르고 쉽게 생성할 수 있다. &gt; mkdir vue-toy &gt; cd vue-toy &gt; npm install -g @vue/cli -- Vue-CLI 설치 &gt; vue create vue-voca --...","categories": ["Frontend"],
        "tags": ["vuejs"],
        "url": "http://localhost:4000/frontend/vue2/",
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
        "excerpt":"안드로이드 학습을 시작하기 전에 간단히 자바 기본 개념을 정리했습니다. 안드로이드 기초 안드로이드 4대 구성요소 액티비티 화면 하나당 하나의 액티비티 가짐. 여러개의 액티비티 중 하나가 메인 액티비티가 되며 manifest에 정의된다. 리시버 전화&amp;문자 수신, 배터리 부족 등의 브로드캐스트를 수신하는 객체 프로바이더 데이터베이스나 파일 등의 정보를 외부의 앱에 공개하기 위한 객체. ContentProvider 클래스를...","categories": ["안드로이드"],
        "tags": ["android"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-base/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) 어댑터뷰를 사용해보자",
        "excerpt":"[될때까지 안드로이드] 어댑터뷰 파트의 내용을 정리한 글입니다. ListView 와 GridView 반복되고 양이 많은 데이터를 표시하고 싶을 때 이미지와 같이 메모리를 차지하는 리소스를 표시하고 싶을 때 모두 AdapterView 추상클래스를 상속받아 어댑터 패턴을 사용하여 데이터를 뷰에 표시한다. ScrollView의 경우 한번에 모든 컨텐츠를 로드하므로 컨텐츠가 메모리를 많이 사용할 경우 메모리 부족으로 앱이 종료될...","categories": ["안드로이드"],
        "tags": ["android"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-adapter/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) RecyclerView를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 RecyclerView 파트를 정리한 내용입니다. 어댑터 뷰의 성능을 개선한 컴포넌트로 애니메이션을 지원하고 뷰홀더 패턴을 강제한다. 대신 이벤트 리스너와 커서를 지원하지 않는 단점이 있다. 어댑터 뷰의 단점 빠르게 스크롤 할 때 성능문제와 불필요한 지연 문제가 있다. 데이터 목록이 변경되었을 때, notifyDataSetChanged() 메서드를 빈번하게 호출하여 전체 아이템을 갱신하는 데 비용이...","categories": ["안드로이드"],
        "tags": ["android"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-recycler/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(안드로이드) fragment를 사용하자",
        "excerpt":"[될 때까지 안드로이드]의 fragment 파트를 정리한 내용입니다. 기본 프래그먼트 구현 예제. 다이얼로그 프래그먼트 구현 예제. 콜백 구현 예제. 여러 개의 프래그먼트를 하나의 액티비티에 조합하여 창이 여러 개인 UI를 구축할 때 사용할 수 있다. 하나의 프래그먼트를 여러 액티비티에서 재사용할 수 있으며,동적으로 추가, 삭제, 교체가 쉽다. 프래그먼트는 자체 수명 주기를 가진다. 프래그먼트는...","categories": ["안드로이드"],
        "tags": ["android"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-fragment/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "jekyll의 minimal-mistakes에서 자바스크립트 커스텀하는 방법",
        "excerpt":"minimal-mistakes 테마를 적용한 jekyll 블로그를 커스텀하는 과정에서 자바스크립트 코드를 추가하는 방법입니다. minimal-mistakes 문서에 자바스크립트 커스텀 방법이 잘 정리되어있습니다. 공식문서 바로가기. 우리가 수정해야 할 파일은 /assets/js/ 에 위치한 _main.js 파일입니다. 하지만, jekyll은 _main.js 파일이 아닌 main.min.js 파일을 컴파일하여 화면에 반영합니다. main.min.js 는 _main.js 자바스크립트 코드를 압축화하고 난독화한 파일로 npm 패키지 중...","categories": ["블로그"],
        "tags": ["jekyll","github"],
        "url": "http://localhost:4000/%EB%B8%94%EB%A1%9C%EA%B7%B8/jekyll-js-custom/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 MVVM에 대해 알아보자1",
        "excerpt":"Coding in Flow의 Room + ViewModel + LiveData + RecyclerView (MVVM) 튜토리얼을 정리했습니다. 파일 구성 MainActivity.java Note.java NoteAdapter.java NoteDao.interface NoteDatabase.java NoteRepository.java NoteViewModel.java MVVM - VIEW와 VIEWMODEL MainActivity.class : 앱의 시작점으로 RecyclerView 설정 및 ViewModel 생성하는 부분 NoteViewModel.class : UI 컴포넌트와 UI 데이터의 분리 NoteAdapter.class : 리사이클러뷰 어댑터 NoteRepository.class : 저장소,...","categories": ["안드로이드"],
        "tags": ["android","mvvm"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-mvvm/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 ViewModel에 대해 알아보자",
        "excerpt":"안드로이드 아키텍쳐 중 ViewModel 클래스에 대한 내용입니다. 안드로이드 프레임워크는 액티비티와 프래그먼트와 같은 UI 컨트롤러의 라이프 사이클을 관리한다. [ UI 컨트롤러 라이프 사이클과 ViewModel 스코프] 아래와 같은 구성 변경 발생 시, 안드로이드는 UI 컨트롤러를 종료하거나 재생성한다. 런타임에 화면 방향이 전환되는 경우 언어, 글꼴 배율과 같은 기기 구성이 변경되는 경우 이 때...","categories": ["안드로이드"],
        "tags": ["android","viewmodel","mvvm"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-viewModel/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 MVVM에 대해 알아보자2 - 추가/수정/삭제",
        "excerpt":"Coding in Flow의  Room + ViewModel + LiveData + RecyclerView (MVVM) 튜토리얼 중 추가/수정/삭제 부분을 정리했습니다.     안드로이드 MVVM에 대해 알아보자1.에 이어지는 내용으로 노트 추가/수정/삭제를 다룬다.   노트 추가해보자.   ","categories": ["안드로이드"],
        "tags": ["android","mvvm"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-mvvm-part2/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드 LiveData 대해 알아보자",
        "excerpt":"LiveData 클래스를 통해 데이터 변경을 감지해보자. 안드로이드 개발문서-LiveData. LiveData는 LifecycleOwner의 라이프사이클을 알고있다. LiveData 객체는 observe() 메서드를 통해 LifecycleOwner와 Observer객체를 페어로 등록한다. Observer 객체는 페어인 LifecycleOwner가 활성상태(STARTED 또는 RESUMED)일 때, 데이터 변화을 관측할 수 있다. 반대로, LiveData 객체는 LifecycleOwner가 비활성 상태면 LiveData의 변화를 Observer에게 전달하지 않으며, LifecycleOwner가 DESTROYED 상태라면 자동으로 제거된다....","categories": ["안드로이드"],
        "tags": ["android","livedata","mvvm"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-LiveData/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "(Drawable 리소스) LayerDrawable과 ShapeDrawable을 이용해 둥근모서리와 그림자 있는 배경 만들기.",
        "excerpt":"LayerDrawable과 ShapeDrawable을 이용해 둥근모서리+그림자+투명배경이 있는 디자인을 다른 XML 리소스의 background로 적용하는 방법입니다. 안드로이드 개발문서-Drawable 바로가기 드로어블(Drawable) 리소스 앱 화면에 그리고 싶은 것을 XML 파일로 미리 정의할 수 있으며, getDrawable(int)와 같은 API를 사용하여 가져오거나 android:drawable 및 android:icon과 같은 속성을 사용하여 다른 XML 리소스에 적용할 수 있다. Example) android:background=”@drawable/custom_layer_resource” LayerDrawable 각 &lt;item&gt;...","categories": ["안드로이드"],
        "tags": ["android","resource"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-drawable/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"},{
        "title": "안드로이드에서 이미지 애니메이션 구현 방법",
        "excerpt":"이미지 애니메이션 구현 방법에는 다음과 같이 1)Animation Drawable과 2)Animated vector Drawable 두가지 옵션이 있다. 안드로이드 개발문서-Animate drwable graphics 바로가기 Icon Animation 참고 문서 Animation Drawable : 몇 개의 정적 drawable 파일들을 순차적으로 보여주는 방식으로 애니메이션을 구현하고 싶을 때(프레임 애니메이션) AnimatedVectorDrawable : 하나의 아이콘이 다른 이미지로 서서히 변화되는(morph) 애니메이션을 구현하고 싶을...","categories": ["안드로이드"],
        "tags": ["android","animation"],
        "url": "http://localhost:4000/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C/android-animate/",
        "teaser":"http://localhost:4000/assets/images/alhambra.jpg"}]
