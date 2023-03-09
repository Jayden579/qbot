import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 15545244,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['-'],
    },
    permissions: {
        all: ['1083234516719640637'],
        ranking: ['1083234516719640637'],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: ['1083234516719640637'],
    },
    logChannels: {
        actions: '',
        shout: '',
    },
    database: {
        enabled: false,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 250,
    verificationChecks: false,
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [
            /* Example:
            {
                rank: 3,
                xp: 30,
            },
            */
        ],
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'WATCHING',
        value: 'for commands.',
    },
    status: 'online',
    deleteWallURLs: false,
}
