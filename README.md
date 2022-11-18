# **📖 3주차 과제 2 - Best Practice**

### **과제 :**  투자 관리 서비스의 관리자 기능 구현

> 기간 :2022년 11월 12일(토) - 2022년 11월 18일(금)
<br/>**📎[배포링크 바로가기](https://pre-onboarding-7th-3-2-6-gold.vercel.app/)**

### 테스트계정
id: rhkrgus01@test.com<br/>
pw: rhkrgus01

## 👨‍👩‍👧‍👦 Members

| 최승진<br/>(팀장)                                                                                     | 임준홍<br/>(부팀장)                                                                                 | 문도연<br/>(서기)                                                                                        | 최원오<br/>(부서기)                                                                                     | 소윤호<br/>(부서기)                                                                                 | 선민경<br/>(팀원)                                                                                       | 곽현<br/>(팀원)                                                                                         | 이유진<br/>(팀원)                                                                                       |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/46988995?v=4" alt="tooooo1" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/67459853?v=4" alt="helen" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/102936206?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/99406837?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/30254570?v=4" alt="flora" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/76088728?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/73919235?v=4" alt="magictaro" width="60" height="60"> | <img src="https://avatars.githubusercontent.com/u/42020919?v=4" alt="magictaro" width="60" height="60"> |
| <a href="https://github.com/yondo123">yondo123<a/>| <a href="https://github.com/tesseractjh">tesseractjh<a/> | <a href="https://github.com/Moondoyeon">Moondoyeon</a>| <a href="https://github.com/choi1five">choi1five<a/>                                                                                               | <a href="https://github.com/younhoso">younhoso<a/>                                                                                            | <a href="https://github.com/seonsy44">seonsy44<a/>                                                                                                | <a href="https://github.com/kwakhyun">kwakhyun<a/>                                                                                                | <a href="https://github.com/2ujin">2ujin<a/>                                                                                                   |

## **⚡️ Skills**


<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-2F74C0.svg?&style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![axios](https://camo.githubusercontent.com/23392fa4fc3ffb6ade29cba7aaffa7741daeb97012c70a062cf2370187d6519e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d4646434132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465)
![Recoil](https://img.shields.io/badge/recoil-f26b00?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==)
<img alt="Redux" src="https://img.shields.io/badge/Redux-7649BB.svg?&style=for-the-badge&logo=Redux&logoColor=white"/>
<img height="29" alt="React-query" src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=white"/>
<img alt="Nextjs" src="https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white"/>

</div>

## **📢 프로젝트 실행방법**

실행할 때 반드시 다음 파일을 최상단에 생성후 실행 해주셔야 합니다.

```jsx
// .env.local
NEXT_PUBLIC_SERVER_URL='https://preonboarding-json-server.herokuapp.com'
NEXT_PUBLIC_CLIENT_URL='http://localhost:3000'

```

```jsx
npm install // 설치
npm run dev // 실행
```

## 🚀 기능요구사항

- **레이아웃**
    - Header - 현재 보고있는 메뉴 와 사용자명 보여줘야 함
    - Sider - 현재 보고있는 메뉴 하이라이트
    - Footer - Copyright © December and Company Inc. 가운데 정렬
- **계좌목록**
    - 브로커명, 계좌 활성화 여부, 계좌 상태 필터링
    - 검색, 페이지네이션
    - 기타
        - 고객명 클릭시 사용자 상세화면으로 이동
        - 계좌번호를 누르면 계좌상세 화면으로 이동
        - 계좌번호 앞뒤 두글자 제외하고 나머지  `*` 마스킹 처리
- **계좌상세**
- **사용자 목록**
    - 활성화 여부, 임직원 계좌 여부를 필터링
    - 검색, 페이지네이션
    - 신규 사용자 추가, 잘못 생성한 사용자 삭제, 사용자명 변경
    - 기타
        - 고객명: 가운데 글자 마스킹, 두글자일 경우 성을 제외한 이름 마스킹 처리, 4글자 이상일 경우 마스킹 처리 후 앞뒤 한글자만 표기, 고객명을 클릭시 사용자 상세화면으로 이동
        - 휴대폰 번호 (가운데 4자리 `***` 로 마스킹)
- **사용자 상세**

## 🖥 Demo
로그인|계좌목록 정렬
:-|:-
![login (1)](https://user-images.githubusercontent.com/102936206/202605000-8e583df3-1ba7-41be-8f4a-f8ac786c748d.gif)|![filter-preface](https://user-images.githubusercontent.com/102936206/202604777-a30ca0b6-2888-492d-94f6-7dd1dcd25df0.gif)
**계좌목록-페이지네이션,검색**|**계좌상세-계좌명변경**
![pagenation-search-preface](https://user-images.githubusercontent.com/102936206/202605337-29486e7b-4b35-406d-86ff-f6c677b381a2.gif)|![account-detail-edit](https://user-images.githubusercontent.com/102936206/202609424-e088fcdc-3e03-465f-a14f-42ad8fa95f82.gif)
**사용자목록-정렬**|**사용자목록-페이네이션,검색**
![filter-preface-users](https://user-images.githubusercontent.com/102936206/202605368-fbcc6265-5edc-4103-a2b7-0812301860f9.gif)|![pagenation-search-preface-users](https://user-images.githubusercontent.com/102936206/202605419-b43de6ff-3648-440d-abb4-d66899a93cd0.gif)
**사용자상세-사용자명수정, 사용자삭제**
![edit-delete-users](https://user-images.githubusercontent.com/102936206/202605488-42fb6793-ebca-4500-b2ec-5d0c69d84f0a.gif)


## **👍 Best Practice**

### 1. 레이아웃

공통 컴포넌트로 분리 (레이아웃이 불필요한 

- header, Sider, footer 와 같은 컴포넌트를 합쳐 공통된 레이아웃을 적용하였습니다.
- pathname에 따라 레이아웃(Sider, Header, Footer) 렌더링 여부를 결정했습니다.
```tsx
// pages/_app.tsx
function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
```
```tsx
// components/Layout/index.tsx
function Layout({ children }: Props) {
  const { pathname, asPath } = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [asPath]);

  if (pathname === '/' || pathname.startsWith('/accounts') || pathname.startsWith('/users'))
    return (
      <Container>
        <Sider />
        <Header />
        <Content ref={contentRef}>
          <ChildrenContainer>{children}</ChildrenContainer>
          <Footer />
        </Content>
      </Container>
    );

  return <>{children}</>;
}

export default Layout;
```
### 2.  로그인
- 쿠키사용 - SSR을 위한 **`getServerSideProps`** 함수는 서버에서 호출되기때문에 로컬스토리지나 세션스토리지의 경우 접근 어려움
```tsx
const { mutate } = useMutation((data: { email: string; password: string }) => AuthService.signin(data), {
  onSuccess: (data) => {
    CookieToken.set(data.accessToken);
    router.replace('/');
  },
});
```
- 토큰 만료 시
```tsx
export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  ...

  try {
    accountsRes = await axios.get<Account[]>(
      `http://localhost:4000/accounts?...`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
      };
    }
  }
  ```
### 3. 계좌 목록 / 사용자 목록
### Universal SSR
최초 1회 불러올 때 SSR로 렌더링, 그 이후 필터 변경/페이지 변경/검색어 변경 등이 일어나면 CSR로 렌더링
```tsx
// pages/accounts/index.tsx
export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const { page, limit, broker_id: brokerId = 'all', status = 'all', is_active: isActive = 'all', search = '' } = query;
  const initialQuery = { page: Number(page) || 1, limit: Number(limit) || 30, brokerId, status, isActive, search };
  const queryClient = new QueryClient();

  try {
    const { data, headers } = await axios.get<Account[]>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?${getQueryString(
        initialQuery,
        AccountsService.accountsQueryConverter
      )}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const queryFn = () => Promise.resolve({ data, totalLength: Number(headers?.['x-total-count'] ?? 0) });
    await queryClient.prefetchQuery(['accounts', initialQuery], queryFn);
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
        props: {},
      };
    }
  }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
```
1. 서버에서 클라이언트로부터 쿠키를 통해 토큰을 받아오고, 이 토큰을 통해 API 요청을 보낸다. 
2. React Query Client를 생성하여 API 요청의 결과를 prefetch하고 pageProps로 dehydrate하여 전달한다.
```tsx
// pages/_app.tsx
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <ThemeProvider theme={colors}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
```
3. 클라이언트에서 dehydrate된 api 요청 결과를 pageProps에서 받아서 hydrate함
4. 클라이언트에서 요청한 다른 값들과 동일하게 useQuery로 접근이 가능함

### 마스킹 처리

- 이름

```tsx
export const maskingName = (name: string) => {
  const nameArr = name.split('');
  let parsedName = '';
  nameArr.forEach((n, i) => {
    if (i === 0 || (i === nameArr.length - 1 && i !== 1) || n === ' ') parsedName += n;
    else parsedName += '*';
  });
  return parsedName;
};
```

- 전화번호

```jsx
export const maskingPhoneNum = (number: string) => `${number.slice(0, 4)}****${number.slice(8)}`;
```

- 계좌번호

```tsx
export const parseAccountNumber = (number: string) => {
  let maskedNum = number.slice(0, 2);
  for (let i = 0; i < number.length - 4; i++) {
    maskedNum += '*';
  }
  return maskedNum + number.slice(number.length - 2);
};
```

### 페이지네이션

- response Header의 X-Total-Count에 totalLength로 전체 페이지 수 계산

```jsx
// src/hooks/useAccount.ts
const { data } = useQuery(['accounts', accountQuery], () => AccountsService.getAccounts(accountQuery), {
  ...AccountsService.accountsQueryOptions,
  enabled,
});

...

return {
  page: Number(accountQuery.page),
  limit: Number(accountQuery.limit),
  search: String(accountQuery.search),
  dispatchPage,
  dispatchSearch,
  data: data?.totalLength ? data?.data ?? [] : [],
  totalLength: data?.totalLength ?? 0,
};
```

사용하는 함수

```jsx
// src/components/Accounts/Pagenation.tsx
function Pagenation({ contents, totalLength, page, limit, dispatchPage }: Props) {
	...
	const totalPage = Math.ceil(Number(totalLength) / limit);
	const generatePages = () => {
	  let startPage = (page - 1) / PER_PAGE;
	  startPage = Math.floor(startPage) * PER_PAGE + 1;
	  return new Array(5)
	    .fill(null)
	    .map((_, i) => i + startPage)
	    .filter((item) => item <= totalPage);
	};
	
	return(
		<Container>
			// ...
			{generatePages().map((i: number) => (
	      <Page key={i} onClick={() => handleTargetClick(i)} className={i === page ? ' active' : ''}>
	        {i}
	      </Page>
	    ))}
			// ...
		</Container>
	)
}
```


### 4. 리덕스를 사용한 상태관리

- redux-toolkit의 slice를 활용하여 관심사 별 상태 분리
    - accoutQuery - 계좌 목록 페이지 페이지네이션 및 필터 관리
    - userQuery - 사용자 목록 페이지 페이지네이션 및 필터 관리
    - headerTitle - 활성화된 페이지명으로 Header 컴포넌트에서 렌더
    - reLoginModalSlice - 토근 만료 시 재로그인 모달창 오픈 여부 관리
- state, dispatch를 사용하는 커스텀훅을 작성

```tsx
// store/useQuerySlice.ts

export const userQuerySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    setPage: (state, action: { payload: number }) => {
      state.page = action.payload;
    },
    setLimit: (state, action: { payload: number }) => {
      state.limit = action.payload;
    },
    
		...
	
  },
});

