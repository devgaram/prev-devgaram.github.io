---
layout: post-content
title: (코딩인터뷰) 시스템 설계 및 규모 확장성 문제 5 - 판매순위
date: 2019-08-31
categories: [codinginterview]
---

코딩 인터뷰 완전분석 (CRACKING THE CODING INTERVIEW 6/E) / 게일 라크만 맥도웰 지음 / 인사이트

---

# Q. 판매순위 : 한 전자상거래 회사는 가장 잘 팔리는 제품의 리스트(전체에서 그리고 각 목록별로)를 알고 싶어 한다. 예를 들어, 어떤 제품은 전체 제품 중에서 1,506번째로 잘 팔리지만 운동 장비 중에서는 13번째로 잘 팔리고, 안전용품 중에서는 24번째로 잘 팔릴 수 있다. 이 시스템을 어떻게 설계할지 설명하라.

## 내풀이
각 제품 정보에 판매수량을 저장을 하고 리스트 조회할 때마다 정렬하는 건 좀 그럴거 같긴한뎁,,
동시에 전체 중 ~위 운동 장비 중 ~위.. 이런식으로 표현하게 되면 정렬을 넘 많이 하게 되는 듯싶은뎅
구입할 때마다 리스트의 맨앞에..?음..
매번 순위 조회할때마다 정렬해야되니깐 이건 좀 별루고
아예 전체 연결리스트를 순서가 유지되게 하는 게 좋을 듯
삽입 삭제가 빈번하니깐 연결리스트가 좋을거같고...

## 책풀이

**1단계 : 문제 범위를 한정하고 합리적인 가정을 하자**

구현하려는 시스템을 다음과 같이 정의했다.

* 잘 팔린다는 것은 판매량이 많다는 것을 의미한다.
* 판매량은 평생/지난달/저번주 판매량인지 명확하게 정의할 것이다. 여기서는 저번주 판매량으로 한정한다.
* 각 제품은 여러 목록에 포함될 수 있고 하위목록 개념은 없다고 가정한다.

다음과 같은 합리적인 가정을 세웠다.

* 통계 결과가 언제나 100% 최신 데이터가 아닐 수 있다고 가정할 것이다.
* 인기 있는 제품의 경우 정확도가 중요하나 인기 없는 제품은 약간의 오차가 있어도 괜찮다.
* 가장 인기 있는 제품의 경우 한 시간마다 갱신이 이루어진다고 가정할 것이다.

**2단계 : 주요 구성요소 그리기**

![1](/assets/images/2019-08-30-img/5-1.jpg)    <br/> 

**3단계 : 핵심문제 파악**

1. 분석은 비용이 비싸다.
2. 데이터베이스에 너무 자주 기록한다.
3. join 비용이 비싸다 

2번 데이터베이스에 너무 자주 기록된다.    
구매할 때마다 판매량 정보 테이블을 업데이트하기보다는 모아서 일괄적(batch)으로 한번에 데이터베이스에 쓰는 방법을 쓴다.    
즉, 곧바로 데이터베이스에 자료를 집어넣기보단, 메모리 내의 캐시와 같은 저장소에 구매 정보와 백업용 로그 파일을 저장해 놓은 뒤 주기적으로 로그/캐시 데이터를 모아서 한 번에 데이터베이스에 넣는 것이다. (특정 시점까지의 자료만 데이터베이스에 넣는 식)

3번 join 비용이 비싸다.     
수천 개의 제품 목록을 제품 ID에 join 하는 작업은 고비용이다.