/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBetaQuestionnaire = /* GraphQL */ `
  mutation CreateBetaQuestionnaire(
    $input: CreateBetaQuestionnaireInput!
    $condition: ModelBetaQuestionnaireConditionInput
  ) {
    createBetaQuestionnaire(input: $input, condition: $condition) {
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
export const updateBetaQuestionnaire = /* GraphQL */ `
  mutation UpdateBetaQuestionnaire(
    $input: UpdateBetaQuestionnaireInput!
    $condition: ModelBetaQuestionnaireConditionInput
  ) {
    updateBetaQuestionnaire(input: $input, condition: $condition) {
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
export const deleteBetaQuestionnaire = /* GraphQL */ `
  mutation DeleteBetaQuestionnaire(
    $input: DeleteBetaQuestionnaireInput!
    $condition: ModelBetaQuestionnaireConditionInput
  ) {
    deleteBetaQuestionnaire(input: $input, condition: $condition) {
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
export const createUserHistory = /* GraphQL */ `
  mutation CreateUserHistory(
    $input: CreateUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    createUserHistory(input: $input, condition: $condition) {
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
export const updateUserHistory = /* GraphQL */ `
  mutation UpdateUserHistory(
    $input: UpdateUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    updateUserHistory(input: $input, condition: $condition) {
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
export const deleteUserHistory = /* GraphQL */ `
  mutation DeleteUserHistory(
    $input: DeleteUserHistoryInput!
    $condition: ModelUserHistoryConditionInput
  ) {
    deleteUserHistory(input: $input, condition: $condition) {
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
export const createVideoMarkers = /* GraphQL */ `
  mutation CreateVideoMarkers(
    $input: CreateVideoMarkersInput!
    $condition: ModelVideoMarkersConditionInput
  ) {
    createVideoMarkers(input: $input, condition: $condition) {
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
export const updateVideoMarkers = /* GraphQL */ `
  mutation UpdateVideoMarkers(
    $input: UpdateVideoMarkersInput!
    $condition: ModelVideoMarkersConditionInput
  ) {
    updateVideoMarkers(input: $input, condition: $condition) {
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
export const deleteVideoMarkers = /* GraphQL */ `
  mutation DeleteVideoMarkers(
    $input: DeleteVideoMarkersInput!
    $condition: ModelVideoMarkersConditionInput
  ) {
    deleteVideoMarkers(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
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
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
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
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
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
export const createSaves = /* GraphQL */ `
  mutation CreateSaves(
    $input: CreateSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    createSaves(input: $input, condition: $condition) {
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
export const updateSaves = /* GraphQL */ `
  mutation UpdateSaves(
    $input: UpdateSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    updateSaves(input: $input, condition: $condition) {
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
export const deleteSaves = /* GraphQL */ `
  mutation DeleteSaves(
    $input: DeleteSavesInput!
    $condition: ModelSavesConditionInput
  ) {
    deleteSaves(input: $input, condition: $condition) {
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
export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
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
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
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
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
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
export const createNovelTags = /* GraphQL */ `
  mutation CreateNovelTags(
    $input: CreateNovelTagsInput!
    $condition: ModelNovelTagsConditionInput
  ) {
    createNovelTags(input: $input, condition: $condition) {
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
export const updateNovelTags = /* GraphQL */ `
  mutation UpdateNovelTags(
    $input: UpdateNovelTagsInput!
    $condition: ModelNovelTagsConditionInput
  ) {
    updateNovelTags(input: $input, condition: $condition) {
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
export const deleteNovelTags = /* GraphQL */ `
  mutation DeleteNovelTags(
    $input: DeleteNovelTagsInput!
    $condition: ModelNovelTagsConditionInput
  ) {
    deleteNovelTags(input: $input, condition: $condition) {
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
export const createAuthors = /* GraphQL */ `
  mutation CreateAuthors(
    $input: CreateAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    createAuthors(input: $input, condition: $condition) {
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
export const updateAuthors = /* GraphQL */ `
  mutation UpdateAuthors(
    $input: UpdateAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    updateAuthors(input: $input, condition: $condition) {
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
export const deleteAuthors = /* GraphQL */ `
  mutation DeleteAuthors(
    $input: DeleteAuthorsInput!
    $condition: ModelAuthorsConditionInput
  ) {
    deleteAuthors(input: $input, condition: $condition) {
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
export const createNovelGenres = /* GraphQL */ `
  mutation CreateNovelGenres(
    $input: CreateNovelGenresInput!
    $condition: ModelNovelGenresConditionInput
  ) {
    createNovelGenres(input: $input, condition: $condition) {
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
export const updateNovelGenres = /* GraphQL */ `
  mutation UpdateNovelGenres(
    $input: UpdateNovelGenresInput!
    $condition: ModelNovelGenresConditionInput
  ) {
    updateNovelGenres(input: $input, condition: $condition) {
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
export const deleteNovelGenres = /* GraphQL */ `
  mutation DeleteNovelGenres(
    $input: DeleteNovelGenresInput!
    $condition: ModelNovelGenresConditionInput
  ) {
    deleteNovelGenres(input: $input, condition: $condition) {
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
export const createNovel = /* GraphQL */ `
  mutation CreateNovel(
    $input: CreateNovelInput!
    $condition: ModelNovelConditionInput
  ) {
    createNovel(input: $input, condition: $condition) {
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
export const updateNovel = /* GraphQL */ `
  mutation UpdateNovel(
    $input: UpdateNovelInput!
    $condition: ModelNovelConditionInput
  ) {
    updateNovel(input: $input, condition: $condition) {
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
export const deleteNovel = /* GraphQL */ `
  mutation DeleteNovel(
    $input: DeleteNovelInput!
    $condition: ModelNovelConditionInput
  ) {
    deleteNovel(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
