import prisma from "@/lib/prisma";

export async function GET(request, ctx) {
  let kaList = await prisma.ka.findMany({
      where: {show: true},
      orderBy: {price: "asc"},
  });
  return Response.json({
    status: true,
    data: kaList,
    result: "success",
  });
}
