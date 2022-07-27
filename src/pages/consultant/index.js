import React from 'react'
import Steps from '../../components/common/Steps'
import WithAuth from '../../components/hoc/WithAuth'

export default function ConsultantForm() {
  return (
    <WithAuth safe={false}>
        <Steps/>
    </WithAuth>
  )
}
