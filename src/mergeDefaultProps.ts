function removeUndefinedProps<T>(props: T): T {
  return Object.fromEntries(Object.entries(props).filter(([key, value]) => value !== undefined)) as T
}

export default function mergeDefaultProps<T, DP>(props: T, defaultProps: DP): T & DP {
  return {
    ...defaultProps,
    ...removeUndefinedProps(props)
  }
}
