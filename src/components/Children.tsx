import React from 'react'
import { ParentProps } from './interface';
import Loadable from 'react-loadable'
import ChildClassSync from './ChildClassSync'
import ChildHooksSync from './ChildHooksSync'

const ChildClassAsync = Loadable({
  loader: () => import('./ChildClassAsync'),
  loading: () => null
})
const ChildHooksAsync = Loadable({
  loader: () => import('./ChildHooksAsync'),
  loading: () => null
})

const Children = (props: ParentProps) => {
  return <>
    <ChildClassSync {...props} />
    <ChildHooksSync {...props} />
    <ChildClassAsync {...props} />
    <ChildHooksAsync {...props} />
  </>
}

export default Children
