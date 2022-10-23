export interface WrapperInputOptions {
    propsData?: DynamicObject;
    mocks?: DynamicObject;
    scopedSlots?: DynamicObject;
    stubs?: DynamicObject;
}

export interface WrapperOptions extends WrapperInputOptions {
  mocks: DynamicObject;
}

export interface DynamicObject {
  [key: string]: any;
}
  