//tsrfc

import React from 'react'
import { useLoaderData } from 'react-router-dom';
import useRoutes from '../../hooks/useRoutes'

type Props = {}

export default function Detail({}: Props) {

  const {navigate, params} = useRoutes();

  const data:any = useLoaderData();

  console.log(data);
  return (
    <div>
      Detail : {data?.name}
    </div>
  )
}
