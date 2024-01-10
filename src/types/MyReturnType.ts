export type MyReturnType<F extends (...args: any[]) => any> = F extends (...args: any[]) => infer T ? T : never;

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn>