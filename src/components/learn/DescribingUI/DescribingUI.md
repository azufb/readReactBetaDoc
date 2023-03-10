## Your First Component
コンポーネントは、UI構築の土台になる。

Reactは、マークアップとCSS、JavaScriptを、再利用可能なUI要素としてカスタムコンポーネントへと組み合わせる。
コンポーネントを作成すると、``<TableOfContents />``と記述できるが、裏側ではHTMLタグで記述されている。

元々、Webページを作成するときは、開発者はコンテンツをマークアップし、処理と反応をJavaScriptで追加していた。Web上でその処理と双方向での反応が「あればよかった」ときは、それで良かった。でも今は、多くのサイトやアプリで当たり前になっている。Reactは、同じ技術を使っている間に双方向性を初めに投入した。Reactコンポーネントは、マークアップに散りばめることができるJavaScript関数である。
※ただし、「大文字で始めないといけない」ことと「JSXを返す」ことを除く。

コンポーネントは、一般的はJavaScript関数なので、複数のコンポーネントを1つのファイルに持つことができる。1つのファイルの中身が多くなってきたら、いつでも別のファイルに分割することができる。

## Writing Markup with JSX
JSXは、JavaScriptの構文拡張で、JavaScriptファイル内にHTMLのようなマークアップを記述できる。が、HTMLとは異なり、実際にはJavaSciiptオブジェクトに変換される。関数は複数のオブジェクトを返せないため、JSXには、1つの親タグ(親要素)が必要。

元々は、HTML・CSS・JavaScriptは別々で存在していたが、Web技術がインタラクティブになるにつれて、ロジックが表示するコンテンツを決めることが増えてきた。JavaScriptが、HTMLのような役割をするようになった。だから、Reactでは、ロジックとマークアップを同じコンポーネント内に共存している。
Reactのコンポーネントは、Reactがブラウザ上にレンダリングするマークアップを含む、JavaScript関数である。

- JSXは、1つの親タグ(親要素)が必要である。
- 全てのタグは閉じる必要がある。
- JavaScriptオブジェクトのキーとなる属性は、キャメルケースで記述する。一部例外はある。

## JavaScript in JSX with Curly Braces
JSXでは、JavaScriptファイルの中でHTMLのようなマークアップを記述するが、そのマークアップの中で少量のロジックを追加したり、変数など参照したい場合がある。その場合は、中括弧を利用することで可能となる。
文字列としてJSX内に含めることはできるが、タグ名としては使えない。また、属性の値として渡すことはできるが、クウォーテーションは不要。
オブジェクトを表示したい場合には、中括弧を含むオブジェクト自体を、中括弧で囲む必要がある。2重で中括弧がつく状態。style属性を利用する場合にインラインでCSSを渡す時など。(非推奨)

## Passing Props to a Component
親コンポーネントは、子コンポーネントにpropsとして情報を渡すことができる。propsは、HTML属性だが、オブジェクトや配列、関数などのJavaScriptの値も渡すことができる。

よくあるpropsとしては、classNameやsrc、altなどがある。

propsの中身をそれぞれ子コンポーネントの引数にすることもできるが、propsオブジェクトのみを引数として渡しても問題ない。
propsは、関数に渡される引数として同じ役割を持つので、子コンポーネントの引数はpropsのみで良い。

propsをそれぞれ渡している場合、size = 100のようにデフォルト値を指定することも可能。

子コンポーネントの子コンポーネントにpropsを渡す場合、スプレッド構文を利用して、{...props}のようにまとめて渡すこともできる。
jsxを子要素として渡すこともできる。その場合、コンポーネントを開始タグと終了タグに分ける必要がある。

propsは常に同じではなく、コンポーネントは異なる値を受け取る。ユーザの選択によってpropsの値が変わるなどもある。

## Conditional Rendering
Reactでは、if文や&&、?:演算子を利用することで、条件に応じたJSXをレンダリングできる。
何も表示したくない場合には、nullを返すようにする必要がある。(コンポーネントは、必ず何かをreturnする必要があるため。)
条件によって、そのコンポーネントで何も表示したくないのであれば、親コンポーネントの中で条件分岐して、そのコンポーネント自体の表示・非表示を切り替える方が、より一般的である。

