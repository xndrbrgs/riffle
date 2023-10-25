import {db} from "@/lib/db"

const findConversation = async (memberOneId: string, memberOneTwo: string ) => {
    return await db.conversation.findFirst({
        
    })
}