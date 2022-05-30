// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Rw = {
  "READONLY": "READONLY",
  "READWRITE": "READWRITE"
};

const { BetaQuestionnaire, UserHistory, VideoMarkers, Video, Comments, Saves, Likes, NovelTags, Authors, NovelGenres, Novel, Users } = initSchema(schema);

export {
  BetaQuestionnaire,
  UserHistory,
  VideoMarkers,
  Video,
  Comments,
  Saves,
  Likes,
  NovelTags,
  Authors,
  NovelGenres,
  Novel,
  Users,
  Rw
};