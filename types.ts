import { Server, Member, Profile } from "@prisma/client"

export type ServerWithMemberesWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};