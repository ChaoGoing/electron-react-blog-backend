import { IFormData } from './typing'

export class Store<FormData extends IFormData> {
  /**
   * 收集Control元素的实例元素实例，以此控制表单元素的更新
   */
  private registerFields: Control<FormData>[] = []

  /**
   * 和formControl 的 touched属性不一样。 只要被改过的字段，这里就会存储。并且不会跟随formControl被卸载而清除
   * reset 的时候清除
   */
  private touchedFields: Record<string, unknown> = {}

  /**
   * 存储form表单的数据
   */
  private store: Partial<FormData> = {}

  /**
   * 初始化数据
   */
  private initialValues: Partial<FormData> = {}

  /**
   * 注册一些回调函数，类型在innerCallbackType上（跟值变化和提交的事件）
   */
  private callbacks: ICallBack<FormData> = {}
}

export function getFormInstance<FormData extends IFormData>(): FormInstance<FormData> {
  const store = new Store<FormData>()
  return {
    getFieldsValue: store.getFieldsValue,
    getFieldValue: store.getFieldValue,
    getFieldError: store.getFieldError,
    getFieldsError: store.getFieldsError,
    getTouchedFields: store.getTouchedFields,
    getFields: store.getFields,
    setFieldValue: store.setFieldValue,
    setFieldsValue: store.setFieldsValue,
    setFields: store.setFields,
    resetFields: store.resetFields,
    clearFields: store.clearFields,
    submit: store.submit,
    validate: store.validate,
    scrollToField: () => {},
    getInnerMethods: (inner?: boolean): InnerMethodsReturnType<FormData> | {} => {
      const methods = {} as InnerMethodsReturnType<FormData> | {}
      const InnerMethodsList: InnerMethodsTuple = [
        'registerField',
        'innerSetInitialValues',
        'innerSetInitialValue',
        'innerSetCallbacks',
        'innerSetFieldValue',
        'innerGetStore'
      ]
      if (inner) {
        InnerMethodsList.map(key => {
          methods[key] = store[key]
        })
      }
      return methods
    }
  }
}
