---
layout: post-content
title: 안드로이드 MVVM에 대해 알아보자
date: 2019-01-07
tags: [android, mvvm]
---

Coding in Flow의  Room + ViewModel + LiveData + RecyclerView (MVVM) 튜토리얼을 정리했습니다.

---

# 파일 구성
* MainActivity.java
* Note.java
* NoteAdapter.java
* NoteDao.interface
* NoteDatabase.java
* NoteRepository.java
* NoteViewModel.java


# MainActivity.java
앱의 시작점으로 RecyclerView 설정 및 ViewModel 생성하는 부분이다.

## 1. 리사이클러뷰 구현
```java
RecyclerView recyclerView = findViewById(R.id.recycler_view);
recyclerView.setLayoutManager(new LinearLayoutManager(this));   // 1)
recyclerView.setHasFixedSize(true); // 2)

final NoteAdapter adapter = new NoteAdapter();  // 3)
recyclerView.setAdapter(adapter);   // 3-1)
```
1) LayoutManager 클래스, 아이템을 어떻게 배치할 것인가를 결정한다.    
<span class="clr-grey">LinearLayoutManager 클래스 : 가로/세로 형태로 아이템을 배열한다.</span>

2) 각 아이템의 변화가 리사이클러 뷰의 전체 크기에 영향을 끼치지 않는다면 true를 사용한다.

3) 데이터를 리사이클러뷰에 연결해 줄 어댑터 객체 생성

3-1) 3)에서 생성한 어댑터 객체를 리사이클러뷰에 붙인다.


<span id="viewModel"></span>
## 2. ViewModel과 LiveData
[뷰모델 개념 익히러가기](/android-viewModel/).

```java
noteViewModel = ViewModelProviders.of(this).get(NoteViewModel.class);
```
**ViewModel 객체 요청**    
보통 ViewModel 생성 요청은 <code class="codetainer">onCreate()</code> 메서드에서 이루어지며, **ViewModelProvider 클래스**를 통해서 ViewModel 객체를 생성한다. 
ViewModelProviders 클래스의 <code class="codetainer">of(this)</code> 를 통해 this(UI 컨트롤러) 스코프를 가진 ViewModelProvider 인스턴스가 반환된다. 
리턴된 ViewModelProvider 객체의 메서드 <code class="codetainer">get(NoteViewModel.class)</code> 를 통해 NoteViewModel 인스턴스가 생성된다.   
 
<span class="clr-grey">**NOTE:** get()은 이미 ViewModel 객체가 생성되었을 경우, 그 객체를 리턴한다. </span> 

<span id="LiveData"></span>
**LiveData 사용**    
[LiveData 개념 익히러가기](/android-LiveData/).    

noteViewModel.java
```java
public class NoteViewModel extends AndroidViewModel {
    // ...생략
    private LiveData<List<Note>> allNotes;

    public NoteViewModel(@NonNull Application application) {
        super(application);
        repository = new NoteRepository(application);
        allNotes = repository.getAllNotes();
    }

    // ...생략
    public LiveData<List<Note>> getAllNotes() {
        return allNotes;
    }
}
```
LiveData는 보통 ViewModel 내에서 함께 쓰인다.


MainActivity.java
```java
noteViewModel.getAllNotes().observe(this, new Observer<List<Note>>() {  // 1) LifeCycleOwner, Observer
    @Override
    public void onChanged(@Nullable List<Note> notes) { // 2)
        // update RecyclerView
        // Toast.makeText(MainActivity.this, "onchanged", Toast.LENGTH_SHORT).show();
        adapter.setNotes(notes);
    }
});
```
1) <code class="codetainer">noteViewModel.getAllNotes()</code>를 통해 LiveData를 리턴받고 <code class="codetainer">observe()</code> 메서드를 통해 Observer를 붙여 감지를 시작한다.
<span class="clr-grey">보통 Observer는 프래그먼트나 액티비티 같은 UI 컨트롤러에서 만든다.</span>    
<span class="clr-note">LiveData의 data가 변경될 때 LifeCycleOwner가 활성화 되어있는 한 등록된 모든 Observer들 에게 이벤트를 보낸다.</span>

2) Observer는 <code class="codetainer">onChanged()</code> 메서드를 반드시 오버라이드해야하며, <code class="codetainer">onChanged()</code> 메서드에서 UI 업데이트를 한다.