条件分岐をよりコンパクトに表すために、JavaScriptには三項演算子がある。
ただ、複数の条件でネストする必要がある場合には、コンポーネントが見づらくなるため使わないようにし、変数や関数を使ってまとめるようにする。

他にもよくある表現として、JavaScriptの論理積(AND)演算子がある。(両方の条件がtrueであればtrueになる。一方がfalseであればfalseになる。)
条件がtrueの場合に何らかのJSXをレンダリングしたい場合や他に何もレンダリングしない場合によく使われる。
ただし、AND演算子の左側に数字(特に0)は置かないようにする。0がそのままレンダリングされてしまう。

変数にJSXを渡すこともできる。その場合、括弧でJSXを囲う必要がある。

## Rendering Lists
データの集まりから複数の類似のコンポーネントを表示したい場合には、JavaScriptの配列メソッドを使う。

配列の要素をレンダリングする方法について。
配列を準備し、mapメソッドを使って、返されたJSXノードを要素とする新しい配列を変数に入れる。
その変数をコンポーネントがreturnする。

filterメソッドを使って、要素を絞り込み、絞られた要素で構成された配列をmapで展開して表示することもできる。
アロー関数は、矢印の右側にあるものを返すことになっているので、return文は不要。ただし、矢印の右側にブロックを置いた場合には、return文が必要になる。

配列の中身をmapメソッドで展開する際、他の要素と区別するためにkeyを渡す必要がある。keyは一意の値である必要がある。
keyとしては、データベース上のデータであれば、データベースのkeyやIDを使い、それ以外であれば、Crypto.randomUUID()のようなUUIDを生成するメソッドで生成するか、uuidのようなライブラリを使用して生成したものを使う。

## Keeping Components Pure
コンポーネントを厳密に純粋関数として記述することで、不可解なバグや予期せぬ動作を回避することができる。
純粋関数とは、計算をするだけでそのほかは何もしない関数である。
CS特に関数プログラミングの世界では、純粋関数には次のような特徴がある。
- その関数が呼ばれる前から存在するオブジェクトや変数を変更しない。
- 同じ入力値を受け取ったら、常に同じ結果を返す。

純粋関数としてすでに知っているものとして、算数の計算式がある。y=2xは、xに入れられた値が同じであれば、すべて同じ結果が返ってくる。y=2×3の結果は常に6であり、8になったり、1になったりすることはない。

Reactは、すべてのコンポーネントを純粋関数だと仮定する。つまり、コンポーネントを記述する際には、受け取った入力値に対して、常に同じJSXを返すように書かないといけないということ。

既存の変数やオブジェクトをレンダリング時に変更してしまうことを、mutable(変化/変形/突然変異)と言う。純粋関数は、呼び出される前に作成されたオブジェクトや関数スコープ外にある変数を変更しない。
ただし、レンダリング中に作成された変数やオブジェクトについては、変更してOK。つまり、関数スコープの中で宣言された変数やオブジェクトであれば、変更できる。これを、local mutationと呼ぶ。

関数プログラミングは純度にかなり依存しているので、どこかのタイミングで変更する必要がある。
画面の更新やアニメーションの開始、データの変更など、これらの変更を副作用と呼ぶ。レンダリング中ではなく、メインの処理の「傍で」発生する。
副作用は大抵イベントハンドラ内に属する、ボタンクリックのようなユーザが動作を行ったときに動く関数。もちろん、イベントハンドラもコンポーネント内部に定義されている必要がある。イベントハンドラは、必ずしも純粋である必要はない。

### なぜ、純粋関数にこだわるのか？
純粋関数を書くためには、いくつかの慣習やルールがあるが、それらは素晴らしい機会を解放する。
- サーバのような異なる環境でもコンポーネントを実行できる。純粋関数で作られたコンポーネントは、同じ入力値に対して常に同じ結果を返すので、1つのコンポーネントはたくさんのユーザリクエストに対応できる。
- 入力値が変更されていない場合にコンポーネントのレンダリングをスキップする事で、パフォーマンスを向上できる。純粋関数は常に同じ結果を返すので、これは安全な対応である。
- もし、深いコンポーネント木の中間でデータが変更された場合に、変更前のレンダリングが終わる前に待ち時間なしでレンダリングを再開できる。純度は、安全にいつでも計算を止めることができる。