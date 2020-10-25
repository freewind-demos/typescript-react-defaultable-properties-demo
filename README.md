TypeScript React Defaultable Properties Demo
=============================================

在react组件中，我们可以定义一些Optional或者可以为undefined的properties，比如：

```
type Props = {
  name: string,
  city?: string;
  emails: string[] | undefined,
  other: string | undefined | null
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

但这样的问题在于，如果组件内有多个optional或undefined的值，就需要分别处理，看起来乱并且比较容易漏掉，而且起名也比较困难，比如叫`const defaultEmails/emptyArray/EMPTY_STRING_ARRAY`等等。

2. 利用组件的defaultProps，比如：

```
SomeComponent.defaultProps = {
  city: ''
  emails: []
}
```

它的问题在于哪怕我们这里给了默认值，但在类型层面，`city`和`emails`还是optional的，处理起来麻烦并且存在误会。

另外这种方式将会被deprecated

## 本demo解决问题的思路

在这个demo里，我尝试利用typescript的类型来处理：
1. 可以找到`Props`中的全部optional以及可以为undefined的property，供进一步使用
2. 提供了两种`withAll`和`withSome`方法，即可以强行指定全部undefinable的值，也可以仅指定某些默认值，让其它一些不需要处理的继续保持optional/undefined
3. 在给默认值时，使用 `const {name, emails, city} = mergeDefaultProps(props, defaultProps)` 的形式

注意：
在typescript中，optional和undefined实际上被区分对待：

```
type Props = {
  aaa?: string,
  bbb: string | undefined
}
```

对于react组件来说，如果它的property是`Props`，那么外界调用时，只有`aaa`可以不提供，而`bbb`必须显式赋值（哪怕是`undefined`），
参看：https://github.com/freewind-demos/typescript-typing-optional-vs-nullable-property-demo ，但它们两者的共同点就是其值都可以为undefined.

还有一点，解构赋默认值仅对`undefined`有效，而对`null`无效。

所以经过反复考虑，把之前的`optionalProps`改名为`defaultableProps`，把所有可能为undefined的property类型收集起来（包括来自optional的或者可能为undefined），
对`null`不处理。

### mergeDefaultProps

之前没有提供这个函数，而是使用 `{...defaultProps, ...props}`来赋值，但发现这样做有一个问题。

假设用户在调用组件时强行指定了`undefined`，比如：

```
<Hello name="someName" city={undefined} />
```

则`props.city`的值为`undefined`。此时，就算我们在`defaultProps`里提供了`city`的默认值，按照上面的做法，city也会被覆盖为`undefined`。

但如果使用解构操作，则不会：

```
const {city = 'defaultCity'} = props
```

此时就算传入的`props.city`为undefined，但city也会得到指定的默认值`defaultCity`。

为了解决这个问题，我们需要提供了一个函数，不让prop中传入的undefined值覆盖defaultProps，所以提供了`mergeDefaultProps`。

```
npm install
npm run demo
```

It will open page on browser automatically.
