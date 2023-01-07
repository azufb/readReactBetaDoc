# State Hooksとは
State(状態)は、ユーザによって入力(input)された情報を、コンポーネントに記憶させる。
入力とは、文字を入力することに限らず、マウスでのクリックなども含まれる。

State Hooksには、``useState``と``useReducer``の2つがある。

## useState
useStateでは、レンダリング間でデータを保持するための変数を宣言する。
```typescript
const [変数名, set関数] = useState(初期値)
```
現在のstateとstateを更新し再レンダリングを引き起こすset関数を要素として持つ関数を返す。

### set関数とは
stateを更新し、再レンダリングを引き起こす関数。
新しい値を直接渡したり、今のstateから計算した値を返す関数を渡すこともできる。