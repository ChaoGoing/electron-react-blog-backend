export type IFormData = Record<string, any>

export type FormInstance<
  FormData = Record<string, any>,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData
> = Pick<
  Store<FormData, FieldValue, FieldKey>,
  | 'getFieldsValue'
  | 'getFieldValue'
  | 'getFieldError'
  | 'getFieldsError'
  | 'getTouchedFields'
  | 'getFields'
  | 'setFieldValue'
  | 'setFieldsValue'
  | 'setFields'
  | 'resetFields'
  | 'clearFields'
  | 'submit'
  | 'validate'
> & {
  scrollToField: (field: FieldKey, options?: ScrollIntoViewOptions) => void
  getInnerMethods: (inner?: boolean) => InnerMethodsReturnType<FormData, FieldValue, FieldKey>
}
