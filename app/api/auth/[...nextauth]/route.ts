import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [

        // ...add more providers here
    ],
})

export { handler as GET, handler as POST }