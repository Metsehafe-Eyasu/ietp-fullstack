import { initAdmin } from "@/lib/db/firebaseAdmin";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: any) {
  const admin = await initAdmin();
  const db = admin.database();
  
  const ref = db.ref("steps");
  const body = await req.json();
  body.timestamp = Date.now();

  await ref.push(body);
  return NextResponse.json(body);
}
