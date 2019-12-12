---
layout: post-content
title: (코딩인터뷰) 연결리스트 면접 문제
date: 2019-12-12
categories: [algorithm]
---

코딩 인터뷰 예제 문제 풀이

# 2.1 중복 없애기 : 정렬되어 있지 않은 연결리스트가 주어졌을 때 이 리스트에서 중복되는 원소를 제거하는 코드를 작성하자. 임시 버퍼를 사용할 수 없는 경우도 생각해보자.

1. 임시버퍼를 사용할 수 있다면, 중복을 허용하지 않는 Set 컬렉션을 이용해서 해결할 수 있다. 이 경우는 O(N)의 시간 복잡도를 갖는다.
2. 임시버퍼를 사용할 수 없다면, 이중 반복문을 통해 중복 노드를 찾은 후 제거하면 된다. 이 경우는 O(N^2)의 시간 복잡도를 갖는다.

## 자바스크립트 풀이

```javascript

'use strict'

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  display () {
    let cur = this.head;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

function makeList() {
  let n6 = new Node(4);
  let n5 = new Node(5, n6);
  let n4 = new Node(3, n5);
  let n3 = new Node(5, n4);
  let n2 = new Node(4, n3);
  let n1 = new Node(5, n2);
  let list = new LinkedList(n1);
  return list
}

// O(n) n: 연결리스트 길이
function solution() {  
  const list = makeList();
  const set = new Set();
  let cur = list.head;
  let pre = null;
  while (cur != null) {
    if (set.has(cur.data)) {
      pre.next = cur.next;     
    } else {
        set.add(cur.data);
        pre = cur;
    }
    cur = cur.next;
  }
  list.display();
}

// O(N^2) 버퍼 없이
function solution_2() {
  const list = makeList();
  let cur = list.head;

  while (cur != null) {
    let mn = cur;

    while (mn.next != null) {
        if (cur.data === mn.next.data) {
            mn.next = mn.next.next;
        } else {
            mn = mn.next;
        }
    }
    cur = cur.next;
  }

  list.display();   
}

solution();
solution_2();
```

**자바스크립트의 null과 undefined**      
자바스크립트에서 '없음'을 나타내는 값에 null과 undefined가 있다. 값이 대입되지 않은 변수나 속성의 경우는 undefined이며 객체가 없는 경우는 null로 나타낸다.     
자바스크립트의 === 등호는 값이 정확히 같을 때 true를 반환하나 == 등호는 그렇지 않을 때가 많다. 보통의 경우는 === 를 권장하나 null check 할 때는 == 쓰면 값이 null 또는 undefined의 경우 false를 리턴 받을 수 있다.

**자바스크립트의 class**      
ES6의 클래스 선언은 호이스팅이 되지 않아서 클래스를 사용하기 위해서는 클래스를 먼저 선언해야 한다. class body는 {}로 묶여 있는 안쪽 부분으로 constructor(생성자)가 있는 곳이다. 객체를 생성하고 초기화하는 메소드로 클래스 안에 한 개만 존재할 수 있다. 부모 생성자를 호출하기 위해 super 키워드를 사용할 수도 있다.

**자바스크립트에서 오토박싱**      
non-strict 모드에서 this 값이 null 혹은 undefined 일 경우 window 객체로 자동으로 변환을 해주는 것을 오토박싱이라고 한다. 그래서 일반 메서드에서 this 값이 window 객체가 된다. class 문법 안에 있는 코드는 항상 strict mode로 실행되기 때문에 클래스 메서드 호출에서 this의 초기값은 undefined다.

**자바에서 오토박싱**     
자바에는 int, float와 같은 기본형(primitive type)과 Integer, Float와 같은 래퍼 클래스가 있다. 래퍼 클래스는 기본형을 객체로 다루어야 할 경우에 사용할 수 있다. 컬렉션에서 엘리먼트는 객체가 되어야 되서 int 기본형을 사용하지 않고 Integer를 사용하는 것을 본 적이 있을 거다.    박싱은 기본형을 참조형으로 변환하는 것이고 언박싱은 반대로 참조형을 기본형으로 바꾸는 것이다. 예제를 통해 확실히 이해해보자.

```java
int pa = 1;
Integer wa = pa; // 오토박싱

Integer wb = new Integer(2);
int pb = wb; // 오토언박싱

```

## 자바 풀이

**리스트 반복하면서 삭제하기**      
for(;;)를 이용한 방법은 반복 도중 엘리먼트가 삭제되면 반복문의 크기가 변한다. 또한 삭제된 엘리먼트 자리를 채우기 위해 모든 인덱스가 하나씩 이동하게 된다. 생각대로 동작하지 않는 것 당연하다.

for-each문 안에서 엘리먼트를 삭제하게 되면 **java.util.ConcurrentModificationException** 에러를 보게 된다. Iterator로 반복 중인 리스트를 수정하려 하면 이 에러가 발생된다. for-each 문은 내부적으로 iterator를 실행하므로 remove()나 add()를 할 경우 에러가 발생되는 것이다.

그래서 반복을 하면서 삭제를 하려면 Itertor 인터페이스를 사용하거나 Collection 인터페이스의 removeif 메서드를 사용한다.