export const { setPage, setLimit, setIsActive, setIsStaff, setSearch } = userQuerySlice.actions;
```

```tsx
// hooks/useUserQueryState.ts

function useUserQueryState() {
  const { userQuery } = useSelector((state: { userQuery: UserQueryState }) => state);

  const isActive = userQuery.is_active ?? 'all';
  const isStaff = userQuery.is_staff ?? 'all';
  const search = userQuery.search ?? '';
  const { page, limit } = userQuery;

  return { isActive, isStaff, page, limit, search };
}

export default useUserQueryState;
```

```tsx
// hooks/useUserQueryDispatch.ts

function useUserQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchIsActive = (isActive: string) => {
    dispatch(setIsActive(isActive));
    setQueryParams({ is_active: isActive });
  };

  const dispatchIsStaff = (isStaff: string) => {
    dispatch(setIsStaff(isStaff));
    setQueryParams({ is_staff: isStaff });
  };

  ...

  return { dispatchIsActive, dispatchIsStaff, dispatchPage, dispatchSearch, dispatchLimit };
}

export default useUserQueryDispatch;
```

### 5. React-Query를 사용한 api 요청

axios 요청을 하는 서비스 로직은 분리하고 리액트쿼리의 useMutation을 활용한 커스텀 훅을 만들어 서버데이터의 변경작업(사용자 추가 및 삭제, 사용자명 변경, 로그인)을 요청하였습니다.

- 서비스 로직

```tsx
// AccountsService.ts

