var store = [{
        "title": "테크블로그에 오신것을 환영합니다.",
        "excerpt":"    한솔   1990.04.09   경력 사항       육군 중위 (2013.03 - 2015.06)      아트라스콥코 (2016.11 - 2020.06)      KSA (OREAN STANDARDS ASSOCIATION) 전문요원      기업출강 및 제휴강의 담당 (삼성전자, SK 하이닉스, 현대자동차, LG전자 등)      외국계 기업 B2B 마케팅 담당      공장 개선 컨설팅 및 스마트팩토리 컨설팅 담당      각종 고객 세미나, 전시회 및 테크 쇼 기획 및 실행 담당      마케팅 캠페인 기획 및 관리 담당      비디오, 리플렛, 카탈로그 등 마케팅 자료 기획 및 제작 담당      기업 및 산업용 공구 사업부 SNS채널 및 뉴스레터 플랫폼 기획 및 관리 담당      KC인증, Cleanroom certification, 안전인증 담당      기술 특허 담당    보유기술       2D, 3D 설계 / 3D Printing      Co-bot operation 및 로봇 제어      PLC      Python      HTML, CSS, JavaScript   ","categories": ["Welcome"],
        "tags": [],
        "url": "http://localhost:4000/welcome/welcome/",
        "teaser": "https://cdn.pixabay.com/photo/2015/05/09/23/46/welcome-sign-760358__480.jpg"
      },{
        "title": "[Python] Idexing, Slicing (str Data Type)",
        "excerpt":"Indexing &amp; Slicing  오늘은 파이썬의 문자열 의 Idexing 과 Slicing을 알아보겠습니다.   Indexing #문자열에 번호에 해당하는 문자를 추출하려면??   python은 배열이 존재 하지 않아요! 하지만 다른언어에서는 - index 사용가능합니다.   그렇다면 파이썬의 문자열에서 번호 혹은 순서에 맞는 문자를 추출하기 위해서는 어떻게 해야할까요 ?   하기 그림은 문자열에 해당되는 번호를 명시한 그림입니다.    \t   그렇다면 그림에 해당하는 번호를 파이썬 코드로 구현해볼까요?   my_var = 'HELLO' print(my_var[1])  #E   Slicing #문자열에 범위를 선정하여 추출하려면??   Slicing은 말 그대로 잘라내다입니다. Indexing과의 차이점은 번호가 아닌 범위로 문자열을 추출이 가능합니다.   하기 예제를 확인하면서 익혀보도록 하겠습니다.   my_var = 'HELLO' print(my_var[0:3]) #HEL print(my_var[0:]) #HELLO print(my_var[0:-1]) #HELL print(my_var[-2:]) #LO print(my_var[:]) # HELLO    오늘은 파이썬의 Indexing과 Slicing에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Text sequence","Data Type","문자열","데이터타입","str","Idexing","Slicing"],
        "url": "http://localhost:4000/python/Idexing-Slicing/",
        "teaser": "https://miro.medium.com/max/2646/1*GokwxHxq5I-Myy3_ummrtw.png"
      },{
        "title": "[Python] In Not in (str Data Type)",
        "excerpt":"In Not In 연산자  오늘은 파이썬의 문자열 의 in 과 not in 연산자에 대하여 키워드를 통하여 알아보도록 하겠습니다.   In, Not in 연산자 #문자나 문자열이 포함되어 있는지 확인하려면 ??   예제를 통하여 다시 한번 정확하게 알아보겠습니다.   myStr = \"This is a sample Test\" print(\"sample\" in myStr) # True / 대소문자 구별 print(\"sample\" not in myStr) #False / 대소문자 구별   즉 sample이라는 문자열이 myStr이라는 변수에 포함되어있는지 안되어 있는지 확인이 가능합니다.   오늘은 파이썬의 in과 not in에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Text sequence","Data Type","문자열","데이터타입","str","In","Not in"],
        "url": "http://localhost:4000/python/In-Not/",
        "teaser": "http://localhost:4000/assets/image/INNOTIN.png"
      },{
        "title": "[Python] Numeric Data Type",
        "excerpt":"Numeric Data Type (숫자형)  오늘은 파이썬의 숫자형 데이터 타입에 대하여 알아보겠습니다.   데이터 숫자는 크게 3가지로 나눌 수가 있습니다!      int(정수)   float(실수)   complex(복소수)   하기 예제를 보면서 파이썬의 특징을 알아보겠습니다.  a = 100 # 정수 b = 3.14159265358979 # 실수 c = 1+ 2j # 복소수 d = 0o34 # 8 진수 e = 0xAB # 16 진수  파이썬이 아닌 다른 프로그램언어를 배우신 분이라면 변수선언을 할때 var같은 선언을 하지않고 간편하게 변수를 선언을 할 수 있습니다.   Type # 데이터 타입에 대하여 알기를 원한다면??  print (type(a)) # class int print (type(b)) # class float print (type(c)) # class complex print (type(d)) # class int print (type(e)) # class int   Python의 연산의 특징에 대하여 알아보아요!  my_result = 3 / 4 # 0이 아니라 0.75  프로그래밍에서는 버림으로 표시 print(my_result) # 0.75   my_result = 10 % 3 #나머지 연산자 print(my_result) # 1  my_result = 10 // 3 #몫 연산자 print(my_result) # 3   오늘은 파이썬의 숫자형 데이터 타입에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Numeric","Data Type","숫자형","데이터타입"],
        "url": "http://localhost:4000/python/Numeric-Data-Type/",
        "teaser": "http://localhost:4000/assets/image/Numeric.png"
      },{
        "title": "Python Page",
        "excerpt":" \t   파이썬 페이지   [Python] 숫자형 데이터 타입   [Python] 문자열   [Python] 문자열 연산   [Python] In Not in   [Python] 문자열 Indexing &amp; Slicing   [Python] Formatting   [Python] List  ","categories": ["Python"],
        "tags": [],
        "url": "http://localhost:4000/python/PythonPage/",
        "teaser": "http://localhost:4000/assets/image/python.jpg"
      },{
        "title": "[Python] Text operation (str Data Type)",
        "excerpt":"문자열의 연산 (문자열, str)  오늘은 파이썬의 문자열 연산에 대하여 알아보겠습니다.   일상생활에서 말을 할때 대부분 단일언어로 대화를 하지않습니다. 문자를 조합하거나 합성해서 문장을 만들어 대화를 합니다.   파이썬의 문자열도 마찬가지로 합치거나 원하는 문자열을 추가를 할 수가 있습니다. 자세한 내용은 하기 예제를 통하여 알아보겠습니다.   first = 'haha' second = 'hoho'  print(first + second) #hahahoho print(first + str(10)) # error 자동으로 숫자를 문자로 변경 X ( Java 에서는 가능 합니다 !) print(first*3) #hahahahahaha   상기의 예제는 문자열을 더하거나 곱하여서 새로운 문자열을 생성하는 것을 보았습니다.   앞으로 프로젝트를 진행하면서 받는 데이터들이 완벽한 문자열 혹은 문자로 받아진다면 저러한 연산은 필요없겠지만 저희가 앞으로 받은 데이터는 예상할 수 없는 데이터이기 때문에 항상 가공을 해야합니다.   문자열의 연산은 앞으로의 프로젝트에서 데이터를 처리하기위한 ‘첫걸음’ 정도로 생각하면 되겠습니다.   오늘은 파이썬의 문자열 연산에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Text sequence","Data Type","문자열","데이터타입","str","operation"],
        "url": "http://localhost:4000/python/Text-operation/",
        "teaser": "http://localhost:4000/assets/image/Text%20Operation.png"
      },{
        "title": "[Python] Text sequence (str Data Type)",
        "excerpt":"Text sequence (문자열, str)  오늘은 파이썬의 문자열 데이터 타입에 대하여 알아보겠습니다.   다른 언어는 문자와 문자열을 구분합니다. 문자는 한글자 예를들어 a 같이 단일 문자로 이뤄진 것을 의미합니다.   문자열은 두글자 이상으로 이루어진 문자열을 의미하며 apple, graph같은 단어를 의미합니다.   다른언어에서는 문자를 표현할때 ' ', 문자열을 표현할때는 \" \" 으로 표현합니다.   파이썬에서는 어떨까요? 하기 예제를 보면서 다른언어와 파이썬의 차이를 살펴보도록 하겠습니다.  a = 'Hello' b = \"K\" c = 'python'  print(a)  # Hello print(b)  # K print(c)  # python   상기 예제를 확인해보면 파이썬에서는 문자와 문자열을 표현할때 ' ' 와 \" \" 을 구분하지않고 사용이 가능합니다.   오늘은 파이썬의 문자열에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Text sequence","Data Type","문자열","데이터타입","str"],
        "url": "http://localhost:4000/python/Text-sequence/",
        "teaser": "http://localhost:4000/assets/image/Text%20Squence.png"
      },{
        "title": "[Python] Formatting",
        "excerpt":"In Not In 연산자  오늘은 파이썬의 문자열 의 Formatting 에 대하여 알아보도록 하겠습니다.   Formatting은 변수의 값을 원하는 곳에 입력하거나 출력이 가능합니다.   예제를 통하여 다시 한번 정확하게 알아보겠습니다.   num_of_apple = 10 myStr = \"나는 사과를 %d개 가지고 있어요!\" % num_of_apple #// %d (숫자) myStr1 = \"나는 사과를 {}, 바나나 {}개 가지고 있어요!\" .format(num_of_apple, 20) myStr2 = \"나는 사과를 {1}, 바나나 {0}개 가지고 있어요!\" .format(num_of_apple, 20) print(myStr) #나는 사과를 10개 가지고 있어요! print(myStr1) #나는 사과를 10, 바나나 20개 가지고 있어요! print(myStr2) # 나는 사과를 20, 바나나 10개 가지고 있어요!   복잡한 문장도 formatting 을 이용하여 원하는 위치에 변수의 값을 입력 및 출력을 할 수 있습니다.   오늘은 파이썬의 formatting 에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Text sequence","Data Type","문자열","데이터타입","str","formatting"],
        "url": "http://localhost:4000/python/Formatting/",
        "teaser": "http://localhost:4000/assets/image/Formatting.png"
      },{
        "title": "[Python] List",
        "excerpt":"List  오늘은 파이썬의 List 에 대하여 알아보도록 하겠습니다.   List는 임의의 객체(데이터)를 순서대로 저장하는 집합 자료형입니다.   List는 literal로 표현할 떄 [ ] 대괄호로 표현합니다.   List는 어떻게 표하는지 아래의 코드를 보며 알아보겠습니다.   my_list = [] print(type(my_list))  # &lt;class ‘list’&gt; my_list = list()      # 함수를 이용하여 리스트를 제작 my_list = [1, 2, 3]   # ~ : code convention _ 가독성이 좋게 표현하게 Hint 기능 제공 my_list = [1, 2, 3.14, \"Hello\", [5, 6, 7], 100] # 중첩리스트, 2차원이 아님    List는 문자열과 마찬가지로 Indexing 과 Slicing 모두 가능합니다. 물론 연산도 가능합니다.   Indexing과 Slicing의 개념이 궁금하신분들은 문자열 Indexing &amp; Slicing 편을 참고하시기 바랍니다.   간단한 예제를 통해서 자세하게 알아보겠습니다.   List의 Indexing 과 Slicing   print(my_list[1]) #2 print(my_list[-2]) #[5, 6, 7] print(my_list[4:5]) #[5, 6, 7] // list의 Slicing 은 list print(my_list[-2][1]) #6 print(my_list[0:2]) #[1, 2]   List의 연산  a = [1, 2, 3] b = [4, 5, 6] print (a + b) # [1, 2, 3, 4, 5, 6] list 의 합은 하나의 리스트로 생성 # 단 행렬에서의 연산은 [5,7,9] numpy에서 사용시 주의 할 것 print (a*3) # [1, 2, 3, 1, 2, 3, 1, 2, 3]  a = [1, 2, 3] a[0] = 5 print(a) # [5, 2, 3]  a[0] = [7, 8, 9] print(a) # [[7, 8, 9], 2, 3]  a[0:1] = [7, 8, 9] print(a) # [7, 8, 9, 2, 3]    list 값 추가 및 변경   List의 경우 값의 추가 및 변경이 가능합니다   # append   a = [1, 2, 3] a.append(4) 끝에 추가하는 것 print(a) #[1, 2, 3, 4] a.append([5, 6, 7]) print(a) #[1, 2, 3, [5, 6, 7]]  # sort   my_list = [\"홍길동\", \"아이유\", \"강감찬\", \"신사임당\", \"Kim\"] result = my_list.sort() # 리스트를 오름차순으로 정렬_ 1 2 3 4 5 print(result) # None    오늘은 파이썬의 List 에 대하여 알아보았습니다.  ","categories": ["Python"],
        "tags": ["Sequence Type","Data Type","List"],
        "url": "http://localhost:4000/python/List/",
        "teaser": "http://localhost:4000/assets/image/List.png"
      },{
        "title": "HTML CSS JAVASCRIPT",
        "excerpt":"    HTML CSS JAVASCRIPT 페이지   [Web Service] 기본이론   [JavaScript] jQuery 활용 1편   [JavaScript] jQuery 활용 2편  ","categories": ["HTML","CSS","JAVASCRIPT"],
        "tags": [],
        "url": "http://localhost:4000/html/css/javascript/Web-CSS-JAVASCRIPT/",
        "teaser": "http://localhost:4000/assets/image/frontend.png"
      },{
        "title": "[HTML, CSS, JS] jQuery 1",
        "excerpt":" jQuery  오늘은 jQuery 를 배워보겠습니다.   jQuery는 JavaScript로 만든 사용하기 편한 무료 라이브러리 입니다.   JavaScript는 특정 browser 제대로 작동하지 않는 경우가 있습니다.   그렇지만 jQuery의 경우 모든 browser 에서 동일하게 작동합니다.    jQuery 사용방법   설치도 가능하지만 CDN방식을 이용하려고 합니다.   CDN(Content Delivery Network) 방식은 네트워크를 통해서 라이브러리를 동적으로 다운로드해서 사용하는 개념입니다.   하기코드는 jQuery사이트에서 직점 복사할 수 있습니다.       &lt;script             src=\"https://code.jquery.com/jquery-2.2.4.min.js\"             integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\"             crossorigin=\"anonymous\"&gt;&lt;/script&gt;    jQuery 첫걸음   그렇다면 jQuery 사용하여 보도록 하겠습니다.   jQuery는 공부할때 가장먼저 배워야하는 것은 바로 Selector 입니다.   하기 예제를 통하여 Selector에 대하여 자세하게 알아보겠습니다.   HTML      &lt;script src=\"js/05_jQuery.js\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt;     &lt;h1&gt;jQuery 연습입니다.!!&lt;/h1&gt;     &lt;div&gt;          &lt;ul&gt;             &lt;!--class는 중복해서 사용가--&gt;             &lt;li class=\"region\"&gt;서울&lt;/li&gt;             &lt;!--ID 는 중복해서 사용 불가능--&gt;             &lt;li id=\"haha\"&gt;인천&lt;/li&gt;             &lt;li class=\"region\"&gt;강원&lt;/li&gt;         &lt;/ul&gt;         &lt;ol&gt;             &lt;li id=\"hong\"&gt;홍길동&lt;/li&gt;             &lt;li&gt;신사임당&lt;/li&gt;             &lt;li&gt;강감찬&lt;/li&gt;         &lt;/ol&gt;     &lt;input type=\"button\" value=\"클릭클릭!\" onclick=\"my_func()\"&gt;     &lt;/div&gt; &lt;/body&gt; &lt;/html&gt;   상기 코드에서 ‘클릭클릭’이라는 버튼을 누르면 my_func()라는 함수가 호출됩니다.   my_func()는 HTML에서 명시한 것 처럼 js/05_jQuery.js 에 위치하고 있습니다.   my_func()를 살펴보도록 하겠습니다.   function my_func() {     alert(\"함수가 호출되요\") // print 기능으로 활용가능합니다!     1. 전체 선택자(universal selector)     $(\"*\").css(\"color\",\"red\") // * 전체선택자     $(\"*\").text() // 태그안에 모든 글자를 가져옵니다     2. 태그 선택자(tag selector)     $(\"li\").remove() // li 테그를 모두 삭제합니다. 인자와 항목까지 전부삭제          3. 아이디 선택자(id selector)  중복하여 사용불가능     $(\"#haha\").text()  // # ID지칭                         // 인자가 없으면 값을 알아오라는 의미, 인자가 있으면 값을 변경     $(\"#haha\").text(\"울산\")          4. 클래스 선택자 (class selector) 중복하여 사용가능     $(\".region\").css(\"background-color\", \"yellow\")          5. 구조 선택자 (자식 선택자 후손 선택자)     $(\"ol &gt; *\").remove() // ol &gt; * ol에 자식으로 있는 것들 중 모든것     $(\"ol &gt; li\").css(\"color\", \"blue\") // ol &gt; * ol에 자식으로 있는 것들중 li      $(\"div li\").css(\"color\", \"pink\")    // div 후손으로 있는 것들 중  li를 모두 선택          6. 구조 선택자 (형제 선택자)     $(\"#haha + li\").css(\"color\", \"pink\")  // id의 형제를 찾고 +를 이용하여 바로 다음 형제를 찾는 것이 가능     $(\"#hong ~ li\").css(\"color\", \"pink\")  //id 이후의 모든 형제를 찾음 (자신제외)          7. 속성 선택자     $(\"[id]\").css(\"color\", \"yellow\")  // id 모든 속성을 전부 찾음     $(\"[class]\").css(\"color\", \"red\")     // class 모든 속성을 전부 찾음          // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능 !!!!   상기 코드에 주석을 처리하여 어떤 element 를 지정하는지 알아보았습니다.  ","categories": ["HTML","CSS","JAVASCRIPT"],
        "tags": ["JQuery"],
        "url": "http://localhost:4000/html/css/javascript/jQuery/",
        "teaser": "http://localhost:4000/assets/image/frontend.png"
      },{
        "title": "[HTML, CSS, JS] jQuery 2",
        "excerpt":" jQuery  오늘은 jQuery 를 배워보겠습니다.   jQuery는 JavaScript로 만든 사용하기 편한 무료 라이브러리 입니다.   JavaScript는 특정 browser 제대로 작동하지 않는 경우가 있습니다.   그렇지만 jQuery의 경우 모든 browser 에서 동일하게 작동합니다.    jQuery 사용방법   설치도 가능하지만 CDN방식을 이용하려고 합니다.   CDN(Content Delivery Network) 방식은 네트워크를 통해서 라이브러리를 동적으로 다운로드해서 사용하는 개념입니다.   하기코드는 jQuery사이트에서 직점 복사할 수 있습니다.       &lt;script             src=\"https://code.jquery.com/jquery-2.2.4.min.js\"             integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\"             crossorigin=\"anonymous\"&gt;&lt;/script&gt;    jQuery 첫걸음   그렇다면 jQuery 사용하여 보도록 하겠습니다.   jQuery는 공부할때 가장먼저 배워야하는 것은 바로 Selector 입니다.   하기 예제를 통하여 Selector에 대하여 자세하게 알아보겠습니다.   HTML      &lt;script src=\"js/05_jQuery.js\"&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt;     &lt;h1&gt;jQuery 연습입니다.!!&lt;/h1&gt;     &lt;div&gt;          &lt;ul&gt;             &lt;!--class는 중복해서 사용가--&gt;             &lt;li class=\"region\"&gt;서울&lt;/li&gt;             &lt;!--ID 는 중복해서 사용 불가능--&gt;             &lt;li id=\"haha\"&gt;인천&lt;/li&gt;             &lt;li class=\"region\"&gt;강원&lt;/li&gt;         &lt;/ul&gt;         &lt;ol&gt;             &lt;li id=\"hong\"&gt;홍길동&lt;/li&gt;             &lt;li&gt;신사임당&lt;/li&gt;             &lt;li&gt;강감찬&lt;/li&gt;         &lt;/ol&gt;     &lt;input type=\"button\" value=\"클릭클릭!\" onclick=\"my_func()\"&gt;     &lt;/div&gt; &lt;/body&gt; &lt;/html&gt;   상기 코드에서 ‘클릭클릭’이라는 버튼을 누르면 my_func()라는 함수가 호출됩니다.   my_func()는 HTML에서 명시한 것 처럼 js/05_jQuery.js 에 위치하고 있습니다.   my_func()를 살펴보도록 하겠습니다.   function my_func() {     alert(\"함수가 호출되요\") // print 기능으로 활용가능합니다!     1. 전체 선택자(universal selector)     $(\"*\").css(\"color\",\"red\") // * 전체선택자     $(\"*\").text() // 태그안에 모든 글자를 가져옵니다          2. 태그 선택자(tag selector)     $(\"li\").remove() // li 테그를 모두 삭제합니다. 인자와 항목까지 전부삭제          3. 아이디 선택자(id selector)  중복하여 사용불가능     $(\"#haha\").text()  // # ID지칭                         // 인자가 없으면 값을 알아오라는 의미, 인자가 있으면 값을 변경     $(\"#haha\").text(\"울산\")          4. 클래스 선택자 (class selector) 중복하여 사용가능     $(\".region\").css(\"background-color\", \"yellow\")          5. 구조 선택자 (자식 선택자 후손 선택자)     $(\"ol &gt; *\").remove() // ol &gt; * ol에 자식으로 있는 것들 중 모든것     $(\"ol &gt; li\").css(\"color\", \"blue\") // ol &gt; * ol에 자식으로 있는 것들중 li      $(\"div li\").css(\"color\", \"pink\")    // div 후손으로 있는 것들 중  li를 모두 선택          6. 구조 선택자 (형제 선택자)     $(\"#haha + li\").css(\"color\", \"pink\")  // id의 형제를 찾고 +를 이용하여 바로 다음 형제를 찾는 것이 가능     $(\"#hong ~ li\").css(\"color\", \"pink\")  //id 이후의 모든 형제를 찾음 (자신제외)          7. 속성 선택자     $(\"[id]\").css(\"color\", \"yellow\")  // id 모든 속성을 전부 찾음     $(\"[class]\").css(\"color\", \"red\")     // class 모든 속성을 전부 찾음          // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능 !!!!   상기 코드에 주석을 처리하여 어떤 element 를 지정하는지 알아보았습니다.  ","categories": ["HTML","CSS","JAVASCRIPT"],
        "tags": ["JQuery"],
        "url": "http://localhost:4000/html/css/javascript/jQuery2/",
        "teaser": "http://localhost:4000/assets/image/frontend.png"
      },{
        "title": "[HTML, CSS, JS] Web Basic",
        "excerpt":" Web 기초   1. Internet   여러개의 컴퓨터를 network로 묶어서 사용하는 것은 LAN (Local Area Network) 입니다.   Internet 이란 쉽게 설명하여 전세계적인 Network를 즉 물리적인 네트워크 망을 지칭합니다.   2. Service   인터넷을 잘 이용하기 위해서는 인터넷 위에 여러가지 프로그램이 동작하여야 합니다. 이런 프로그램을 Service라고 합니다. 쉬운 예로 하기의 서비스가 있습니다.     Email (SNTP)     Torrent     Web service    여기서 웹서비스는 HTML, CSS, JavaScript를 이용해서 웹페이지를 만들고   web서버가 이 web page를 web client에게 전송해서 데이터르 주고 받는 서비스 입니다.   3. CS 구조   Client - Server 구조를 의미합니다.   Web Client - Web Server 프로세스 단위로 나눔, 프로그램 단위로 나눔   Web Client(Web Browser - Chrome, IE, Edge, Safari, Firefox, Opera)   Web Server : 데이터를 제공하는 역할을 하는 process (프로그램) Apache web server   Web Server에서 제공되는 데이터는 Web page 형태로 제공되는 데이터 Web Application 형태로 제공되는 데이터   HTML, CSS, JavaScript 언어로 이 데이터를 만들어서 제공합니다.   4. 기본적인 Web Service                  정적 웹 서비스 (Static Web Service) : HTML, CSS, JS 클라이언트가 특정 HTML 파일을 요청                  동적 웹 서비스 (Dynamic Web Service) : HTML, CSS, JS + Python, Java, C++            5. 개발환경 세팅   Pycharm을 이용해서 작성해 보겠습니다.   6. 예제 작성    &lt;!DOCTYPE html&gt;  &lt;html lang=\"en\"&gt;     &lt;head&gt;     &lt;!-- 일반적인 설정이 와요!! --&gt;         &lt;meta charset=\"UTF-8\"&gt;         &lt;title&gt;Title&lt;/title&gt;     &lt;/head&gt;     &lt;body&gt;        &lt;!-- BROWSER에 출력하고 싶은 내용이 와요!! --&gt;        &lt;h1&gt; 이것은 소리없는 아우성!! 껄껄 &lt;/h1&gt;     &lt;!-- heading 글자크기를 크게 // 문장전체 : element, &lt;&gt; : tag--&gt;        &lt;img src=\"image/download.jpg\"&gt;        &lt;!-- img src 그림을 삽입 // property--&gt;        &lt;!-- element, tag, property --&gt;     &lt;/body&gt; &lt;/html&gt;    Web 서버가 web 클라이언트에게 제공할 HTML을 만들었습니다.   전제조건 및 html을 실행하는 과정은 아래와 같아요.      웹서버가 일단 존재해야 해요     웹서버가 내가 작성한 프로젝트를 인식해야해요!! &gt; configure     웹서버프로그램을 기동(실행)하면 자신이 인식하고 있는 프로젝트를 웹에서 사용할 수 있도록 deploy(전개)해요!!     클라이언트가 접속할 서버 컴퓨터의 IP와 포트번호를 정하게 되요!     웹클라이언트를 실행해야해요!! - chrome을 실행해요!!     크롬을 이용해서 웹서버에 접속해서 우리가 작성한 HTML파일을 받아와요!     크롬브라우저가 받은 html을 해석해서 화면을 그려요!! (rendering)    7. HTML VS CSS VS JS      HTML : tag로 구성이 되요! 문서의 구성, 구조(DOM_Document object model)과 내용을 담당     CSS : 문서의 style을 담당     JavaScript : 문서의 동적처리를 담당    ","categories": ["HTML","CSS","JAVASCRIPT"],
        "tags": ["Web"],
        "url": "http://localhost:4000/html/css/javascript/web-basic/",
        "teaser": "http://localhost:4000/assets/image/frontend.png"
      },{
        "title": "Django Page",
        "excerpt":" \t   Django 페이지   [Djanggo] 기초이론   [Djanggo] 설치 및 운용   [Djanggo] Poll project1   [Djanggo] Poll project2   [Djanggo] Poll project3 마무리    [Django] 게시판 만들기(BBS 프로젝트)   ","categories": ["Django"],
        "tags": [],
        "url": "http://localhost:4000/django/DjangoPage/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] BBS Project ",
        "excerpt":" BBS (Bullentin Board System)   Poll 프로젝트에 이어 오늘은 게시판을 만들어 보겠습니다.   Poll 프로젝트는 처음 부터 끝까지 저희가 코드를 작성했었죠 ?   외울 것도 많고 작성해야하는 것도 많았습니다.   오늘은 polls project 에서 배웠던 내용을 기반으로 쉽게 제작해보겠습니다.   ModelForm을 이용해서 CRUD구현을 알아 보겠습니다.   CRUD (CREATE READ UPDATE DELETE)   기존방식으로 models에서 정의한 테이블에 값을 넣기가 정말 어려웠습니다.   하지만 ModelForm을 이용하면 사용자 입력양식 처리하는게 쉬워집니다.   여기에 html 프로젝트에서 사용하였던 Bootstrap도 포함해서 자동으로   만들어진 component를 통해 Web application을 만들어 보겠습니다.      필요한 package들을 설치해야해요!   기본적으로 Django를 설치해야합니다.     $ pip3 install Django    추가적으로 bootstrap에 대한 package를 설치합니다.   일반적인 HTML 파일을 만들고 Bootstrap을 CDN과 tag 속성을 이용하면 Bootstrap을 이용할 수 있어요!   그런데 이번에는 ModelForm을 이용할 것이고 사용자 입력양식 HTML을 자동으로 만들어줘요   자동으로 생성되기 떄문에 Bootstrap을 적용할수 없어요.   이런경우에 사용자 입력양식에 Bootstrap을 적용하기 위해서 특정 Package를 설치해야 해요!      $ pip3 install Django-bootstrap4    이렇게 하면 model form으로도 Bootstrap 테마를 적용 할 수 있습니다.      project를 생성 + application 생성   Django는 framework 이고 당연히 scaffolding 기능을 제공합니다.   특정 명령어를 이용해서 필요한 폴더와 파일을 자동으로 생성해야 합니다.   터미널을 이용해서 working directory를 python-django 폴더로 변경해요!!   $ django-admin startproject blog   해당 명령을 실행하면 기본적인 프로젝트 구조가 만들어져요   우리 프로젝트와 앞으로 생성할 application 을 포함하고 있는 폴더의 이름을 변경합니다   파일명이 혼동여부가 있어 상위폴더이름을 MyBlogSystem으로 파일명을 변경합니다.   하나의 application을 우리프로젝트에 추가해요!!   python3 manage.py startapp posts      project 설정 (settings) app등록  bootstrap도 마찬가지로 application 등록을 해야함.   bootstrap4 등록!!   settings.py 에 APP을 추가합니다.   INSTALLED_APPS = [     'django.contrib.admin',     'django.contrib.auth',     'django.contrib.contenttypes',     'django.contrib.sessions',     'django.contrib.messages',     'django.contrib.staticfiles',     'posts.apps.PostsConfig',     'bootstrap4' ]   Templates 에서 DIRS를 추가 경로지정가능 !          'DIRS': [os.path.join(BASE_DIR, 'blog', 'templates')],   맨아래 내려가서 하기코드도 추가합니다. static이라는 폴더에 바로접근할 수 있습니다.   정적리소스를 사용가능합니다.   STATICFILES_DIRS = [     os.path.join(BASE_DIR, 'static') ]      우리의 project를 web에 deploy해봐야 해요 !! 기본적인 데이터 베이스를 들고가야해서 무조건 사용자 등록을 해야합니다.   admin page가 존재 web에 deploy하기 이전에.. 기본 table부터 생성해야해요!     python3 manage.py migrate    관리자 계정이 있어야 Admin page(관리자 화면)를 사용할 수 있어요!     python3 manage.py createsuperuser    설정을 다했으니 이제 Web에 deploy해보도록 하겠습니다.     python3 manage.py runserver      프로젝트의 기본설정이 완성 되었습니다.      모델구현 기능을 구현하러 가야해요!! application을 구현해야해요!   기능을 구현할 때 제일먼저해야 하는 일은 사용할 데이터에 대한 정확한 명세를 작성하는 거에요!!   Django는 ORM을 이용하기 떄문에 class를 이용해서 Database를 사용해요!   Model을 만들어야해요!! posts / applicaiton / models.py 파일에 Model을 정의   CharField vs TextField  한줄 vs 여러줄   이렇게 내가 만든 model을 Admin page에 반영하기 위해서   admin.py에 class를 등록해야해요!!   Model을 생성했기 떄문에 데이터베이스에 변경이 필요!   데이터베이스를 이렇게 저렇게 변경하세요 라는 명세(초안) 가 필요!!     python3 manage.py makemigrations    초안이 완성되면 실제로 데이터베이스에 적용해서 Table을 생성     python3 manage.py migrate    초기화 하기위해서는 migrations 폴더에 initial.py 와 db.sqlite3를 전부다 지우면됨!      URL 경로 설정   from django.contrib import admin from django.urls import path, include from django.conf.urls import url from django.views.generic.base import TemplateView   htttp:// localhost:8000 요청이 들어왔을때 우리 전체 project의 홈페이지로 이동할거에요!!   Django는 elegant URL을 지원해요. 정규표현식을 지원합니다.   정규표현식 (regualr expression)   시작 &gt; ^, 끝 &gt; $   [0-9] : 1글자를 지칭   {} : 반복횟수 {3} 3번반복 {3,5} 3 아님 5번 반복   [0-9]{4} : 4자리 숫자가 나옴   r(raw) 은 escape 문자를 한번 더 사용하지 않도록 처리.   r”^[0-9]{1,3}$” 숫자가 1개나 3개나 모두가능   \\d 숫자를 지칭   r”^010[1-9]\\d{7,8}$”   urlpatterns = [     # view 를 거치지 않고 바로 html을 호출     url(r”^$”, TemplateView.as_view(template_name=’index.html’), name=”home”),     path(‘admin/’, admin.site.urls),     # path(‘posts/’, include(‘posts/urls’)) ]   cdn 방식으로 bootstrap을 써봐요 !! cover의 소스를 끌고와요 F12 개발자모드에서 소스끌어오기! static /css 에 붙여넣기   url 설정 복붙하고 app_name = posts’   urlpatterns = [     path(‘list/’, views.p_list, name = ‘list’), ]   blog project 안에 urls.py 부터 설정   post application 안에 url.py 설정   base template html 파일ㅇ르 blog project 안에 templates 폴더안에 생성      ModelForm 생성 사용자 입력양식을 우리가 직접 HTML template안에 입력하는게 아니라 Model을 기반으로 사용자 입력양식을 자동으로 생성해 줄 수 있는데 ModelForm을 이용하면 이 작업을 할 수 있어요 !!   class를 작성해야 해요 ! &gt; 어느파일에서 만들어야 하나요??   forms.py 에서 정의해야해요!   from django import forms from posts.models import Post   class PostForm (forms.ModelForm):     class Meta:         model = Post         fields = [‘author’, ‘contents’]      list page 생성            views.py 을 수정해서 list/ 가 요청되었을 때 해야하는 일을 기술           from django.shortcuts import render from posts.models import Post  Create your views here.   def p_list(request):    #데이터     my_list = Post.objects.all().order_by(‘-id’)     context = {‘posts’ : my_list}     return render(request, ‘list.html’, context)   posts/ list.html   전부 다 작성할필요가없어요 base.html의 것을 확장해서 사용   { % extends ‘base.html’ % }   { % block container % }     &lt;div class ='container'&gt;         &lt;h1&gt;Bullentin Board System(BBS)&lt;/h1&gt;   &lt;/div&gt; { % endblock % }   안에 좀더 내용을 채워봐요 !!           create page 생성            delete 기능 구현      ","categories": ["Django"],
        "tags": ["Polls","Project","Webapplication","BBS"],
        "url": "http://localhost:4000/django/Django-BBS/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] 이론",
        "excerpt":"Django  오늘은 Django에 대하여 알아보아요! Python 으로 만들어진 오픈소스 웹 어플리케이션을 쉽게 작성할 수 있도록 도와주는 Framework   라이브러리(library)  특수한 처리를 하기 위해서 만들어 놓은 함수집합이 Library입니다. jQuery도 라이브러리라고 볼 수 있어요!   장점 : 내가 모든걸 다 작성할 필요가 없어요!   단점(특징) : 전체 프로그램의 로직을 담당하지는 않아요!   예) jQuery 를 이용해서 영화정보를 출력하는 문제를 구현할 때 사람마다 구현이 제각각…   프레임 워크  프로그램의 전체적인 로직부분이 이미 구현이 되어 있어요!   그래서 프레임워크를 사용할때는 기본적으로 사용되는 코드가 제공되요! (스케폴딩- scaffolding)   유지보수성이 좋아집니다. 단, 처음에 프레임워크의 동작원리를 이해하는 작업이 필요!!      Django를 이용하면 Web Application에서 많이 자주 구현해야 하는 내용을 쉽게 구현할 수 있어요!   라이브러리(library) VS 프레임워크  두 가지 모두 이미 만들어진 것을 사용하는 것은 동일합니다. 차이점은 규칙에 있습니다. 라이브러리는 가져다 쓰는 개념이고 프레임워크는 내 것을 가져다가 프레임 워크 규칙에 맞추는 개념입니다.    데이터 베이스   Database : 데이터의 집합체   DBMS (Database Management System)   데이터베이스를 구축하고 원하는 정보를 추출하고 새로운 데이터를 입력하고 기존데이터를 삭제하고 기존데이터를 수정하는 작업을 진행.   Django에서는 sqlite3라는 DBMS를 default 로 사용합니다.   이런 데이터베이스는 언제부터 사용됐을까요? 초창기에는 데이터를 이렇게 관리하면 좋지않을까라고 생각했습니다. 그래서 나온 것이 조직도 형상 트리 구조로 정의된 계층형 데이터 베이스입니다.   하지만 IBM에서 Relation 이라는 논문을 발표하였고 DB2를 출시하였습니다.   관계형 데이터베이스는 행과 열로 구성된 테이블 간의 관계를 나타내는 것입니다.                  관계형 데이터베이스                                                  순번                               이름                               학과                                                       1                               홍길동                               심리학과                                                 2                               김길동                               컴퓨터학과                                                 3                               신사임당                               경제학과                                                 …                               …                               …                   데이터를 관리하기 편한 장점을 가지고 있어 현재에는 거의 모든 DBMS가 Relational Database(관계형 데이터베이스)으로 제작됩니다.   테이블 자료를 끌어가야하는데 프로그램 방식은 크게 두가지 방식이 있습니다.     ODBC   ORM (Object Relation Mapping) # Django   즉 쉽게 설명하자면 Table = relation = class와 매핑됩니다.     Django의 특징  Django는 MVC Model을 기반으로 한 MVT model을 이용해요!   MVC Model : Model, View, Controller   MVT model : Model, View, Template   model : 데이터베이스 처리   View : 로직을 담당   Template : 클라이언트에게 보여줄 화면을 담당   오늘은 파이썬의 Django의 이론에 대하여 알아보았습니다.  ","categories": ["Django"],
        "tags": [],
        "url": "http://localhost:4000/django/Django-Basic/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] 설치 및 기초운용",
        "excerpt":"Django설치 및 기초운용  Django 설치  mac 기반으로 작성하였으니 참고하시기 바랍니다. python 실행경로를 꼭! 확인해 주세요.   pip(python install package), pypi(python Package Index)라는 repository에 있는 Django를 설치합니다.   가상환경에서 설치  가상환경에서 하실분은 하기 내용을 추가하여 설치해주시기 바랍니다.                  가상환경(virtualenv) 설치 : $ python3 -m venv posts                  가상환경 실행(virtualenv) : $ source posts/bin/activate                  설치된 패키지 확인 : $ pip3 freeze            Django 설치  가상환경이 아닌 로컬에서 설치하실 분들은 이쪽부터 진행 하시면 됩니다.                  Django 설치 : '$ pip3 install django                  python 3.7.8버전을 사용하시는 분은 pip3를 update를 해주셔야 합니다.                  pip upgrade : $ pip3 install --upgrade pip                  여기까지 하시면 설치가 완료가 됩니다.             Project Setup   본격적으로 프로젝트의 뼈대를 만드는 일부터 시작하겠습니다.    터미널에서 설정                  폴더 생성 : $ mkdir python-Django                  만들어진 경로로 이동 : $ cd python-Django                  mysite 프로젝트 생성 및 Scaffolding : $ django-damin startproject mysite                  폴더명 변경(선택사항) :python-Django/myself 이름을 MyFirstWebPoll로 변경                  변경된 경로로 이동 : $ cd MyFirstWebPoll                  프로젝트 안에 개별 어플리케이션을 생성 :$ python3 manage.py startapp polls                  poll 이라는 어플이 생성되고 필요한 파일들이 scaffolding 됨             Python 설정변경 [pycharm 사용]                   pycharm에서 MyFirstWebPoll 프로젝트 실행                  setting.py를 이용해 프로젝트 설정처리                  기본테이블(기본DB)을 생성                  장고는 관리자 모드 화면을 제공                  관리자 ID PW가 DB어딘가에는 저장이 되어 있어야함 (DB설정이 전제됨)                  INSTALLED_APPS 리스트 항목에 ‘polls.apps.PollsConfig’ 를 추가                  TIME_ZONE ‘Asia/Seoul’ 로 변경            # Application definition   INSTALLED_APPS = [     'django.contrib.admin',     'django.contrib.auth',     'django.contrib.contenttypes',     'django.contrib.sessions',     'django.contrib.messages',     'django.contrib.staticfiles',     'polls.apps.PollsConfig' ]  …  # Internationalization # https://docs.djangoproject.com/en/3.0/topics/i18n/  LANGUAGE_CODE = 'en-us'  TIME_ZONE = 'Asia/Seoul'  USE_I18N = True  USE_L10N = True  USE_TZ = True    urls.py 수정    from django.contrib import admin from django.urls import path, include  urlpatterns = [     path('admin/', admin.site.urls),     path('polls/', include('polls.urls')) ]    프로젝트 Deploy                 터미널을 이용해서 내장 서버를 이용하여 프로젝트를 deploy 해보도록 하겠습니다.                  프로젝트 migrate : python3 manage.py migrate                  서버 실행 : python3 manage.py runserver                  관리자 설정 : python3 manage.py createsuperuser #user, email, pw 설정                  서버실행 : python3 manage.py runserver                  127.0.0.1:8000 로 접속                  Polls application 구현확인               Model 생성   Model 작업은 우리가 사용하는 Database에 Table을 생성하는 작업이에요!   (Table == Relation) 즉 class의 이름은 결국 table의 이름과 mapping이 되요   application 에서 사용할 데이터베이스 구조를 생각하고 입력해보겠습니다.   models.py 안에 모든 모델들을 정의해요 !!   from django.db import models  # Create your models here. class Question(models.Model): # Django 가제공하는 models 클래스     question_text = models.CharField(max_length=200)    #문자열을 받고 길이는 200자 까지     pub_date = models.DateTimeField('date published')      def __str__(self):      # 일반적으로 연산을 위해서 문자열로 변환을 하고 싶을때!         return self.question_text  class Choice(models.Model):     # question_id = models.ForeignKey(Question, on_delete=models.CASCADE)     # 기본적으로 _id가 자동으로 붙음     question = models.ForeignKey(Question, on_delete=models.CASCADE)     # 만약에 Question 에 대하여 지운다면 같이 지운다 CASCADE 문제없이 만드는 것      choice_text = models.CharField(max_length=200)     votes = models.IntegerField(default=0)      def __str__(self):         return self.choice_text      # def __repr__(self):     # class 의 객체를 문자열로 표현할 경우에 사용      # Table의 id column은 default로 지정되요!!!     # id가 primary key로 설정이 가능!, Not null (값이 무조건 들어가는 경우), Unique (겹치는 값이 안옴)     # id는 autoincrement 특성(값이 들어오면 자동적으로 증가하는 특성)을 가지는 정수형으로 지정     # 자동으로 생성해주기 때문에 class정의에서 나오지 않아요!!     model 및 파일등록      admin.py 파일에 등록해요       admin page에서 사용할 수 있도록 등록을 해줘야해요!!       /polls/admin.py 에서 하기 코드를 추가합니다.    from polls.models import Question, Choice # Register your models here.  #괄호안에는 내가 등록할 클래스가 나와야해요! admin.site.register(Question) admin.site.register(Choice)   여기까지는 작업했다고해서 실제 데이터베이스 테이블이 생선되는건 아니에요!!   하기 과정을 통하여 표를 삽입을 해줘야합니다.      python3 manage.py makemigrations          class와 매핑되는 테이블을 만들기 위해서 필요한 SQL 구문을 생성해야 되요!!        python3 manage.py migrate          그리고 나서 이 구문을 실행해서 실제 테이블을 생성해야 해요!        python3 manage.py runserver          프로젝트가 web에 deploy 될 수 있는지를 확인합니다.       관리자 페이지가 정상적으로 동작하는지 확인하기 위해서 서버를 기동 !           127.0.0.1:8000 로 접속    완료하면 하기 그림처럼 초기 설정 화면은 얻을수 있습니다.    ","categories": ["Django"],
        "tags": ["Install","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] Poll 프로젝트 1",
        "excerpt":"Polls 프로젝트 1  Templates 생성  저번시간에는 기본뼈대까지 생성하였으며 투표를 하기위한 질문과 선택지를 데이터베이스에 저장해보았습니다.   이번 시간에는 데이터베이스에 있는 데이터를 활용해보도록 하겠습니다.   투표 프로젝트를 만들면서 자세하게 알아보겠습니다.   일단 터미널에서 polls폴더 안에 template 폴더를 생성합니다.      $ cd polls      $ mkdir templates     Pycharm을 다시한번 열어보겠습니다.   만들어진 template 폴더안에 index.html 파일을 생성합니다.   생성하는 이유는 차근차근 설명하도록 하겠습니다.   어제 만든 models.py 안에 저희가 Class Question 과 Choice 를 만들었죠?   오늘은 어제 만든 Class를 사용하여 만들어보도록 하겠습니다.   polls폴더안에 views.py파일을 실행시켜 하기 코드를 추가합니다.    def index(request): # 서버가 보내준 request 반드시 인자로 넘겨줘야함 !!     #로직처리 코드가 나와요!!     tmp = Question.objects.all().order_by('-pub_date')[:3]     # 객체(objects)의 모든것(all())을 불러옴 정렬 order_by() - 오름차순 [:] slicing     context = {\"latest_question_list\" : tmp}     return render(request, 'index.html', context)     #render는 그리는 작업 / HTML을 그림    코드설명     서버와 클라이언트 사이에는 request와 response로 데이터를 주고 받습니다.      index(request) : 서버에서 받은 request를 index 함수에 인자로 넘겨줍니다.     tmp라는 변수를 설정하여     Question : Question Class     objects : 클래스 안의 객체     all() : 전부     order_by('-pub_date') : pub-date 기준으로 오름차순으로     [:3] : Slicing 3개까지 변수로 할당합니다.     context     dictionary 형태를 통하여 변수 context를 선언합니다.     latest_question_list는 Key값  Question 의 모든객체는 Value 값이 됩니다.     render : request 를 받아 함수처리를 하고 html파일에 적용하는 것을 의미합니다.      다음은 urls.py 파일을 생성해보겠습니다.   처음부터 새로 만들어도 가능하지만 mysite에서 만들어진 urls.py를 polls하위에 복사하여 사용하도록하겠습니다.   모든내용을 지우고    from django.urls import path from . import views  app_name = \"polls\"  urlpatterns = [     # http://localhost:8000/polls/     path('', views.index, name='index'),  ]    코드설명     from . import views 경로안에 views.py 함수를 사용합니다.   path(‘’, views.index, name=’index’), localhost:8000/polls/ 경로뒤에 ‘’ 아무것도 오지않으면 view.index 함수호출해요 name 은 경로에 대한 이름 입니다. 향후 이름을 통해서 경로를 호출하거나 함수를 사용할 수 있습니다.     다시 처음으로 돌아가서 index.html의 코드를 수정하겠습니다.  &lt;body&gt;     &lt;h1&gt;투표목록이 나와야 해요!!&lt;/h1&gt;      { % if latest_question_list % }         &lt;ul&gt;         { % for question in latest_question_list % }             &lt;li&gt;&lt;a href=\"/polls/{ { question.id } }\"&gt;                     { { question.question_text } }&lt;/a&gt;&lt;/li&gt;         { % endfor % }         &lt;/ul&gt;     { % else % }         &lt;p&gt;출력할 투표목록이 존재하지 않습니다.&lt;/p&gt;     { % endif % } &lt;/body&gt;   코드설명     template code!! python도아니고 HTML 도아닌 template 안에서만 사용가능  중괄호 표현은 template code이며 HTML, Python 언어가 아니므로 주의하셔서 사용해야합니다.      { % % } : 로직코드이며 조건 및 반복문 등 로직을 사용해야할 경우 사용합니다.     { { } } : 값을 입력할 경우 사용합니다.     { { if latest_question_list} }     views.index에서 키값으로 받은 latest_question_list 존재여부를 판단합니다.        { { for question in latest_question_list} }     question 변수에 lastest_question_list객체를 삽입합니다.        &lt;li&gt;&lt;a href=\"/polls/{ { question.id } }\"&gt;{ { question.question_text } }&lt;/a&gt;&lt;li&gt;     lastest_question_list 에서 전달받은 객체에서 .question_text 객체를 뽑아냅니다.      이렇게하면 하기의 초기페이지를 완성할 수 있습니다.          오늘은 첫페이지인 index까지 작성해 보았습니다.  ","categories": ["Django"],
        "tags": ["Polls","Project","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application2/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] Poll 프로젝트 2",
        "excerpt":"Polls 프로젝트 2  투표시스템 질문지 항목 추가  저번시간에는 Question 항목까지 만드는 것을 해보았습니다.   이번 시간에는 선택항목까지 제작해보도록 하겠습니다.   Pycharm을 다시한번 열어보겠습니다.   만들어진 template 폴더안에 detail.html 파일을 생성합니다.   생성하는 이유는 차근차근 설명하도록 하겠습니다.   첫 시간에 models.py 안에 저희가 Class Question 과 Choice 를 만들었죠?   오늘도 만든 Class를 사용하여 만들어보도록 하겠습니다.   polls폴더안에 views.py파일을 실행시켜 하기 코드를 추가합니다.    def detail(request, question_id):     # 로직처리를 해요!     # 아까는 모든 Question 객체를 다 구해서 리스트로 만들었는데     # 이번에는 특정 Question 객체 1개만 구해야 해요     tmp = get_object_or_404(Question, pk=question_id)     context = {\"question\" : tmp} # questiond 이라는 문자열로 context를 호출합니다.     return render(request, 'detail.html', context)    코드설명     index method를 제작했을 때와는 다르게 처음보는 코드가 있습니다.      def detail(request, question_id):     def index 에서 와는다르게 question_id 라는 인자를 하나 더받습니다.     index에서 하이퍼링크를 타고 detail 페이지로 넘어올때 그 인자까지도 받는다는 내용입니다.     get_object_or_404(Question, pk=question_id)     받는 객체가 있다면 객체를 받고 없다면 404 page를 띄운다는 간단한 내용입니다.     대신 전달받은 primary key에 한해 Question에서의 객체를 받는 다는 내용입니다.      다음은 urls.py 파일을 생성해보겠습니다.      http://localhost:8000/polls/ 주소로 접속하면 index.html 로 들어가게 되어있습니다.     저희는 질문지를 눌렀을때 선택항목이 나오는 페이지가 나오게 경로를 잡아줘야합니다.     다양한 방법이 있지만 index에서 전달받은 pk를 가지고 접속해보도록 하겠습니다.     하기코드를 입력하겠습니다.        # http://localhost:8000/polls/&lt;숫자&gt;/     path('&lt;int:question_id&gt;/', views.detail, name='detail')  ]     코드설명    ‘path(‘/', views.detail, name='detail')'      ‘http://localhost:8000/polls/question_id ‘     polls/question_id 의 경로일 경우 view.index 함수를 실행합니다.      다시 처음으로 돌아가서 detail.html의 코드를 수정하겠습니다.   &lt;body&gt;     &lt;h1&gt;{ {question.question_text} }&lt;/h1&gt;      &lt;form action=\"\" method=\"post\"&gt;     { % csrf_token % }     { % for choice in question.choice_set.all % }         &lt;input type=\"radio\" id=\"choice{ {forloop.counter} }\"                name=\"choice\"                value=\"choice.id\"         &gt;         &lt;rabel for=\"choice{ {forloop.counter} }\"&gt;             { {choice.choice_text} }         &lt;/rabel&gt;         &lt;br&gt;     { % endfor % }          &lt;input type=\"submit\" value=\"투표\"&gt;     &lt;/form&gt;  &lt;/body&gt;  ]    코드설명    &lt;form action=\"\" method=\"post\"&gt;     post 방식으로 데이터를 받으면 action으로 처리한다는 내용입니다.     submit 버튼을 눌렀을 경우 하기 input에서 name과 value 인자를 다음페이지로 보낼 수 있습니다.       { { question.choice_set.all }}     choice에 해당되는 객체를 모두 받습니다.            &lt;input type=\"radio\" id=\"choice\"                name=\"choice\"                value=\"choice.id\"         &gt;     라디오 버튼을 제작합니다.     id 는 choice1, …     name = choice : 항목을 서로 묶기 위해서 명시합니다. 중복선택을 방지가능합니다.            &lt;rabel for=\"choice{ {forloop.counter} }\"&gt;             { {choice.choice_text} }         &lt;/rabel&gt;     상기 항목에서 명시한 id와 rabel 의 text와 매칭되어 관리 됩니다.     $ python3 manage.py runserver 를 통해 수정된 페이지를 확인해봅시다.           오늘은 poll 프로젝트의 질문지 선택까지 제작해보았습니다.  ","categories": ["Django"],
        "tags": ["Polls","Project","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application3/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] Poll 프로젝트 3 (마지막) ",
        "excerpt":"Polls 프로젝트 3  투표시스템 결과확인  저번시간에는 저희가 질문지를 라디오 버튼을 통하여 선택하는 것과 submit버튼을 제작해 보았습니다.   오늘은 제작한 submit버튼을 눌렀을 때 선택한 결과가 반영되어 결과페이지에서 확인하는 기능을 넣어보겠습니다.   방식은 저번 방식과 동일합니다.                  views에 함수추가                  urls에 path 추가                  templates/ .html 생성                  detail.html 과 연결                  templates/ .html 수정후 완료              그렇다면 이제부터 기능을 만들어보겠습니다.   template 폴더에 result.html파일을 생성해줍니다.   polls/views 로 들어가서 하기내용 추가합니다.   def vote(request, choice_id): vote_result = get_object_or_404(Question, pk=choice_id)  selected_vote = vote_result.choice_set.get(pk =                    request.POST['파이썬 라디오버튼에서의 name'])  selected_vote.votes += 1 selected_vote.save() context = {'vote_result':vote_result} return render(request, 'vote.html', context)   코드설명    이전 시간과 중복되는 내용은 제외하고 설명하도록 하겠습니다.      selected_vote = vote_result.choice_set.get(pk =                    request.POST['파이썬 라디오버튼에서의 name'])     라디오 버튼선택한 정보가 name 인자와 value 값의 쌍으로 전달받습니다.     selected_vote.votes += 1 : 선택한 것에 대한 votes 항목을 추가합니다.     selected_vote.save() : 변경된 값을 저장합니다.      polls/ urls.py 파일을 열고 하기 경로를 추가해줍니다.   path ('&lt;int:choice_id&gt;/vote/' , views.vote , name ='vote')     template 폴더에 detail.html파일로 돌아가서 하기처럼 form tag를 수정해줍니다.   &lt;body&gt;      &lt;h1&gt;{ {choice_list.question_text} }&lt;/h1&gt;      &lt;form action=\"{ % url 'polls:vote' choice_list.id % }\" method=\"post\"&gt;     { % csrf_token % }         &lt;ul&gt;             { % for tmp in choice_list.choice_set.all % }             &lt;input type=\"radio\" name=\"choice_button\" id=\"{ { forloop.counter } }\" value=\"{ {tmp.id} }\"&gt;             &lt;label for='{ { forloop.counter } }'&gt;{ {tmp} }&lt;/label&gt;             { % endfor % }             &lt;input type=\"submit\" value=\"제출\"&gt;     &lt;/form&gt;      &lt;/ul&gt; &lt;/body&gt;   코드설명        &lt;form action=\"{ % url 'polls:vote' choice_list.id % }\" method=\"post\"&gt;   post 방식으로 url 의 polls라는 이름에서 name = vote라는 기능을 사용합니다.   인자는 choice_list.id의 객체를 전달합니다.     마지막으로 result.html을 작성하여 마무리 하겠습니다.  &lt;body&gt; &lt;h1&gt;결과도출&lt;/h1&gt;  { %for tmp in my_result.choice_set.all % } &lt;li&gt;{ {tmp} } : { {tmp.votes} } &lt;/li&gt; { %endfor% } &lt;/body&gt;   상기항목을 추가하면 드디어 Poll 프로젝트가 하기 그림처럼 완성됩니다.        이번 시간에는 Poll 프로젝트에 대하여 마무리를 해봤습니다.  ","categories": ["Django"],
        "tags": ["Polls","Project","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application4/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      }]