```java
  public static void main(String[] args) {
		LinkedList<Integer> list = new LinkedList<>(Arrays.asList(5,4,2,3,5,4));
		solution(list);
	}
	
	public static void solution(LinkedList<Integer> list) {
		// 1번 iterator 사용
		HashSet<Integer> set = new HashSet<Integer>();
		Iterator<Integer> it = list.iterator();
		
		while(it.hasNext()) {
			int next = it.next();
			if (set.contains(next)) it.remove();
			else set.add(next);
		}

		// 2번 removeif 사용
		HashSet<Integer> set = new HashSet<Integer>();
		list.removeIf(num -> {
			if (set.contains(num)) return true;
			else {
				set.add(num);
				return false;
			}
		});
	}
```

# 2.2 뒤에서 K번째 원소 구하기: 단방향 연결리스트가 주어졌을 때 뒤에서 K번째 원소를 찾는 알고리즘을 구현하라.

## 내 풀이
리스트의 크기를 구하기 위해 한번 순회한 다음, 리스트 크기에 k만큼 뺀 index까지 반복을 돌려 원소를 찾았다.     
시간 복잡도는 O(N)

```javascript
function solution_2(k) {
  const list = makeList();

  let cur = list.head;
  let len = 0;
  while (cur != null) {
      len++;
      cur = cur.next;
  }

  cur = list.head;
  for (let i=0; i<len-k; i++) {
      cur = cur.next;
  }
  
  if (len-k < 0) return null;
  else return cur.data;
  //console.log(`뒤에서 ${k}번째 원소 값 : ${cur.data}`);
}
```

## 반복문을 한번만 돌릴 수 있다면?
Runner 기법을 사용했다. 연결리스트 문제에서 많이 활용되는 기법으로 순회할 때 두 개의 포인터를 동시에 사용하는 방법이다. 이 때 한 포인트가 다른 포인터보다 앞서도록 하며 앞선 포인터가 따라오는 포인터보다 **항상 지정된 개수만큼** 앞서거나, 따라오는 포인터를 **여러 노드를 한번에 뛰어넘도록** 설정할 수 있다.

시간복잡도는 O(N) 이다.

```javascript
function solution_2_1(k) {
  const list = makeList();
  
  let cur = list.head;
  let runner = cur;
  let len = 0;
  while (cur != null) {
    if (len++ >= k) runner = runner.next;
    cur = cur.next;
  }
  if (len-k < 0) return null;
  else return runner.data;
  // console.log(`뒤에서 ${k}번째 원소 값 : ${runner.data}`);
}
```

# 2.3 중간 노드 삭제: 단방향 연결리스트가 주어졌을 때 중간(정확히 가운데 노드일 필요는 없고 처음과 끝 노드만 아니면 된다)에 있는 노드 하나를 삭제하는 알고리즘을 구현해라. 단, 삭제할 노드에만 접근할 수 있다.

Runner 기법으로 중간 노드를 찾고 찾은 노드의 data와 next 값을 바로 다음 노드의 값으로 바꾼 다음 다음 노드의 next를 찾은 노드의 next로 지정한다.

```javascript
function solution_3() {
  const list = makeList();
  let cur = list.head;
  let runner = list.head;
  let len = 0;
  while (cur != null) {
      cur = cur.next;      
      if ((++len)%2 == 0) runner = runner.next;
  }

  if (runner.next == null) {
    runner.data = null;
  } else {
    runner.data = runner.next.data;
    runner.next = runner.next.next;
  }
  
  list.display();
}
```

# 2.4 분할: 값 x가 주어졌을 때 x보다 작은 노드들을 x보다 크거나 같은 노드들보다 앞에 오도록 하는 코드를 작성하라. 만약 x가 리스트에 있다면 x는 그보다 작은 원소들보다 뒤에 나오기만 하면 된다. 즉, 원소 x는 '오른쪽 그룹' 어딘가에만 존재하면 된다. 왼쪽과 오른쪽 그룹 사이에 있을 필요는 없다.

* 입력: 3->5->8->5->10->2->1 (분할값 x = 5)
* 출력: 3->1->2->10->5->5->8

순회를 하면서 data 값이 x보다 작은 경우에는 무조건 맨 앞으로 이동시키는 식으로 해결했다.

```javascript
function solution_4(x) {
  const list = makeList();
  let cur, pre;
  if (list.head.data < x) {
      cur = list.head.next;
      pre = list.head;
  } else {
      cur = list.head;
      pre = null;
  }

  while (cur != null) {
      if (cur.data < x) {
        pre.next = cur.next;
        cur.next = list.head;
        list.head = cur;
        cur = pre.next;
      } else {
        pre = cur;
        cur = cur.next;
      }    
  }
  
  list.display();
  
}
```

## 그렇다면 원소의 순서를 유지하면서 x보다 작은 노드들을 x의 앞에 위치하게 하고 싶다면?

두 개의 연결리스트를 만들어서 하나는 x보다 작은 노드들을 삽입하고 다른 하나는 x보다 크거나 같은 노드들을 넣는다. 모든 작업이 완료된 후 두 리스트를 합하면 된다.