const AccountsService = {

  async patchAccount(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<Account>(`/accounts/${id}`, data);
    return res.data;
  },
};

export default AccountsService;

// AuthService.ts

const AuthService = {
  async signin({ email, password }: AuthLogin) {
    const res = await axios({ bearer: false }).post<AuthResponse, AxiosResponse<AuthResponse>, AuthLogin>('/login', {
      email,
      password,
    });
    return res.data;
  },
};

export default AuthService;

// UserService.ts

const UserService = {

  async patchUser(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<User>(`/users/${id}`, data);
    return res.data;
  },

  async deleteUser(id: string) {
    const res = await axios({ bearer: true }).delete(`/users/${id}`);
    return res.data;
  },
};

export default UserService;
```

- useMutation을 사용한 커스텀 훅

```tsx
// 계좌 수정

const { mutate } = useMutation((data: { name: string }) => AccountsService.patchAccount(account.uuid, data), {
    onSuccess: (data) => {
      setAccountData(data);
    },
  });

// 로그인

const { mutate } = useMutation((data: { email: string; password: string }) => AuthService.signin(data), {
    onSuccess: (data) => {
      CookieToken.set(data.accessToken);
      router.replace('/');
    },
  });

// 사용자 이름 수정

const { mutate } = useMutation((data: { name: string }) => UserService.patchUser(userData.uuid, data), {
    onSuccess: (data) => {
      setUserData(data);
    },
  });
