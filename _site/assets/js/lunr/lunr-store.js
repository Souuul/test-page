var store = [{
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
        "excerpt":" \t   파이썬 페이지   숫자형 데이터 타입   문자열   문자열 연산   In Not in   문자열 Indexing &amp; Slicing   Formatting   List  ","categories": ["Python"],
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
        "title": "테크블로그에 오신것을 환영합니다.",
        "excerpt":" \t   한솔   1990.04.09   경력 사항       육군 중위 (2013.03 - 2015.06)      아트라스콥코 (2016.11 - 2020.06)      KSA (OREAN STANDARDS ASSOCIATION) 전문요원      기업출강 및 제휴강의 담당 (삼성전자, SK 하이닉스, 현대자동차, LG전자 등)      외국계 기업 B2B 마케팅 담당      공장 개선 컨설팅 및 스마트팩토리 컨설팅 담당      각종 고객 세미나, 전시회 및 테크 쇼 기획 및 실행 담당      마케팅 캠페인 기획 및 관리 담당      비디오, 리플렛, 카탈로그 등 마케팅 자료 기획 및 제작 담당      기업 및 산업용 공구 사업부 SNS채널 및 뉴스레터 플랫폼 기획 및 관리 담당      KC인증, Cleanroom certification, 안전인증 담당      기술 특허 담당    보유기술       2D, 3D 설계 / 3D Printing      Co-bot operation 및 로봇 제어      PLC      Python      HTML, CSS, JavaScript   ","categories": ["Welcome"],
        "tags": [],
        "url": "http://localhost:4000/welcome/welcome/",
        "teaser": "https://cdn.pixabay.com/photo/2015/05/09/23/46/welcome-sign-760358__480.jpg"
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
        "title": "[Django] 이론",
        "excerpt":"Django  오늘은 Django에 대하여 알아보아요! Python 으로 만들어진 오픈소스 웹 어플리케이션을 쉽게 작성할 수 있도록 도와주는 Framework   라이브러리(library)  특수한 처리를 하기 위해서 만들어 놓은 함수집합이 Library입니다. jQuery도 라이브러리라고 볼 수 있어요!   장점 : 내가 모든걸 다 작성할 필요가 없어요!   단점(특징) : 전체 프로그램의 로직을 담당하지는 않아요!   예) jQuery 를 이용해서 영화정보를 출력하는 문제를 구현할 때 사람마다 구현이 제각각…   프레임 워크  프로그램의 전체적인 로직부분이 이미 구현이 되어 있어요!   그래서 프레임워크를 사용할때는 기본적으로 사용되는 코드가 제공되요! (스케폴딩- scaffolding)   유지보수성이 좋아집니다. 단, 처음에 프레임워크의 동작원리를 이해하는 작업이 필요!!      Django를 이용하면 Web Application에서 많이 자주 구현해야 하는 내용을 쉽게 구현할 수 있어요!   라이브러리(library) VS 프레임워크  두 가지 모두 이미 만들어진 것을 사용하는 것은 동일합니다. 차이점은 규칙에 있습니다. 라이브러리는 가져다 쓰는 개념이고 프레임워크는 내 것을 가져다가 프레임 워크 규칙에 맞추는 개념입니다.    데이터 베이스   Database : 데이터의 집합체   DBMS (Database Management System)   데이터베이스를 구축하고 원하는 정보를 추출하고 새로운 데이터를 입력하고 기존데이터를 삭제하고 기존데이터를 수정하는 작업을 진행.   Django에서는 sqlite3라는 DBMS를 default 로 사용합니다.   이런 데이터베이스는 언제부터 사용됐을까요? 초창기에는 데이터를 이렇게 관리하면 좋지않을까라고 생각했습니다. 그래서 나온 것이 조직도 형상 트리 구조로 정의된 계층형 데이터 베이스입니다.   하지만 IBM에서 Relation 이라는 논문을 발표하였고 DB2를 출시하였습니다.   관계형 데이터베이스는 행과 열로 구성된 테이블 간의 관계를 나타내는 것입니다.                  관계형 데이터베이스                                                  순번                               이름                               학과                                                       1                               홍길동                               심리학과                                                 2                               김길동                               컴퓨터학과                                                 3                               신사임당                               경제학과                                                 …                               …                               …                   데이터를 관리하기 편한 장점을 가지고 있어 현재에는 거의 모든 DBMS가 Relational Database(관계형 데이터베이스)으로 제작됩니다.   테이블 자료를 끌어가야하는데 프로그램 방식은 크게 두가지 방식이 있습니다.     ODBC   ORM (Object Relation Mapping) # Django   즉 쉽게 설명하자면 Table = relation = class와 매핑됩니다.     Django의 특징  Django는 MVC Model을 기반으로 한 MVT model을 이용해요!   MVC Model : Model, View, Controller   MVT model : Model, View, Template   model : 데이터베이스 처리   View : 로직을 담당   Template : 클라이언트에게 보여줄 화면을 담당   오늘은 파이썬의 Django의 이론에 대하여 알아보았습니다.  ","categories": ["Django"],
        "tags": [],
        "url": "http://localhost:4000/django/Django-Basic/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] 설치 및 기초운용",
        "excerpt":"Django설치 및 기초운용  Django 설치  mac 기반으로 작성하였으니 참고하시기 바랍니다. python 실행경로를 꼭! 확인해 주세요.   pip(python install package), pypi(python Package Index)라는 repository에 있는 Django를 설치합니다.   가상환경에서 설치  가상환경에서 하실분은 하기 내용을 추가하여 설치해주시기 바랍니다.                  가상환경(virtualenv) 설치 : $ python3 -m venv posts                  가상환경 실행(virtualenv) : $ source posts/bin/activate                  설치된 패키지 확인 : $ pip3 freeze            Django 설치  가상환경이 아닌 로컬에서 설치하실 분들은 이쪽부터 진행 하시면 됩니다.                  Django 설치 : '$ pip3 install django                  python 3.7.8버전을 사용하시는 분은 pip3를 update를 해주셔야 합니다.                  pip upgrade : $ pip3 install --upgrade pip                  여기까지 하시면 설치가 완료가 됩니다.             Project Setup   본격적으로 프로젝트의 뼈대를 만드는 일부터 시작하겠습니다.    터미널에서 설정                  폴더 생성 : $ mkdir python-Django                  만들어진 경로로 이동 : $ cd python-Django                  mysite 프로젝트 생성 및 Scaffolding : $ django-damin startproject mysite                  폴더명 변경(선택사항) :python-Django/myself 이름을 MyFirstWebPoll로 변경                  변경된 경로로 이동 : $ cd MyFirstWebPoll                  프로젝트 안에 개별 어플리케이션을 생성 :$ python3 manage.py startapp polls                  poll 이라는 어플이 생성되고 필요한 파일들이 scaffolding 됨             Python 설정변경 [pycharm 사용]                   pycharm에서 MyFirstWebPoll 프로젝트 실행                  setting.py를 이용해 프로젝트 설정처리                  기본테이블(기본DB)을 생성                  장고는 관리자 모드 화면을 제공                  관리자 ID PW가 DB어딘가에는 저장이 되어 있어야함 (DB설정이 전제됨)                  INSTALLED_APPS 리스트 항목에 ‘polls.apps.PollsConfig’ 를 추가                  TIME_ZONE ‘Asia/Seoul’ 로 변경            # Application definition   INSTALLED_APPS = [     'django.contrib.admin',     'django.contrib.auth',     'django.contrib.contenttypes',     'django.contrib.sessions',     'django.contrib.messages',     'django.contrib.staticfiles',     'polls.apps.PollsConfig' ]  …  # Internationalization # https://docs.djangoproject.com/en/3.0/topics/i18n/  LANGUAGE_CODE = 'en-us'  TIME_ZONE = 'Asia/Seoul'  USE_I18N = True  USE_L10N = True  USE_TZ = True    프로젝트 Deploy                 터미널을 이용해서 내장 서버를 이용하여 프로젝트를 deploy 해보도록 하겠습니다.                  프로젝트 migrate : python3 manage.py migrate                  서버 실행 : python3 manage.py runserver                  관리자 설정 : python3 manage.py createsuperuser #user, email, pw 설정                  서버실행 : python3 manage.py runserver                  127.0.0.1:8000 로 접속                  Polls application 구현확인               Model 생성   Model 작업은 우리가 사용하는 Database에 Table을 생성하는 작업이에요! (Table == Relation)      models.py 파일 열기    from django.db import models  # Create your models here. class Question(models.Model): # Django 가제공하는 models 클래스     question_text = models.CharField(max_length=200)    #문자열을 받고 길이는 200자 까지     pub_date = models.DateTimeField('date published')      def __str__(self):      # 일반적으로 연산을 위해서 문자열로 변환을 하고 싶을때!         return self.question_text  class Choice(models.Model):     # question_id = models.ForeignKey(Question, on_delete=models.CASCADE)     # 기본적으로 _id가 자동으로 붙음     question = models.ForeignKey(Question, on_delete=models.CASCADE)     # 만약에 Question 에 대하여 지운다면 같이 지운다 CASCADE 문제없이 만드는 것      choice_text = models.CharField(max_length=200)     votes = models.IntegerField(default=0)      def __str__(self):         return self.choice_text      # def __repr__(self):     # class 의 객체를 문자열로 표현할 경우에 사용      # Table의 id column은 default로 지정되요!!!     # id가 primary key로 설정이 가능!, Not null (값이 무조건 들어가는 경우), Unique (겹치는 값이 안옴)     # id는 autoincrement 특성(값이 들어오면 자동적으로 증가하는 특성)을 가지는 정수형으로 지정     # 자동으로 생성해주기 때문에 class정의에서 나오지 않아요!!       /polls/admin.py    from polls.models import Question, Choice # Register your models here.  #괄호안에는 내가 등록할 클래스가 나와야해요! admin.site.register(Question) admin.site.register(Choice)   여기까지는 구조를 아직만든게 아니에요!!   하기 과정을 통하여 표를 삽입을 해줘야합니다.      python3 manage.py makemigrations     python3 manage.py migrate     python3 manage.py runserver     127.0.0.1:8000 로 접속    완료하면 하기 그림처럼 초기 설정 화면은 얻을수 있습니다.     ","categories": ["Django"],
        "tags": ["Install","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "[Django] Poll 프로젝트",
        "excerpt":"Polls 프로젝트  Templates 생성  저번 기본뼈대까지 생성하였으며 투표를 하기위한 질문과 선택지를 데이터베이스에 저장해보았습니다.   이번 시간에는 데이터베이스에 있는 데이터를 활용해보도록 하겠습니다.   투표 프로젝트를 만들면서 자세하게 알아보겠습니다.   일단 터미널에서 polls폴더 안에 template 폴더를 생성합니다.      $ cd polls      $ mkdir template     Pycharm을 다시한번 열어보겠습니다.   만들어진 template 폴더안에 index.html 파일을 생성합니다.   생성하는 이유는 차근차근 설명하도록 하겠습니다.   어제 만든 models.py 안에 저희가 Class Question 과 Choice 를 만들었죠?   오늘은 어제 만든 Class를 사용하여 만들어보도록 하겠습니다.   polls폴더안에 views.py파일을 실행시켜 하기 코드를 추가합니다.    def index(request): # 서버가 보내준 request 반드시 인자로 넘겨줘야함 !!     #로직처리 코드가 나와요!!     tmp = Question.objects.all().order_by('-pub_date')[:3]     # 객체(objects)의 모든것(all())을 불러옴 정렬 order_by() - 오름차순 [:] slicing     context = {\"latest_question_list\" : tmp}     return render(request, 'index.html', context)     #render는 그리는 작업 / HTML을 그림    코드설명     서버와 클라이언트 사이에는 request와 response로 데이터를 주고 받습니다.   index(request) : 서버에서 받은 request를 index 함수에 인자로 넘겨줍니다.   tmp라는 변수를 설정하여   Question : Question Class   objects : 클래스 안의 객체   all() : 전부   order_by('-pub_date') : pub-date 기준으로 오름차순으로   [:3] : Slicing 3개까지 변수로 할당합니다.   dictionary 형태를 통하여 변수 context를 선언합니다.   latest_question_list는 Key값  Question 의 모든객체는 Value 값이 됩니다.   render라는 것은 HTML을 변경하는 거라고 보시면 되겠습니다.     다음은 urls.py 파일을 생성해보겠습니다.   처음부터 새로 만들어도 가능하지만 mysite에서 만들어진 urls.py를 polls하위에 복사하여 사용하도록하겠습니다.   모든내용을 지우고    from django.urls import path from . import views  app_name = \"polls\"  urlpatterns = [     # http://localhost:8000/polls/     path('', views.index, name='index'),  ]    코드설명     from . import views 경로안에 view.py 함수를 사용합니다.   path(‘’, views.index, name=’index’), localhost:8000/polls/ 경로뒤에 ‘’ 아무것도 오지않으면 view.index 함수호출해요 name 은 경로에 대한 이름 이라고 보시면 되며 이것은 다음에 설명하도록 하겠습니다.     다시 처음으로 돌아가서 index.html의 코드를 수정하겠습니다.      코드설명     template code!! python도아니고 HTML 도아닌 template 안에서만 사용가능  중괄호 표현은 template code이며 HTML, Python 언어가 아니므로 주의하셔서 사용해야합니다.      { % % } : 로직코드이며 조건 및 반복문 등 로직을 사용해야할 경우 사용합니다.     { { } } : 값을 입력할 경우 사용합니다.     { { if latest_question_list} }     views.index에서 키값으로 받은 latest_question_list 존재여부를 판단합니다.        { { for question in latest_question_list} }     question 변수에 lastest_question_list객체를 삽입합니다.        &lt;li&gt;&lt;a href=\"/polls/{ { question.id } }\"&gt;{ { question.question_text } }&lt;/a&gt;&lt;li&gt;     lastest_question_list 에서 전달받은 객체에서 .question_text 객체를 뽑아냅니다.      이렇게하면 초기페이지를 완성할 수 있습니다.   ","categories": ["Django"],
        "tags": ["Polls","Project","Webapplication"],
        "url": "http://localhost:4000/django/Django-simple-web-application2/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      },{
        "title": "Django Page",
        "excerpt":" \t   파이썬 페이지   Djanggo 기초이론   Djanggo 설치 및 운용   Djanggo Poll project1   ","categories": ["Django"],
        "tags": [],
        "url": "http://localhost:4000/django/DjangoPage/",
        "teaser": "https://live.staticflickr.com/3595/3475465970_7044242629_b.jpg"
      }]
