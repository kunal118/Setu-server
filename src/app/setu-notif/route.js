import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    { ok: "This is a test endpoint for setu notifications" },
    { status: 200 }
  );
}
