import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";

const ServerIdLayout = async ({ children, params }: { children: React.ReactNode }) => {
    const profile = await currentProfile();

    if(!profile) {
        return redirectToSignIn();
    }

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
        }
    })
  return <div>{children}</div>;
};

export default ServerIdLayout;
