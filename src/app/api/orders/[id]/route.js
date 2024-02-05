import { NextResponse } from 'next/server';
import dbConnect from '../../../../libs/mongoDb';
import {getOrdersById} from '../../../../services/orders'

export const GET = async (req, {params}) => {
  
  const {id} = params
  await dbConnect();
  const data = await getOrdersById(id)
  return NextResponse.json({data})

}