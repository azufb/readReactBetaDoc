# State Hooksとは
State(状態)は、ユーザによって入力(input)された情報を、コンポーネントに記憶させる。
入力とは、文字を入力することに限らず、マウスでのクリックなども含まれる。

State Hooksには、``useState``と``useReducer``の2つがある。

## useState
``useState``では、レンダリング間でデータを保持するための変数を宣言する。
```typescript
const [変数名, set関数] = useState(初期値);
```
現在のstateとstateを更新し再レンダリングを引き起こすset関数を要素として持つ配列を返す。

### set関数とは
stateを更新し、再レンダリングを引き起こす関数。
新しい値を直接渡したり、今のstateから計算した値を返す関数を渡すこともできる。

## useReducer
``useReducer``では、reducer関数の中で更新処理を含んでいる、レンダリング間でデータを保持するための変数を宣言する。
```typescript
const [変数名, dispatch] = useReducer(reducer, 初期値);
```
現在のstateと、stateを更新して再レンダリングを引き起こすdispatch関数を要素として持つ配列を返す。
第1引数の``reducer``は、stateを更新する方法をまとめた関数。引数として、stateとactionを受け取る。返り値は、更新されたstate。

### dispatch関数とは
stateを更新し、再レンダリングを引き起こす関数。
引数として、actionを渡す。actionは、typeプロパティを持つオブジェクト形式で渡す。typeプロパティは、更新処理内容を識別するための文字列を値として持つ。返り値はなし。
```typescript
dispatch({ type: 処理識別のtype文字列 });
```

## useStateとuseReducerの違い
両方とも、stateを返し、stateを更新できるため、とても似ている。
違いは、直接stateを更新するか、stateの更新処理を行う関数を渡して、その関数の中で更新を行うかの違いがある。