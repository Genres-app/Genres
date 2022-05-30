import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Rw {
  READONLY = "READONLY",
  READWRITE = "READWRITE"
}



type BetaQuestionnaireMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserHistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoMarkersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SavesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NovelTagsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NovelGenresMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NovelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BetaQuestionnaire {
  readonly id: string;
  readonly participant_id?: string | null;
  readonly participant_username?: string | null;
  readonly timestamp?: string | null;
  readonly response?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BetaQuestionnaire, BetaQuestionnaireMetaData>);
  static copyOf(source: BetaQuestionnaire, mutator: (draft: MutableModel<BetaQuestionnaire, BetaQuestionnaireMetaData>) => MutableModel<BetaQuestionnaire, BetaQuestionnaireMetaData> | void): BetaQuestionnaire;
}

export declare class UserHistory {
  readonly id: string;
  readonly user_id?: string | null;
  readonly action?: string | null;
  readonly start_timestamp?: string | null;
  readonly end_timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserHistory, UserHistoryMetaData>);
  static copyOf(source: UserHistory, mutator: (draft: MutableModel<UserHistory, UserHistoryMetaData>) => MutableModel<UserHistory, UserHistoryMetaData> | void): UserHistory;
}

export declare class VideoMarkers {
  readonly id: string;
  readonly video_id?: string | null;
  readonly timestamp?: string | null;
  readonly title?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VideoMarkers, VideoMarkersMetaData>);
  static copyOf(source: VideoMarkers, mutator: (draft: MutableModel<VideoMarkers, VideoMarkersMetaData>) => MutableModel<VideoMarkers, VideoMarkersMetaData> | void): VideoMarkers;
}

export declare class Video {
  readonly id: string;
  readonly poster_id?: string | null;
  readonly video_title?: string | null;
  readonly time_posted?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Video, VideoMetaData>);
  static copyOf(source: Video, mutator: (draft: MutableModel<Video, VideoMetaData>) => MutableModel<Video, VideoMetaData> | void): Video;
}

export declare class Comments {
  readonly id: string;
  readonly novel_id: string;
  readonly commentor_id: string;
  readonly content: string;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comments, CommentsMetaData>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments, CommentsMetaData>) => MutableModel<Comments, CommentsMetaData> | void): Comments;
}

export declare class Saves {
  readonly id: string;
  readonly novel_id?: string | null;
  readonly saver_id?: string | null;
  readonly timestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Saves, SavesMetaData>);
  static copyOf(source: Saves, mutator: (draft: MutableModel<Saves, SavesMetaData>) => MutableModel<Saves, SavesMetaData> | void): Saves;
}

export declare class Likes {
  readonly id: string;
  readonly novel_id?: string | null;
  readonly liker_id?: string | null;
  readonly timestamp?: string | null;
  readonly section?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Likes, LikesMetaData>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

export declare class NovelTags {
  readonly id: string;
  readonly novel_id?: string | null;
  readonly tag?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NovelTags, NovelTagsMetaData>);
  static copyOf(source: NovelTags, mutator: (draft: MutableModel<NovelTags, NovelTagsMetaData>) => MutableModel<NovelTags, NovelTagsMetaData> | void): NovelTags;
}

export declare class Authors {
  readonly id: string;
  readonly novel_id: string;
  readonly author_id: string;
  readonly author_username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}

export declare class NovelGenres {
  readonly id: string;
  readonly novel_id?: string | null;
  readonly genre?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NovelGenres, NovelGenresMetaData>);
  static copyOf(source: NovelGenres, mutator: (draft: MutableModel<NovelGenres, NovelGenresMetaData>) => MutableModel<NovelGenres, NovelGenresMetaData> | void): NovelGenres;
}

export declare class Novel {
  readonly id: string;
  readonly title?: string | null;
  readonly is_published?: boolean | null;
  readonly publication_timestamp?: string | null;
  readonly num_likes?: number | null;
  readonly num_saves?: number | null;
  readonly num_comments?: number | null;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Novel, NovelMetaData>);
  static copyOf(source: Novel, mutator: (draft: MutableModel<Novel, NovelMetaData>) => MutableModel<Novel, NovelMetaData> | void): Novel;
}

export declare class Users {
  readonly id: string;
  readonly username: string;
  readonly birthday?: string | null;
  readonly is_beta?: boolean | null;
  readonly readwrite?: Rw | keyof typeof Rw | null;
  readonly password?: string | null;
  readonly email?: string | null;
  readonly is_admin?: boolean | null;
  readonly profile_pic?: string | null;
  readonly banner_pic?: string | null;
  readonly bio?: string | null;
  readonly followers?: (string | null)[] | null;
  readonly following?: (string | null)[] | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}