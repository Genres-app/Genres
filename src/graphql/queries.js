/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBetaQuestionnaire = /* GraphQL */ `
  query GetBetaQuestionnaire($id: ID!) {
    getBetaQuestionnaire(id: $id) {
      id
      participant_id
      participant_username
      timestamp
      response
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBetaQuestionnaires = /* GraphQL */ `
  query ListBetaQuestionnaires(
    $filter: ModelBetaQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBetaQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        participant_id
        participant_username
        timestamp
        response
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBetaQuestionnaires = /* GraphQL */ `
  query SyncBetaQuestionnaires(
    $filter: ModelBetaQuestionnaireFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBetaQuestionnaires(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        participant_id
        participant_username
        timestamp
        response
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserHistory = /* GraphQL */ `
  query GetUserHistory($id: ID!) {
    getUserHistory(id: $id) {
      id
      user_id
      action
      start_timestamp
      end_timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserHistories = /* GraphQL */ `
  query ListUserHistories(
    $filter: ModelUserHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        action
        start_timestamp
        end_timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserHistories = /* GraphQL */ `
  query SyncUserHistories(
    $filter: ModelUserHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_id
        action
        start_timestamp
        end_timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideoMarkers = /* GraphQL */ `
  query GetVideoMarkers($id: ID!) {
    getVideoMarkers(id: $id) {
      id
      video_id
      timestamp
      title
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVideoMarkers = /* GraphQL */ `
  query ListVideoMarkers(
    $filter: ModelVideoMarkersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoMarkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        video_id
        timestamp
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideoMarkers = /* GraphQL */ `
  query SyncVideoMarkers(
    $filter: ModelVideoMarkersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideoMarkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        video_id
        timestamp
        title
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      poster_id
      video_title
      time_posted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        poster_id
        video_title
        time_posted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        poster_id
        video_title
        time_posted
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      novel_id
      commentor_id
      content
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        commentor_id
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        commentor_id
        content
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSaves = /* GraphQL */ `
  query GetSaves($id: ID!) {
    getSaves(id: $id) {
      id
      novel_id
      saver_id
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSaves = /* GraphQL */ `
  query ListSaves(
    $filter: ModelSavesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        saver_id
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSaves = /* GraphQL */ `
  query SyncSaves(
    $filter: ModelSavesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSaves(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        saver_id
        timestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      id
      novel_id
      liker_id
      timestamp
      section
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        liker_id
        timestamp
        section
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        liker_id
        timestamp
        section
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNovelTags = /* GraphQL */ `
  query GetNovelTags($id: ID!) {
    getNovelTags(id: $id) {
      id
      novel_id
      tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNovelTags = /* GraphQL */ `
  query ListNovelTags(
    $filter: ModelNovelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNovelTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNovelTags = /* GraphQL */ `
  query SyncNovelTags(
    $filter: ModelNovelTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNovelTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthors = /* GraphQL */ `
  query GetAuthors($id: ID!) {
    getAuthors(id: $id) {
      id
      novel_id
      author_id
      author_username
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        author_id
        author_username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        author_id
        author_username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNovelGenres = /* GraphQL */ `
  query GetNovelGenres($id: ID!) {
    getNovelGenres(id: $id) {
      id
      novel_id
      genre
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNovelGenres = /* GraphQL */ `
  query ListNovelGenres(
    $filter: ModelNovelGenresFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNovelGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        novel_id
        genre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNovelGenres = /* GraphQL */ `
  query SyncNovelGenres(
    $filter: ModelNovelGenresFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNovelGenres(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        novel_id
        genre
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNovel = /* GraphQL */ `
  query GetNovel($id: ID!) {
    getNovel(id: $id) {
      id
      title
      status
      publication_timestamp
      num_likes
      num_saves
      num_comments
      content
      description
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNovels = /* GraphQL */ `
  query ListNovels(
    $filter: ModelNovelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNovels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        status
        publication_timestamp
        num_likes
        num_saves
        num_comments
        content
        description
        author
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNovels = /* GraphQL */ `
  query SyncNovels(
    $filter: ModelNovelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNovels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        status
        publication_timestamp
        num_likes
        num_saves
        num_comments
        content
        description
        author
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      username
      birthday
      is_beta
      readwrite
      password
      email
      is_admin
      profile_pic
      banner_pic
      bio
      followers
      following
      first_name
      last_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        birthday
        is_beta
        readwrite
        password
        email
        is_admin
        profile_pic
        banner_pic
        bio
        followers
        following
        first_name
        last_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        birthday
        is_beta
        readwrite
        password
        email
        is_admin
        profile_pic
        banner_pic
        bio
        followers
        following
        first_name
        last_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
