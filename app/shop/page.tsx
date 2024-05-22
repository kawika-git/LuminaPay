import prisma from "@/lib/prisma";
import Cart from "./cart";
import Container from "@/components/app/container";

export default async function Shop(props) {
    // let kaList = await prisma.ka.findMany({
    //     where: {show: true},
    //     orderBy: {price: "asc"},
    // });

    const kalistRes = await fetch("/api/ka", {
        method: "GET",
    })
    const kalistResJson = await kalistRes.json();
    const kaList = kalistResJson.data;

    return (
        <>
            <Container>
                <Cart kaList={kaList}></Cart>
            </Container>
        </>
    );
}
