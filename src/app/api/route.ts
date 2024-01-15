import { initAdmin } from "@/lib/db/firebaseAdmin";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  console.log('start post process')
  const admin = await initAdmin();
  console.log('initalized admin')
  const db = admin.database();
  console.log('admin database connected')
  
  const ref = db.ref("steps");
  console.log('referenced steps')
  const body = await req.json();
  console.log('request body', body)
  body.timestamp = Date.now();

  await ref.push(body);
  console.log('pushed to database')
  return NextResponse.json(body);
}