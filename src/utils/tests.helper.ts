import { WrapperInputOptions, WrapperOptions } from '@/typings'

export function getWrapperProps(options: WrapperInputOptions): WrapperOptions {
  return {
    ...options,
    mocks: {
      $t: (key: string) => key,
      ...options.mocks
    }
  };
}