```



## 📦 파일구조
```
📦src
 ┣ 📂components
 ┃ ┣ 📂AccountDetail
 ┃ ┃ ┣ 📜Columns.tsx
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Accounts
 ┃ ┃ ┣ 📜Pagenation.tsx
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┣ 📜TableBodyRow.tsx
 ┃ ┃ ┣ 📜TableHeadRow.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Seo.tsx
 ┃ ┃ ┣ 📜Sider.tsx
 ┃ ┃ ┣ 📜SiderItem.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂UI
 ┃ ┃ ┣ 📜BodyColumn.tsx
 ┃ ┃ ┣ 📜HeadColumn.tsx
 ┃ ┃ ┗ 📜SelectBox.tsx
 ┃ ┣ 📂UserDetail
 ┃ ┃ ┣ 📜Columns.tsx
 ┃ ┃ ┣ 📜DeleteModal.tsx
 ┃ ┃ ┣ 📜UserInfoTable.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Users
 ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┣ 📜TableBodyRow.tsx
 ┃ ┃ ┣ 📜TableHeadRow.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂signin
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜FormTitle.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜ReLoginModal.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAccountNameEdit.ts
 ┃ ┣ 📜useAccountQueryDispatch.ts
 ┃ ┣ 📜useAccountQueryState.ts
 ┃ ┣ 📜useAccountURL.ts
 ┃ ┣ 📜useAccounts.ts
 ┃ ┣ 📜useDeleteModal.ts
 ┃ ┣ 📜useEdit.ts
 ┃ ┣ 📜useExpiredToken.ts
 ┃ ┣ 📜useHeaderTitleDispatch.ts
 ┃ ┣ 📜useParseAccountData.ts
 ┃ ┣ 📜useParseUserData.ts
 ┃ ┣ 📜useParseUserDetailData.ts
 ┃ ┣ 📜useSignin.ts
 ┃ ┣ 📜useSignout.ts
 ┃ ┣ 📜useUserNameEdit.ts
 ┃ ┣ 📜useUserQueryDispatch.ts
 ┃ ┣ 📜useUserQueryState.ts
 ┃ ┣ 📜useUserURL.ts
 ┃ ┗ 📜useUsers.ts
 ┣ 📂pages
 ┃ ┣ 📂accounts
 ┃ ┃ ┣ 📜[accountId].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📜[userId].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜signin.tsx
 ┣ 📂repositories
 ┃ ┗ 📜CookieTokenRepository.ts
 ┣ 📂services
 ┃ ┣ 📜AccountService.ts
 ┃ ┣ 📜AuthService.ts
 ┃ ┗ 📜UserService.ts
 ┣ 📂store
 ┃ ┣ 📜accountQuerySlice.ts
 ┃ ┣ 📜headerTitleSlice.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜reLoginModalSlice.ts
 ┃ ┗ 📜userQuerySlice.ts
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.ts
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜mixins.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂type
 ┃ ┣ 📜account.ts
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜user.ts
 ┣ 📂utils
 ┃ ┣ 📜const.ts
 ┃ ┣ 📜getAxios.ts
 ┃ ┣ 📜getSelectOptions.ts
 ┃ ┣ 📜maskingName.ts
 ┃ ┣ 📜maskingPhoneNum.ts
 ┃ ┣ 📜parseAccountNumber.ts
 ┃ ┣ 📜parseDate.ts
 ┃ ┗ 📜parseDateTime.ts
 ┗ 📜middleware.ts
```

## **📚 팀 규칙**

- **📕 Git commit convention**
    
    
    | rule | 설명 |
    | --- | --- |
    | Feat | 새로운 기능 추가 |
    | Fix | 버그 고친 경우 |
    | Design | css 수정 |
    | Chore | 빌드 업무 수정, 패키지 매니저 수정 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
    | Docs | 문서 수정 |
    | Style | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우 |
    | Rename | 파일 및 폴더 구조 변경 |
    | Refactor | 코드 리팩토링 |
    | Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
    | Remove | 파일 삭제 |
    | Modify | 코드 단순 수정 |
- **📘 Git branch strategy**
- main (배포/운영) ← develop (통합 개발) ← feat-개발내용 (단위 개발)
