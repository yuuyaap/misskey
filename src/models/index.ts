import { getRepository, getCustomRepository } from 'typeorm';
import { Instance } from './entities/instance';
import { Following } from './entities/following';
import { Emoji } from './entities/emoji';
import { App } from './entities/app';
import { NoteReaction } from './entities/note-reaction';
import { PollVote } from './entities/poll-vote';
import { Notification } from './entities/notification';
import { Meta } from './entities/meta';
import { Muting } from './entities/muting';
import { SwSubscription } from './entities/sw-subscription';
import { Blocking } from './entities/blocking';
import { NoteWatching } from './entities/note-watching';
import { UserList } from './entities/user-list';
import { UserListJoining } from './entities/user-list-joining';
import { Hashtag } from './entities/hashtag';
import { NoteUnread } from './entities/note-unread';
import { NoteFavorite } from './entities/note-favorite';
import { FollowRequest } from './entities/follow-request';
import { AbuseUserReport } from './entities/abuse-user-report';
import { RegistrationTicket } from './entities/registration-tickets';
import { AuthSession } from './entities/auth-session';
import { ReversiGame } from './entities/games/reversi/game';
import { ReversiMatching } from './entities/games/reversi/matching';
import { MessagingMessage } from './entities/messaging-message';
import { Signin } from './entities/signin';
import { UserRepository } from './repositories/user';
import { NoteRepository } from './repositories/note';
import { DriveFileRepository } from './repositories/drive-file';
import { DriveFolderRepository } from './repositories/drive-folder';
import { Log } from './entities/log';
import { AccessToken } from './entities/access-token';

export const Apps = getRepository(App);
export const Notes = getCustomRepository(NoteRepository);
export const NoteFavorites = getRepository(NoteFavorite);
export const NoteWatchings = getRepository(NoteWatching);
export const NoteReactions = getRepository(NoteReaction);
export const NoteUnreads = getRepository(NoteUnread);
export const PollVotes = getRepository(PollVote);
export const Users = getCustomRepository(UserRepository);
export const UserLists = getRepository(UserList);
export const UserListJoinings = getRepository(UserListJoining);
export const Followings = getRepository(Following);
export const FollowRequests = getRepository(FollowRequest);
export const Instances = getRepository(Instance);
export const Emojis = getRepository(Emoji);
export const DriveFiles = getCustomRepository(DriveFileRepository);
export const DriveFolders = getCustomRepository(DriveFolderRepository);
export const Notifications = getRepository(Notification);
export const Metas = getRepository(Meta);
export const Mutings = getRepository(Muting);
export const Blockings = getRepository(Blocking);
export const SwSubscriptions = getRepository(SwSubscription);
export const Hashtags = getRepository(Hashtag);
export const AbuseUserReports = getRepository(AbuseUserReport);
export const RegistrationTickets = getRepository(RegistrationTicket);
export const AuthSessions = getRepository(AuthSession);
export const AccessTokens = getRepository(AccessToken);
export const Signins = getRepository(Signin);
export const MessagingMessages = getRepository(MessagingMessage);
export const ReversiGames = getRepository(ReversiGame);
export const ReversiMatchings = getRepository(ReversiMatching);
export const Logs = getRepository(Log);
