import { memo, useCallback, useState } from 'react'

import Radio from 'components/Radio'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'

import * as S from './styles'

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ItemProps = {
  name: string
  type: 'checkbox' | 'radio'
  title: string
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)

  const handleOnChangeValues = useCallback(
    (name: string, value: string | boolean) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }))
    },
    []
  )

  const handleOnChangeFilter = useCallback(() => {
    onFilter(values)
  }, [onFilter, values])

  return (
    <S.Wrapper>
      {items.map((item) => (
        <div key={item.title}>
          <Heading lineBottom lineColor="secondary" size="small">
            {item.title}
          </Heading>

          {item.type === 'checkbox' &&
            item.fields.map((field) => (
              <Checkbox
                key={field.name}
                name={field.name}
                label={field.label}
                labelFor={field.name}
                isChecked={!!values[field.name]}
                onCheck={(value) => handleOnChangeValues(field.name, value)}
              />
            ))}

          {item.type === 'radio' &&
            item.fields.map((field) => (
              <Radio
                id={field.name}
                key={field.name}
                name={item.name}
                value={field.name}
                label={field.label}
                labelFor={field.name}
                defaultChecked={field.name === values[item.name]}
                onChange={() => handleOnChangeValues(item.name, field.name)}
              />
            ))}
        </div>
      ))}

      <Button fullWidth size="medium" onClick={handleOnChangeFilter}>
        Filter
      </Button>
    </S.Wrapper>
  )
}

export default memo(ExploreSidebar)
