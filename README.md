TypeScript React Default Optional Properties Demo
=============================================

在react组件中，我们可以定义一些Optional的properties，比如：

```
type Props = {
  name: string,
  city?: string;
  emails?: string[],
}
```

在使用时，为了方便，通常在解构时会给一个默认值，比如这样：

```
function SomeComponent(props: Props) {
  const {name, city = '', emails = []} = props;
}
```

但是这样会存在一个风险：对于`emails`来说，如果外面没有显式传入值，则每次都会创建一个新的`[]`数组给它。

如果`emails`被用于某些hook的dependency，比如:

```
useEffect(() => {
  // do some expensive things
}, [emails]),
```

则该hook将被意外调用。因为`emails`每次都是一个新的`[]`，虽然看起来一样，实际上对于react hook来说，引用变了，会被视为变化。

为了解决该问题，我们可能有两种常用方案：

1. 把`emails = []`中的`[]`抽到组件外，保证它不会重新创建，比如：

```
const defaultEmails: string[] = []
function SomeComponent(props: Props) {
  const {name, city = '', emails = defaultEmails} = props;
}
```

但这样的问题在于，如果组件内有多个optional的值，就需要分别处理，看起来乱并且比较容易漏掉，而且起名也比较困难，比如叫`defaultEmails/emptyArray/EMPTY_STRING_ARRAY`等等。

2. 利用组件的defaultProps，比如：

```
SomeComponent.defaultProps = {
  city: ''
  emails: []
}
```

它的问题在于哪怕我们这里给了默认值，但在类型层面，`city`和`emails`还是optional的，处理起来麻烦并且存在误会。

另外这种方式将会被deprecated

在这个demo里，我尝试利用typescript的类型来处理：
1. 可以找到`Props`中的全部optional的property，供进一步使用
2. 提供了两种`withAll`和`withSome`方法，即可以强行指定全部optional的值，也可以仅指定某些默认值，让其它一些不需要处理的继续保持optional
3. 在给默认值时，使用 `const {name, emails, city} = {...defaultProps, ...props}` 的形式

注意：
在typescript中，optional和undefined实际上被区分对待：

```
type Props = {
  aaa?: string,
  bbb: string | undefined
}
```

对于react组件来说，如果它的property是`Props`，那么外界调用时，只有`aaa`可以不提供，而`bbb`必须显式赋值（哪怕是`undefined`），
所以我们在定义时，应该只关心`aaa`这样的optional类型

参看：https://github.com/freewind-demos/typescript-typing-optional-vs-nullable-property-demo

```
npm install
npm run demo
```

It will open page on browser automatically.
